import eslintPluginUnicorn from "eslint-plugin-unicorn";
import type { Config, RulesOverrides } from "../types";

/**
 * Configure the unicorn rules.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The unicorn configuration.
 */
export function unicorn(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      name: "arphi/unicorn",
      plugins: {
        unicorn: eslintPluginUnicorn,
      },
      rules: {
        "unicorn/better-regex": ["warn", { sortCharacterClasses: true }],
        "unicorn/catch-error-name": ["error", { ignore: [], name: "error" }],
        "unicorn/consistent-assert": "error",
        "unicorn/consistent-date-clone": "error",
        "unicorn/consistent-destructuring": "error",
        "unicorn/consistent-empty-array-spread": "error",
        "unicorn/consistent-existence-index-check": "error",
        "unicorn/consistent-function-scoping": [
          "error",
          { checkArrowFunctions: false },
        ],
        "unicorn/custom-error-definition": "error",
        "unicorn/empty-brace-spaces": "error",
        "unicorn/error-message": "error",
        "unicorn/escape-case": "error",
        "unicorn/expiring-todo-comments": [
          "warn",
          {
            allowWarningComments: true,
            ignore: [],
            ignoreDatesOnPullRequests: true,
            terms: ["todo", "fixme", "xxx"],
          },
        ],
        "unicorn/explicit-length-check": [
          "error",
          { "non-zero": "greater-than" },
        ],
        "unicorn/filename-case": [
          "error",
          { case: "kebabCase", ignore: [String.raw`^README\.md$`] },
        ],
        "unicorn/import-style": [
          "error",
          {
            checkDynamicImport: true,
            checkExportFrom: false,
            checkImport: true,
            checkRequire: true,
            styles: {
              "node:util": {
                named: true,
              },
              "node:path": {
                default: true,
                named: true,
              },
            },
          },
        ],
        "unicorn/new-for-builtins": "error",
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/no-accessor-recursion": "error",
        "unicorn/no-anonymous-default-export": "error",
        // While it makes sense, not sure about readability...
        "unicorn/no-array-callback-reference": "off",
        "unicorn/no-array-for-each": "error",
        "unicorn/no-array-method-this-argument": "error",
        "unicorn/no-array-push-push": "error",
        "unicorn/no-array-reduce": ["error", { allowSimpleOperations: true }],
        "unicorn/no-await-expression-member": "error",
        "unicorn/no-await-in-promise-methods": "error",
        "unicorn/no-console-spaces": "error",
        "unicorn/no-document-cookie": "error",
        "unicorn/no-empty-file": "error",
        "unicorn/no-for-loop": "error",
        "unicorn/no-hex-escape": "error",
        "unicorn/no-instanceof-builtins": [
          "error",
          { exclude: [], include: [], strategy: "loose" },
        ],
        "unicorn/no-invalid-fetch-options": "error",
        "unicorn/no-invalid-remove-event-listener": "error",
        "unicorn/no-keyword-prefix": "off",
        "unicorn/no-length-as-slice-end": "error",
        "unicorn/no-lonely-if": "error",
        "unicorn/no-magic-array-flat-depth": "error",
        "unicorn/no-named-default": "error",
        "unicorn/no-negated-condition": "error",
        "unicorn/no-negation-in-equality-check": "error",
        "unicorn/no-nested-ternary": "error",
        "unicorn/no-new-array": "error",
        "unicorn/no-new-buffer": "error",
        "unicorn/no-null": "off",
        "unicorn/no-object-as-default-parameter": "error",
        "unicorn/no-process-exit": "error",
        "unicorn/no-single-promise-in-promise-methods": "error",
        "unicorn/no-static-only-class": "error",
        "unicorn/no-thenable": "error",
        "unicorn/no-this-assignment": "error",
        "unicorn/no-typeof-undefined": [
          "error",
          { checkGlobalVariables: true },
        ],
        "unicorn/no-unnecessary-await": "error",
        "unicorn/no-unnecessary-polyfills": "error",
        "unicorn/no-unreadable-array-destructuring": "error",
        "unicorn/no-unreadable-iife": "error",
        "unicorn/no-unused-properties": "off",
        "unicorn/no-useless-fallback-in-spread": "error",
        "unicorn/no-useless-length-check": "error",
        "unicorn/no-useless-promise-resolve-reject": "error",
        "unicorn/no-useless-spread": "error",
        "unicorn/no-useless-switch-case": "error",
        "unicorn/no-useless-undefined": "off",
        "unicorn/no-zero-fractions": "error",
        "unicorn/number-literal-case": [
          "error",
          { hexadecimalValue: "uppercase" },
        ],
        "unicorn/numeric-separators-style": [
          "error",
          {
            onlyIfContainsSeparator: false,
            hexadecimal: {
              minimumDigits: 0,
              groupLength: 2,
            },
            binary: {
              minimumDigits: 0,
              groupLength: 4,
            },
            octal: {
              minimumDigits: 0,
              groupLength: 4,
            },
            number: {
              minimumDigits: 5,
              groupLength: 3,
            },
          },
        ],
        "unicorn/prefer-add-event-listener": [
          "error",
          { excludedPackages: ["koa", "sax"] },
        ],
        "unicorn/prefer-array-find": ["error", { checkFromLast: true }],
        "unicorn/prefer-array-flat": "error",
        "unicorn/prefer-array-flat-map": "error",
        "unicorn/prefer-array-index-of": "error",
        "unicorn/prefer-array-some": "error",
        "unicorn/prefer-at": ["error", { checkAllIndexAccess: false }],
        "unicorn/prefer-blob-reading-methods": "error",
        "unicorn/prefer-code-point": "error",
        "unicorn/prefer-date-now": "error",
        "unicorn/prefer-default-parameters": "error",
        "unicorn/prefer-dom-node-append": "error",
        "unicorn/prefer-dom-node-dataset": "error",
        "unicorn/prefer-dom-node-remove": "error",
        "unicorn/prefer-dom-node-text-content": "error",
        "unicorn/prefer-event-target": "error",
        "unicorn/prefer-export-from": ["error", { ignoreUsedVariables: true }],
        "unicorn/prefer-global-this": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/prefer-json-parse-buffer": "off",
        "unicorn/prefer-keyboard-event-key": "error",
        "unicorn/prefer-logical-operator-over-ternary": "warn",
        "unicorn/prefer-math-min-max": "error",
        "unicorn/prefer-math-trunc": "error",
        "unicorn/prefer-modern-dom-apis": "error",
        "unicorn/prefer-modern-math-apis": "error",
        "unicorn/prefer-module": "error",
        "unicorn/prefer-native-coercion-functions": "error",
        "unicorn/prefer-negative-index": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-number-properties": [
          "error",
          { checkInfinity: true, checkNaN: true },
        ],
        "unicorn/prefer-object-from-entries": "error",
        "unicorn/prefer-optional-catch-binding": "error",
        "unicorn/prefer-prototype-methods": "error",
        "unicorn/prefer-query-selector": "error",
        "unicorn/prefer-reflect-apply": "error",
        "unicorn/prefer-regexp-test": "error",
        "unicorn/prefer-set-has": "error",
        "unicorn/prefer-set-size": "error",
        "unicorn/prefer-spread": "error",
        "unicorn/prefer-string-raw": "error",
        "unicorn/prefer-string-replace-all": "error",
        "unicorn/prefer-string-slice": "error",
        "unicorn/prefer-string-starts-ends-with": "error",
        "unicorn/prefer-string-trim-start-end": "error",
        "unicorn/prefer-structured-clone": "error",
        "unicorn/prefer-switch": [
          "error",
          { emptyDefaultCase: "do-nothing-comment", minimumCases: 3 },
        ],
        "unicorn/prefer-ternary": ["error", "always"],
        "unicorn/prefer-top-level-await": "error",
        "unicorn/prefer-type-error": "error",
        // Too restrictive with external libs
        "unicorn/prevent-abbreviations": "off",
        "unicorn/relative-url-style": ["error", "always"],
        "unicorn/require-array-join-separator": "error",
        "unicorn/require-number-to-fixed-digits-argument": "error",
        "unicorn/require-post-message-target-origin": "off",
        // Unless I'm missing something the rule seems broken
        "unicorn/string-content": "off",
        "unicorn/switch-case-braces": ["error", "avoid"],
        "unicorn/template-indent": [
          "warn",
          {
            tags: ["outdent", "dedent", "gql", "sql", "html", "styled"],
            functions: ["dedent", "stripIndent"],
            selectors: [],
            comments: ["HTML", "indent"],
          },
        ],
        "unicorn/text-encoding-identifier-case": "error",
        "unicorn/throw-new-error": "error",
        ...rulesOverrides,
      },
    },
  ];
}
