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
        ...jsdocPlugin.configs["flat/recommended"].rules,
        "jsdoc/check-access": "error",
        "jsdoc/check-alignment": "error",
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
        "jsdoc/check-types": "error",
        "jsdoc/check-values": "error",
        "jsdoc/empty-tags": "error",
        "jsdoc/implements-on-classes": "error",
        "jsdoc/imports-as-dependencies": "warn",
        "jsdoc/informative-docs": "warn",
        "jsdoc/match-description": "error",
        "jsdoc/multiline-blocks": "error",
        "jsdoc/no-blank-block-descriptions": "error",
        "jsdoc/no-blank-blocks": "error",
        "jsdoc/no-defaults": "error",
        "jsdoc/no-multi-asterisks": [
          "error",
          {
            allowWhitespace: true,
            preventAtEnd: true,
            preventAtMiddleLines: true,
          },
        ],
        "jsdoc/no-undefined-types": "error",
        "jsdoc/require-asterisk-prefix": "error",
        "jsdoc/require-description": "warn",
        "jsdoc/require-description-complete-sentence": "warn",
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
        "jsdoc/tag-lines": ["error", "any", { startLines: 1 }],
        "jsdoc/ts-method-signature-style": ["error", "property"],
        "jsdoc/ts-no-empty-object-type": "error",
        "jsdoc/ts-no-unnecessary-template-expression": "error",
        "jsdoc/ts-prefer-function-type": "error",
        "jsdoc/valid-types": "error",
        ...rulesOverrides,
      },
    },
  ];
}
