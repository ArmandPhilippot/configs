import type { Config, RulesOverrides } from "../types";

const GLOB_EXT = "?([cm])[jt]s?(x)";

/**
 * Configure the tests rules
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The tests configuration.
 */
export async function tests(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const noOnlyTestsPlugin = await import("eslint-plugin-no-only-tests");
  const vitestPlugin = await import("@vitest/eslint-plugin");

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
        vitest: vitestPlugin.default,
      },
      rules: {
        "@funboxteam/no-only-tests/no-only": "error",
        "vitest/assertion-type": ["error", "jest"],
        "vitest/consistent-test-filename": "error",
        "vitest/consistent-test-it": [
          "error",
          { fn: "test", withinDescribe: "it" },
        ],
        "vitest/expect-expect": [
          "error",
          {
            assertFunctionNames: ["expect"],
            additionalTestBlockFunctions: [],
          },
        ],
        "vitest/max-expect": ["error", { max: 5 }],
        "vitest/max-nested-describe": ["error", { max: 5 }],
        "vitest/no-alias-methods": "off",
        "vitest/no-commented-out-tests": "error",
        "vitest/no-conditional-expect": "error",
        "vitest/no-conditional-in-test": "off",
        "vitest/no-conditional-tests": "error",
        "vitest/no-disabled-tests": "error",
        "vitest/no-duplicate-hooks": "error",
        "vitest/no-focused-tests": ["error", { fixable: false }],
        "vitest/no-hooks": "off",
        "vitest/no-identical-title": "error",
        "vitest/no-import-node-test": "error",
        "vitest/no-interpolation-in-snapshots": "error",
        "vitest/no-large-snapshots": [
          "error",
          {
            maxSize: 50,
            inlineMaxSize: 0,
            allowedSnapshots: [],
          },
        ],
        "vitest/no-mocks-import": "off",
        "vitest/no-restricted-matchers": "off",
        "vitest/no-restricted-vi-methods": "off",
        "vitest/no-standalone-expect": [
          "error",
          {
            additionalTestBlockFunctions: ["test"],
          },
        ],
        "vitest/no-test-prefixes": "error",
        "vitest/no-test-return-statement": "error",
        "vitest/padding-around-all": "error",
        "vitest/prefer-called-with": "error",
        "vitest/prefer-comparison-matcher": "error",
        "vitest/prefer-each": "error",
        "vitest/prefer-equality-matcher": "error",
        "vitest/prefer-expect-assertions": [
          "error",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInCallback: true,
            onlyFunctionsWithExpectInLoop: true,
          },
        ],
        "vitest/prefer-expect-resolves": "error",
        "vitest/prefer-hooks-in-order": "error",
        "vitest/prefer-hooks-on-top": "error",
        "vitest/prefer-lowercase-title": "error",
        "vitest/prefer-mock-promise-shorthand": "error",
        "vitest/prefer-snapshot-hint": "error",
        "vitest/prefer-spy-on": "error",
        "vitest/prefer-strict-boolean-matchers": "error",
        "vitest/prefer-strict-equal": "error",
        "vitest/prefer-to-be-falsy": "off",
        "vitest/prefer-to-be-object": "error",
        "vitest/prefer-to-be-truthy": "off",
        "vitest/prefer-to-be": "off",
        "vitest/prefer-to-contain": "error",
        "vitest/prefer-to-have-length": "error",
        "vitest/prefer-todo": "error",
        "vitest/prefer-vi-mocked": "error",
        "vitest/require-hook": "off",
        "vitest/require-local-test-context-for-concurrent-snapshots": "error",
        "vitest/require-mock-type-parameters": "off",
        "vitest/require-to-throw-message": "warn",
        "vitest/require-top-level-describe": "off",
        "@typescript-eslint/unbound-method": "off",
        "vitest/unbound-method": "error",
        "vitest/valid-describe-callback": "error",
        "vitest/valid-expect-in-promise": "off",
        "vitest/valid-expect": [
          "error",
          {
            alwaysAwait: false,
            asyncMatchers: [],
            minArgs: 1,
            maxArgs: 1,
          },
        ],
        "vitest/valid-title": [
          "error",
          {
            allowArguments: false,
            disallowedWords: ["skip", "only"],
            ignoreTypeOfDescribeName: false,
            mustNotMatch: ["^\\s+$", "^\\s*\\d+\\s*$"],
            mustMatch: ["^\\s*\\w+\\s*$"],
          },
        ],
        ...rulesOverrides,
      },
    },
  ];
}
