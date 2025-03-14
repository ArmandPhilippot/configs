import type { Config, RulesOverrides } from "../types";

/**
 * Configure the JSDoc rules.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The JSDoc configuration.
 */
export async function jsdoc(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const jsdocPlugin = await import("eslint-plugin-jsdoc");

  return [
    {
      name: "arphi/jsdoc",
      plugins: {
        jsdoc: jsdocPlugin.default,
      },
      rules: {
        "jsdoc/check-access": "error",
        "jsdoc/check-alignment": "error",
        // Only works with ESLint 7 so disabled.
        "jsdoc/check-examples": "off",
        "jsdoc/check-indentation": ["error", { excludeTags: ["example"] }],
        "jsdoc/check-line-alignment": ["error", "never"],
        "jsdoc/check-param-names": [
          "error",
          {
            allowExtraTrailingParamDocs: false,
            checkDestructured: true,
            disableExtraPropertyReporting: false,
            disableMissingParamChecks: false,
            useDefaultObjectProperties: true,
          },
        ],
        "jsdoc/check-property-names": "error",
        "jsdoc/check-syntax": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-template-names": "error",
        "jsdoc/check-types": ["error", { noDefaults: false }],
        "jsdoc/check-values": ["error", { numericOnlyVariation: false }],
        "jsdoc/convert-to-jsdoc-comments": "off",
        "jsdoc/empty-tags": "error",
        "jsdoc/implements-on-classes": "error",
        // Disabled because buggy: https://github.com/gajus/eslint-plugin-jsdoc/issues/1114
        "jsdoc/imports-as-dependencies": "off",
        "jsdoc/informative-docs": "warn",
        "jsdoc/lines-before-block": "off",
        "jsdoc/match-description": "error",
        "jsdoc/match-name": "off",
        "jsdoc/multiline-blocks": "error",
        // Doesn't play nice with multiline comments...
        "jsdoc/no-bad-blocks": "off",
        "jsdoc/no-blank-block-descriptions": "error",
        "jsdoc/no-blank-blocks": "error",
        "jsdoc/no-defaults": "error",
        "jsdoc/no-missing-syntax": "off",
        "jsdoc/no-multi-asterisks": [
          "error",
          {
            allowWhitespace: true,
            preventAtEnd: true,
            preventAtMiddleLines: true,
          },
        ],
        "jsdoc/no-restricted-syntax": "off",
        "jsdoc/no-types": "off",
        "jsdoc/no-undefined-types": "error",
        "jsdoc/require-asterisk-prefix": "error",
        "jsdoc/require-description": "warn",
        "jsdoc/require-description-complete-sentence": "warn",
        "jsdoc/require-example": "off",
        "jsdoc/require-file-overview": "off",
        "jsdoc/require-hyphen-before-param-description": "error",
        "jsdoc/require-jsdoc": [
          "error",
          {
            checkConstructors: true,
            checkGetters: false,
            checkSetters: false,
            contexts: [
              'ExportNamedDeclaration[declaration.type="TSDeclareFunction"]:not(ExportNamedDeclaration[declaration.type="TSDeclareFunction"] + ExportNamedDeclaration[declaration.type="TSDeclareFunction"])',
              'ExportNamedDeclaration[declaration.type="FunctionDeclaration"]:not(ExportNamedDeclaration[declaration.type="TSDeclareFunction"] + ExportNamedDeclaration[declaration.type="FunctionDeclaration"])',
            ],
            enableFixer: true,
            exemptEmptyConstructors: true,
            exemptEmptyFunctions: false,
            publicOnly: {
              ancestorsOnly: false,
              cjs: true,
              esm: true,
              window: false,
            },
            require: {
              ArrowFunctionExpression: true,
              ClassDeclaration: true,
              ClassExpression: true,
              FunctionDeclaration: false,
              FunctionExpression: true,
              MethodDefinition: false,
            },
          },
        ],
        "jsdoc/require-param": "error",
        "jsdoc/require-param-description": "error",
        "jsdoc/require-param-name": "error",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-property": "error",
        "jsdoc/require-property-description": "error",
        "jsdoc/require-property-name": "error",
        "jsdoc/require-property-type": "error",
        "jsdoc/require-returns": "error",
        "jsdoc/require-returns-check": "error",
        "jsdoc/require-returns-description": "error",
        "jsdoc/require-returns-type": "error",
        "jsdoc/require-template": [
          "error",
          { requireSeparateTemplates: false },
        ],
        "jsdoc/require-throws": "error",
        "jsdoc/require-yields": "error",
        "jsdoc/require-yields-check": "error",
        "jsdoc/sort-tags": "off",
        "jsdoc/tag-lines": ["error", "any", { startLines: 1 }],
        "jsdoc/text-escaping": "off",
        "jsdoc/valid-types": "error",
        ...rulesOverrides,
      },
    },
  ];
}
