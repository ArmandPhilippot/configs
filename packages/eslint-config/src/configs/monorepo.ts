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
      rules: {
        /*
         * Reads `process.cwd()/package.json` once per run, so from a
         * workspace root it can't see dependencies declared in a package's
         * own package.json and reports false positives.
         */
        "jsdoc/imports-as-dependencies": "off",
        ...rulesOverrides,
      },
    },
  ];
}
