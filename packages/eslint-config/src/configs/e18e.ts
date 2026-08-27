import e18ePlugin from "@e18e/eslint-plugin";
import type { Config, RulesOverrides } from "../types";

/**
 * Configure the e18e rules.
 *
 * @see https://github.com/e18e/eslint-plugin
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The e18e configuration.
 */
export function e18e(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      name: "arphi/e18e",
      plugins: {
        e18e: e18ePlugin,
      },
      rules: {
        ...e18ePlugin.configs.recommended.rules,
        /*
         * Conflicts with `unicorn/prefer-code-point`: unicorn does the
         * opposite, so the two autofixes fight. Keep unicorn as it covers more
         * cases (e.g., `charCodeAt`/`codePointAt`).
         */
        "e18e/prefer-string-fromcharcode": "off",
        /*
         * The rules below duplicate an already-enabled unicorn rule that
         * rewrites to the same API. Unicorn's versions are broader, so the
         * e18e ones are disabled to avoid double reporting.
         */
        // Duplicate of `unicorn/prefer-includes`.
        "e18e/prefer-includes": "off",
        // Duplicate of `unicorn/prefer-date-now`.
        "e18e/prefer-date-now": "off",
        // Duplicate of `unicorn/prefer-regexp-test`.
        "e18e/prefer-regex-test": "off",
        // Duplicate of `unicorn/prefer-array-some`.
        "e18e/prefer-array-some": "off",
        // Duplicate of `unicorn/prefer-at`.
        "e18e/prefer-array-at": "off",
        // Duplicate of `unicorn/no-array-reverse`.
        "e18e/prefer-array-to-reversed": "off",
        // Duplicate of `unicorn/no-array-sort`.
        "e18e/prefer-array-to-sorted": "off",
        ...rulesOverrides,
      },
    },
  ];
}
