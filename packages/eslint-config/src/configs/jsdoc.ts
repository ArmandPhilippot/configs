import type { Config, RulesOverrides } from "../types";

/**
 * Configure the JSDoc rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The JSDoc configuration.
 */
export async function jsdoc(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const jsdocPlugin = await import("eslint-plugin-jsdoc");

  return [
    {
      name: "arphi/jsdoc",
      plugins: {
        jsdoc: jsdocPlugin.default,
      },
      rules: {
        ...rulesOverrides,
      },
    },
  ];
}
