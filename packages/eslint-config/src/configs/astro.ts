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
  const astroA11yRules = Object.fromEntries(
    Object.entries(jsxA11yRules).map(([key, value]) => [
      key.replace("jsx-a11y", "astro/jsx-a11y"),
      value,
    ])
  );
  const astroA11yRecommendedRules =
    astroPlugin.configs["flat/jsx-a11y-recommended"].at(-1)?.rules;

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
      },
      processor: "astro/client-side-ts",
      rules: {
        ...astroPlugin.configs.recommended.find(
          (config) => config.name === "astro/recommended"
        )?.rules,
        ...astroA11yRecommendedRules,
        /* This rule is triggered when defining a function in Props type... but
         * a function is valid to define the expected type for children for
         * example so it's best to disable it.  */
        "no-unused-vars": "off",
        "astro/no-set-text-directive": "error",
        // It doesn't seem to work with some use cases (e.g. dynamic tags).
        "astro/no-unused-css-selector": "off",
        "astro/sort-attributes": [
          "error",
          { type: "alphabetical", order: "asc", ignoreCase: true },
        ],
        // An Astro component doesn't necessarily use import/export.
        "import-x/unambiguous": "off",
        ...astroA11yRules,
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
        /* There is a parser issue (see ota-meshi/eslint-plugin-astro#341 and
         * ota-meshi/eslint-plugin-astro#348), I guess this affects most of the
         * `no-unsafe` rules. So when importing an Astro component in a test
         * file ESLint complains about any. */
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
        /* It seems there is parser issue with this one too. While using Astro generic types, well-typed values are inferred as `any` by this rule. */
        "@typescript-eslint/restrict-template-expressions": "off",
      },
    },
  ];
}
