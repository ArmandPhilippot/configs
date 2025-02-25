import type { Config, RulesOverrides } from "../types";

/**
 * Configure the React rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The React configuration.
 */
export async function react(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const reactPlugin = await import("@eslint-react/eslint-plugin");
  const reactHooksPlugin = await import("eslint-plugin-react-hooks");

  return [
    {
      files: ["**/*.?([cm])[jt]s?(x)"],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: "module",
      },
      name: "arphi/react",
      plugins: {
        react: reactPlugin.default,
        "react-hooks": reactHooksPlugin,
      },
      rules: {
        ...rulesOverrides,
      },
    },
  ];
}
