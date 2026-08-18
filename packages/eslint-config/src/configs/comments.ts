import commentsPlugin from "@eslint-community/eslint-plugin-eslint-comments";
import type { Config, RulesOverrides } from "../types";

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
        "@eslint-community/eslint-comments": commentsPlugin,
      },
      rules: {
        ...commentsPlugin.configs.recommended.rules,
        "@eslint-community/eslint-comments/require-description": [
          "warn",
          { ignore: ["eslint-enable"] },
        ],
        ...rulesOverrides,
      },
    },
  ];
}
