import type { Config, RulesOverrides } from "../types";
import noOnlyTestsPlugin from "eslint-plugin-no-only-tests";
import vitestPlugin from "@vitest/eslint-plugin";

const GLOB_EXT = "?([cm])[jt]s?(x)";

/**
 * Configure the tests rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The tests configuration.
 */
export function tests(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      files: [
        `**/__tests__/**/*.${GLOB_EXT}`,
        `**/*.spec.${GLOB_EXT}`,
        `**/*.test.${GLOB_EXT}`,
        `**/*.bench.${GLOB_EXT}`,
        `**/*.benchmark.${GLOB_EXT}`,
      ],
      name: "arphi/tests",
      plugins: {
        "no-only-tests": noOnlyTestsPlugin,
        vitest: vitestPlugin,
      },
      rules: {
        ...rulesOverrides,
      },
    },
  ];
}
