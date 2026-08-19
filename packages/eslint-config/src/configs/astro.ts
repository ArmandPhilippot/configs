import type { Config, RulesOverrides } from "../types";
import { getJsxA11yRules } from "./rules/jsx-a11y";

/**
 * Configure the Astro rules.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The Astro configuration.
 */
export async function astro(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const astroParser = await import("astro-eslint-parser");
  const astroPlugin = await import("eslint-plugin-astro");
  const tseslint = await import("typescript-eslint");
  const jsxA11yRules = getJsxA11yRules();
  /*
   * `eslint-plugin-astro` re-exports `eslint-plugin-jsx-a11y`'s rules under
   * its own `astro` plugin, keyed as `jsx-a11y/<rule>`. Re-registering them
   * here under the `jsx-a11y` plugin key keeps the familiar `jsx-a11y/<rule>`
   * IDs (matching `eslint-plugin-jsx-a11y`'s own docs) while still using the
   * implementations wired for Astro's AST.
   */
  const astroJsxA11yPlugin = {
    rules: Object.fromEntries(
      Object.entries(astroPlugin.rules)
        .filter(([key]) => key.startsWith("jsx-a11y/"))
        .map(([key, rule]) => [key.replace("jsx-a11y/", ""), rule])
    ),
  };
  const astroA11yRecommendedRules = Object.fromEntries(
    Object.entries(
      astroPlugin.configs["flat/jsx-a11y-recommended"].at(-1)?.rules ?? {}
    ).map(([key, value]) => [
      key.replace("astro/jsx-a11y/", "jsx-a11y/"),
      value,
    ])
  );

  return [
    {
      files: ["**/*.astro"],
      languageOptions: {
        globals: astroPlugin.environments.astro.globals,
        parser: astroParser,
        parserOptions: {
          extraFileExtensions: [".astro"],
          parser: tseslint.parser,
        },
        sourceType: "module",
      },
      name: "arphi/astro",
      plugins: {
        astro: astroPlugin,
        "jsx-a11y": astroJsxA11yPlugin,
      },
      processor: "astro/client-side-ts",
      rules: {
        ...astroPlugin.configs.recommended.find(
          (config) => config.name === "astro/recommended"
        )?.rules,
        ...astroA11yRecommendedRules,
        // Triggers on function types in Props (e.g. typing `children` as a function), which is a valid Astro pattern.
        "no-unused-vars": "off",
        "astro/no-set-text-directive": "error",
        // Doesn't work with dynamic tags.
        "astro/no-unused-css-selector": "off",
        "astro/sort-attributes": [
          "error",
          { type: "alphabetical", order: "asc", ignoreCase: true },
        ],
        // An Astro component doesn't necessarily use import/export.
        "import-x/unambiguous": "off",
        ...jsxA11yRules,
        ...rulesOverrides,
      },
    },
    {
      // Configuration for `<script>` tag in `.astro` files.
      files: ["**/*.astro/*.js"],
      name: "arphi/astro/client-js",
    },
    {
      // Configuration for `<script>` tag using TypeScript in `.astro` files.
      files: ["**/*.astro/*.ts"],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project: false,
        },
      },
      name: "arphi/astro/client-ts",
    },
    {
      files: ["**/*.ts"],
      name: "arphi/astro/disables-ts",
      rules: {
        /* Parser issue (ota-meshi/eslint-plugin-astro#341, #348): imported
         * Astro components are typed as `any`, triggering the `no-unsafe`
         * rules. */
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
      },
    },
    {
      files: ["**/*.test.ts"],
      name: "arphi/astro/disables-tests",
      rules: {
        // Same parser issue (ota-meshi/eslint-plugin-astro#341, #348): Astro generics are inferred as `any`.
        "@typescript-eslint/restrict-template-expressions": "off",
      },
    },
  ];
}
