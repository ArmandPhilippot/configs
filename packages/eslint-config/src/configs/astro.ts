import type { Config, RulesOverrides } from "../types";

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
        "astro/missing-client-only-directive-value": "error",
        "astro/no-conflict-set-directives": "error",
        "astro/no-deprecated-astro-canonicalurl": "error",
        "astro/no-deprecated-astro-fetchcontent": "error",
        "astro/no-deprecated-getentrybyslug": "error",
        "astro/no-exports-from-components": "error",
        "astro/no-set-html-directive": "off",
        "astro/no-set-text-directive": "error",
        "astro/no-unused-css-selector": "warn",
        "astro/no-unused-define-vars-in-style": "error",
        "astro/prefer-class-list-directive": "off",
        "astro/prefer-object-class-list": "off",
        "astro/prefer-split-class-list": "off",
        "astro/sort-attributes": [
          "error",
          { type: "alphabetical", order: "asc", ignoreCase: true },
        ],
        "astro/valid-compile": "error",
        ...rulesOverrides,
      },
    },
    {
      // Configuration for `<script>` tag in `.astro` files.
      files: ["**/*.astro/*.js"],
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
    },
  ];
}
