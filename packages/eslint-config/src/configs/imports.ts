import type { Config, RulesOverrides } from "../types";
import importPlugin from "eslint-plugin-import-x";

/**
 * Configure the import rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config} The imports configuration.
 */
export function imports(rulesOverrides: RulesOverrides = {}): Config {
  return {
    name: "arphi/imports",
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...rulesOverrides,
    },
  };
}
