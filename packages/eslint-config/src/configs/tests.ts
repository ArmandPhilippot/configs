import type { Config, RulesOverrides } from "../types";

const GLOB_EXT = "?([cm])[jt]s?(x)";

/**
 * Configure the tests rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The tests configuration.
 */
export async function tests(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const noOnlyTestsPlugin = await import("eslint-plugin-no-only-tests");
  const vitestPlugin = await import("@vitest/eslint-plugin");

  return [
    {
      files: [
        `**/__tests__/**/*.${GLOB_EXT}`,
        `**/*.spec.${GLOB_EXT}`,
        `**/*.test.${GLOB_EXT}`,
        `**/*.bench.${GLOB_EXT}`,
        `**/*.benchmark.${GLOB_EXT}`,
      ],
      name: "arphi/tests",
      plugins: {
        "no-only-tests": noOnlyTestsPlugin,
        vitest: vitestPlugin.default,
      },
      rules: {
        ...rulesOverrides,
      },
    },
  ];
}
