import type { Config, RulesOverrides } from "../types";

/**
 * Configure the Prettier rules.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The Prettier configuration.
 */
export async function prettier(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const prettierConfig = await import("eslint-config-prettier");

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
