import type { Config, RulesOverrides } from "../types";

/**
 * Configure the rules known to misbehave in a monorepo/workspace layout.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The monorepo configuration.
 */
export function monorepo(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      name: "arphi/monorepo",
      /*
       * Rules that turn out to misbehave specifically in a monorepo/workspace
       * layout. No rules are forced off here at the moment.
       */
      rules: {
        ...rulesOverrides,
      },
    },
  ];
}
