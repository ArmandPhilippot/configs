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
        "@eslint-community/eslint-comments/disable-enable-pair": "error",
        "@eslint-community/eslint-comments/no-aggregating-enable": "error",
        "@eslint-community/eslint-comments/no-duplicate-disable": "error",
        "@eslint-community/eslint-comments/no-unlimited-disable": "error",
        "@eslint-community/eslint-comments/no-unused-disable": "error",
        "@eslint-community/eslint-comments/no-unused-enable": "error",
        "@eslint-community/eslint-comments/require-description": [
          "warn",
          { ignore: ["eslint-enable"] },
        ],
        ...rulesOverrides,
      },
    },
  ];
}
