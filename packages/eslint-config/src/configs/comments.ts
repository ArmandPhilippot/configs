import type { Config, RulesOverrides } from "../types";
import commentsPlugin from "@eslint-community/eslint-plugin-eslint-comments";

/**
 * Configure the comments rules.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The comments configuration.
 */
export function comments(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      name: "arphi/comments",
      plugins: {
        comments: commentsPlugin,
      },
      rules: {
        ...rulesOverrides,
      },
    },
  ];
}
