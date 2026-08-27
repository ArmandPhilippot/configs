import { readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import arphi from "./index";

/**
 * Find the names of the configs actually returned by `arphi()`.
 *
 * @param {Awaited<ReturnType<typeof arphi>>} configs - The resolved config array.
 * @returns {(string | undefined)[]} The `name` of each config block.
 */
function configNames(configs: Awaited<ReturnType<typeof arphi>>) {
  return configs.map((config) => config.name);
}

describe("arphi factory", () => {
  it("always includes the required presets", async () => {
    expect.assertions(1);

    const config = await arphi();
    const names = configNames(config);

    expect(names).toStrictEqual(
      expect.arrayContaining([
        "arphi/ignores",
        "arphi/javascript",
        "arphi/comments",
        "arphi/imports",
        "arphi/unicorn",
        "arphi/e18e",
      ])
    );
  });

  it("omits optional presets by default", async () => {
    expect.assertions(1);

    const config = await arphi();
    const names = configNames(config);

    expect(names).not.toStrictEqual(
      expect.arrayContaining([
        "arphi/typescript",
        "arphi/react",
        "arphi/astro",
        "arphi/jsdoc",
        "arphi/tests",
        "arphi/prettier",
        "arphi/monorepo",
      ])
    );
  });

  it.each([
    ["typescript", "arphi/typescript"],
    ["react", "arphi/react"],
    ["astro", "arphi/astro"],
    ["jsdoc", "arphi/jsdoc"],
    ["tests", "arphi/tests"],
    ["prettier", "arphi/prettier"],
    ["monorepo", "arphi/monorepo"],
  ] as const)("includes %s's config when enabled", async (flag, name) => {
    expect.assertions(1);

    const config = await arphi({ [flag]: true });

    expect(configNames(config)).toContain(name);
  });

  it("propagates overrides to the matching preset", async () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- assertion count
    expect.assertions(2);

    const [defaultConfig, overriddenConfig] = await Promise.all([
      arphi(),
      arphi({ overrides: { javascript: { eqeqeq: "off" } } }),
    ]);
    const defaultJavascript = defaultConfig.find(
      (item) => item.name === "arphi/javascript"
    );
    const overriddenJavascript = overriddenConfig.find(
      (item) => item.name === "arphi/javascript"
    );

    /*
     * Guard against a false positive: if `eqeqeq` were ever "off" by
     * default, the override assertion below would pass even if overrides
     * stopped being applied at all.
     */
    expect(defaultJavascript?.rules?.["eqeqeq"]).not.toBe("off");
    expect(overriddenJavascript?.rules?.["eqeqeq"]).toBe("off");
  });

  it("appends prettier after the disables footer", async () => {
    expect.assertions(1);

    const config = await arphi({ prettier: true });
    const names = configNames(config);
    const disablesIndex = names.indexOf("arphi/disables/cjs");
    const prettierIndex = names.indexOf("arphi/prettier");

    expect(prettierIndex).toBeGreaterThan(disablesIndex);
  });

  it("appends monorepo after the disables footer", async () => {
    expect.assertions(1);

    const config = await arphi({ monorepo: true });
    const names = configNames(config);
    const disablesIndex = names.indexOf("arphi/disables/cjs");
    const monorepoIndex = names.indexOf("arphi/monorepo");

    expect(monorepoIndex).toBeGreaterThan(disablesIndex);
  });

  it("places user configs between the optional presets and the footer", async () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- assertion count
    expect.assertions(2);

    const userConfig = { name: "user/custom", rules: {} };
    const config = await arphi(
      { typescript: true, prettier: true },
      userConfig
    );
    const names = configNames(config);
    const typescriptIndex = names.indexOf("arphi/typescript");
    const userIndex = names.indexOf("user/custom");
    const disablesIndex = names.indexOf("arphi/disables/cjs");

    expect(userIndex).toBeGreaterThan(typescriptIndex);
    expect(userIndex).toBeLessThan(disablesIndex);
  });
});

/*
 * Packages dynamically imported by an optional preset that aren't already a
 * `dependencies` entry must be declared as an optional peer dependency (and
 * a devDependency, for local builds/tests/lint) — otherwise a consumer
 * enabling that preset can't resolve the plugin.
 */
const OPTIONAL_PRESET_PACKAGES = [
  "astro-eslint-parser",
  "eslint-config-prettier",
  "eslint-plugin-astro",
  "eslint-plugin-jsdoc",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-no-only-tests",
];

type PackageJson = {
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  peerDependenciesMeta?: Record<string, { optional?: boolean }>;
};

const packageJsonPath = path.join(process.cwd(), "package.json");

describe("optional preset packages", () => {
  it.each(OPTIONAL_PRESET_PACKAGES)(
    "declares %s as an optional peer dependency and a devDependency",
    async (packageName) => {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- assertion count
      expect.assertions(3);

      const packageJson = JSON.parse(
        await readFile(packageJsonPath, "utf8")
      ) as PackageJson;

      expect(packageJson.peerDependencies?.[packageName]).toBeDefined();
      expect(packageJson.peerDependenciesMeta?.[packageName]?.optional).toBe(
        true
      );
      expect(packageJson.devDependencies?.[packageName]).toBeDefined();
    }
  );
});
