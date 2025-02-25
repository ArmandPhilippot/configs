import type { Config, RulesOverrides } from "../types";
import prettierConfig from "eslint-config-prettier";

/**
 * Configure the Prettier rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The Prettier configuration.
 */
export function prettier(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      ...prettierConfig,
      name: "arphi/prettier",
      rules: {
        ...prettierConfig.rules,
        ...rulesOverrides,
      },
    },
  ];
}
