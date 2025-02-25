import type { Config, RulesOverrides } from "../types";

/**
 * Configure the rules for TypeScript.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The TypeScript configuration.
 */
export async function typescript(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const tseslint = await import("typescript-eslint");

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
        "no-unused-vars": "off", // Disable the default rule
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            destructuredArrayIgnorePattern: "^_",
            ignoreRestSiblings: false,
            vars: "all",
            varsIgnorePattern: "^_",
          },
        ],
        ...rulesOverrides,
      },
    },
  ];
}
