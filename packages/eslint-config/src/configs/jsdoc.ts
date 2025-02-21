import type { Config, RulesOverrides } from "../types";
import jsdocPlugin from "eslint-plugin-jsdoc";

/**
 * Configure the JSDoc rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config} The JSDoc configuration.
 */
export function jsdoc(rulesOverrides: RulesOverrides = {}): Config {
  return {
    name: "arphi/jsdoc",
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      ...rulesOverrides,
    },
  };
}
