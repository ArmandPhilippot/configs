import type { Config, RulesOverrides } from "../types";

const GLOB_EXT = "?([cm])[jt]s?(x)";
const GLOB_TS_EXT = "?([cm])ts?(x)";

/**
 * Build the test file glob patterns for a given extension.
 *
 * @param {string} ext - The extension glob to match.
 * @returns {string[]} The globs matching test, spec, and benchmark files.
 */
function testFilePatterns(ext: string): string[] {
  return [
    `**/__tests__/**/*.${ext}`,
    `**/*.spec.${ext}`,
    `**/*.test.${ext}`,
    `**/*.bench.${ext}`,
    `**/*.benchmark.${ext}`,
  ];
}

/**
 * Configure the tests rules.
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
      files: testFilePatterns(GLOB_EXT),
      name: "arphi/tests",
      plugins: {
        "@funboxteam/no-only-tests": noOnlyTestsPlugin.default,
        vitest: vitestPlugin.default,
      },
      rules: {
        ...vitestPlugin.default.configs.recommended.rules,
        "@funboxteam/no-only-tests/no-only-tests": "error",
        "no-param-reassign": "off",
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
        "vitest/max-expects": ["error", { max: 5 }],
        "vitest/max-nested-describe": ["error", { max: 5 }],
        "vitest/no-conditional-tests": "error",
        "vitest/no-disabled-tests": "error",
        "vitest/no-duplicate-hooks": "error",
        "vitest/no-focused-tests": ["error", { fixable: false }],
        "vitest/no-large-snapshots": [
          "error",
          {
            maxSize: 50,
            inlineMaxSize: 50,
          },
        ],
        "vitest/no-mocks-import": "off",
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
        "vitest/prefer-lowercase-title": [
          "error",
          {
            allowedPrefixes: [],
            ignore: ["describe"],
            ignoreTopLevelDescribe: true,
            lowercaseFirstCharacterOnly: true,
          },
        ],
        "vitest/prefer-mock-promise-shorthand": "error",
        "vitest/prefer-snapshot-hint": "error",
        "vitest/prefer-spy-on": "error",
        "vitest/prefer-strict-boolean-matchers": "error",
        "vitest/prefer-strict-equal": "error",
        "vitest/prefer-to-be-object": "error",
        "vitest/prefer-to-contain": "error",
        "vitest/prefer-to-have-length": "error",
        "vitest/prefer-todo": "error",
        "vitest/prefer-vi-mocked": "error",
        "vitest/require-to-throw-message": "warn",
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
      },
    },
    {
      files: testFilePatterns(GLOB_TS_EXT),
      name: "arphi/tests/typed",
      rules: {
        // Vitest-aware unbound-method understands vi.fn() mocks; requires type info, so only enabled for TS test files.
        // Kept at "warn" until proven reliable in real-world use.
        "@typescript-eslint/unbound-method": "off",
        "vitest/unbound-method": ["warn", { ignoreStatic: false }],
      },
    },
    {
      files: testFilePatterns(GLOB_EXT),
      name: "arphi/tests/overrides",
      rules: {
        ...rulesOverrides,
      },
    },
  ];
}
