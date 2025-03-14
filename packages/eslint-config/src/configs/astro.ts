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
  const jsxA11yPlugin = await import("eslint-plugin-jsx-a11y");
  const tseslint = await import("typescript-eslint");
  const jsxA11yRules = getJsxA11yRules();
  const astroA11yRules = Object.fromEntries(
    Object.entries(jsxA11yRules).map(([key, value]) => [
      key.replace("jsx-a11y", "astro/jsx-a11y"),
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
        "jsx-a11y": jsxA11yPlugin,
        astro: astroPlugin,
      },
      processor: "astro/client-side-ts",
      rules: {
        /* This rule is triggered when defining a function in Props type... but
         * a function is valid to define the expected type for children for
         * example so it's best to disable it.  */
        "no-unused-vars": "off",
        "astro/missing-client-only-directive-value": "error",
        "astro/no-conflict-set-directives": "error",
        "astro/no-deprecated-astro-canonicalurl": "error",
        "astro/no-deprecated-astro-fetchcontent": "error",
        "astro/no-deprecated-getentrybyslug": "error",
        "astro/no-exports-from-components": "error",
        "astro/no-set-html-directive": "off",
        "astro/no-set-text-directive": "error",
        // It doesn't seem to work with some use cases (e.g. dynamic tags).
        "astro/no-unused-css-selector": "off",
        "astro/no-unused-define-vars-in-style": "error",
        "astro/prefer-class-list-directive": "off",
        "astro/prefer-object-class-list": "off",
        "astro/prefer-split-class-list": "off",
        "astro/sort-attributes": [
          "error",
          { type: "alphabetical", order: "asc", ignoreCase: true },
        ],
        "astro/valid-compile": "error",
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
      name: "arphi/astro/disables",
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
  ];
}
