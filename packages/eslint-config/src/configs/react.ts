import type { Config, RulesOverrides } from "../types";
import reactPlugin from "@eslint-react/eslint-plugin";
import reactHooksPlugin from "eslint-plugin-react-hooks";

/**
 * Configure the React rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config} The React configuration.
 */
export function react(rulesOverrides: RulesOverrides = {}): Config {
  return {
    name: "arphi/react",
    files: ["**/*.?([cm])[jt]s?(x)"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: "module",
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...rulesOverrides,
    },
  };
}
