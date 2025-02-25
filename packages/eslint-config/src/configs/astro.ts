import type { Config, RulesOverrides } from "../types";

/**
 * Configure the Astro rules
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
      files: ["**/*.?([cm])[jt]s?(x)"],
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
