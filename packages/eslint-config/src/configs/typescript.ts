import tseslint from "typescript-eslint";
import type { Config, RulesOverrides } from "../types";

/**
 * Configure the rules for TypeScript.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The TypeScript configuration.
 */
export function typescript(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      files: ["**/*.?([cm])ts", "**/*.?([cm])tsx"],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
          sourceType: "module",
          tsconfigRootDir: process.cwd(),
        },
      },
      name: "arphi/typescript",
      plugins: {
        "@typescript-eslint": tseslint.plugin,
      },
      rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        ...rulesOverrides,
      },
    },
  ];
}
