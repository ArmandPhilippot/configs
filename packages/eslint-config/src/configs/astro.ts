import type { Config, RulesOverrides } from "../types";
import astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

/**
 * Configure the Astro rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config} The Astro configuration.
 */
export function astro(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      name: "arphi/astro",
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
