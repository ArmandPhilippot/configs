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
        ...eslintPluginUnicorn.configs.unopinionated.rules,
        /*
         * Disabled: this rule reports false positives for variables that are
         * not DOM nodes.
         */
        "unicorn/better-dom-traversing": "off",
        "unicorn/catch-error-name": ["error", { ignore: [], name: "error" }],
        "unicorn/consistent-assert": "error",
        "unicorn/consistent-class-member-order": "error",
        "unicorn/consistent-destructuring": "error",
        "unicorn/consistent-empty-array-spread": "error",
        "unicorn/consistent-function-scoping": [
          "error",
          { checkArrowFunctions: false },
        ],
        "unicorn/consistent-template-literal-escape": "error",
        "unicorn/custom-error-definition": "error",
        "unicorn/empty-brace-spaces": "error",
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
              util: {
                named: true,
              },
              path: {
                default: true,
                named: true,
              },
            },
          },
        ],
        "unicorn/isolated-functions": "error",
        "unicorn/no-array-concat-in-loop": "error",
        "unicorn/no-array-reduce": ["error", { allowSimpleOperations: true }],
        "unicorn/no-array-splice": "error",
        "unicorn/no-await-expression-member": "error",
        "unicorn/no-duplicate-if-branches": "error",
        "unicorn/no-duplicate-loops": "error",
        "unicorn/no-duplicate-set-values": "error",
        "unicorn/no-for-loop": "error",
        "unicorn/no-loop-iterable-mutation": "error",
        "unicorn/no-nested-ternary": "error",
        "unicorn/no-object-methods-with-collections": "error",
        "unicorn/no-return-array-push": "error",
        "unicorn/no-selector-as-dom-name": "error",
        "unicorn/no-typeof-undefined": [
          "error",
          { checkGlobalVariables: true },
        ],
        "unicorn/no-uncalled-method": "error",
        "unicorn/no-undeclared-class-members": "error",
        "unicorn/no-unnecessary-boolean-comparison": "error",
        "unicorn/no-unnecessary-splice": "error",
        "unicorn/no-unreadable-for-of-expression": "error",
        "unicorn/no-unsafe-property-key": "error",
        "unicorn/no-unsafe-string-replacement": "error",
        "unicorn/no-useless-else": "error",
        "unicorn/no-useless-recursion": "error",
        // Conflicts with init-declarations: flags "let x = undefined;", which init-declarations requires.
        "unicorn/no-useless-undefined": "off",
        "unicorn/prefer-abort-signal-any": "error",
        "unicorn/prefer-array-iterable-methods": "error",
        "unicorn/prefer-array-slice": "error",
        "unicorn/prefer-continue": "error",
        "unicorn/prefer-dom-node-html-methods": "error",
        "unicorn/prefer-error-is-error": "error",
        "unicorn/prefer-export-from": ["error", { checkUsedVariables: false }],
        "unicorn/prefer-group-by": "error",
        "unicorn/prefer-hoisting-branch-code": "error",
        "unicorn/prefer-import-meta-properties": "error",
        "unicorn/prefer-location-assign": "error",
        "unicorn/prefer-object-destructuring-defaults": "error",
        "unicorn/prefer-observer-apis": "error",
        "unicorn/prefer-private-class-fields": "error",
        "unicorn/prefer-promise-try": "error",
        "unicorn/prefer-query-selector": "error",
        "unicorn/prefer-set-methods": "error",
        "unicorn/prefer-simple-condition-first": "error",
        "unicorn/prefer-single-object-destructuring": "error",
        "unicorn/prefer-smaller-scope": "error",
        "unicorn/prefer-spread": "error",
        "unicorn/prefer-switch": [
          "error",
          { emptyDefaultCase: "do-nothing-comment", minimumCases: 3 },
        ],
        "unicorn/relative-url-style": ["error", "always"],
        "unicorn/switch-case-braces": ["error", "avoid"],
        "unicorn/switch-case-break-position": "error",
        "unicorn/template-indent": [
          "warn",
          {
            tags: ["outdent", "dedent", "gql", "sql", "html", "styled"],
            functions: ["dedent", "stripIndent"],
            selectors: [],
            comments: ["HTML", "indent"],
          },
        ],
        ...rulesOverrides,
      },
    },
  ];
}
