import js from "@eslint/js";
import globals from "globals";
import type { Config, RulesOverrides } from "../types";

/**
 * Configure the rules for JavaScript.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config} The JavaScript configuration.
 */
export function javascript(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    js.configs.recommended,
    {
      name: "arphi/javascript",
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.es2021,
          ...globals.browser,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        ...rulesOverrides,
      },
    },
  ];
}
