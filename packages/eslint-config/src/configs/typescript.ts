import type { Config, RulesOverrides } from "../types";

/**
 * Configure the rules for TypeScript.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The TypeScript configuration.
 */
export async function typescript(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const tseslint = await import("typescript-eslint");

  return [
    {
      files: ["**/*.?([cm])ts", "**/*.?([cm])tsx"],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
          sourceType: "module",
          tsconfigRootDir: process.cwd(),
        },
      },
      name: "arphi/typescript",
      plugins: {
        "@typescript-eslint": tseslint.plugin,
      },
      rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
          "error",
          { default: "array", readonly: "array" },
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": [
          "error",
          {
            minimumDescriptionLength: 5,
            "ts-check": false,
            "ts-expect-error": "allow-with-description",
            "ts-ignore": true,
            "ts-nocheck": true,
          },
        ],
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/class-literal-property-style": ["error", "fields"],
        "class-methods-use-this": "off",
        "@typescript-eslint/class-methods-use-this": [
          "error",
          {
            enforceForClassFields: true,
            ignoreClassesThatImplementAnInterface: false,
            ignoreOverrideMethods: false,
          },
        ],
        "@typescript-eslint/consistent-generic-constructors": [
          "error",
          "constructor",
        ],
        "@typescript-eslint/consistent-indexed-object-style": [
          "error",
          "record",
        ],
        "consistent-return": "off",
        "@typescript-eslint/consistent-return": [
          "error",
          { treatUndefinedAsUnspecified: false },
        ],
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            arrayLiteralTypeAssertions: "allow",
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow",
          },
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-exports": [
          "error",
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        // Possible conflict with verbatimModuleSyntax:
        /* "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            disallowTypeAnnotations: false,
            fixStyle: "separate-type-imports",
            prefer: "type-imports",
          },
        ], */
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": [
          "error",
          {
            allowKeywords: true,
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
            allowIndexSignaturePropertyAccess: false,
          },
        ],
        // Not sure about this one...
        /* "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowConciseArrowFunctionExpressionsStartingWithVoid: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowExpressions: false,
            allowFunctionsWithoutTypeParameters: false,
            allowHigherOrderFunctions: true,
            allowIIFEs: true,
            allowTypedFunctionExpressions: true,
          },
        ], */
        /* I prefer JavaScript private fields. */
        "@typescript-eslint/explicit-member-accessibility": "off",
        // Not sure about this one...
        /* "@typescript-eslint/explicit-module-boundary-types": [
          "error",
          {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ], */
        "init-declarations": "off",
        "@typescript-eslint/init-declarations": ["error", "always"],
        "max-params": "off",
        "@typescript-eslint/max-params": [
          "error",
          { countVoidThis: false, max: 3 },
        ],
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/naming-convention": "off",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-array-delete": "error",
        "@typescript-eslint/no-base-to-string": [
          "error",
          { ignoredTypeNames: ["Error", "RegExp", "URL", "URLSearchParams"] },
        ],
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": [
          "error",
          {
            ignoreArrowShorthand: false,
            ignoreVoidOperator: true,
            ignoreVoidReturningFunctions: false,
          },
        ],
        "@typescript-eslint/no-deprecated": "warn",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-duplicate-type-constituents": [
          "error",
          { ignoreIntersections: false, ignoreUnions: false },
        ],
        "@typescript-eslint/no-dynamic-delete": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": ["error", { allow: [] }],
        "@typescript-eslint/no-empty-object-type": [
          "error",
          { allowInterfaces: "never", allowObjectTypes: "never" },
        ],
        "@typescript-eslint/no-explicit-any": [
          "error",
          { fixToUnknown: true, ignoreRestArgs: false },
        ],
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": [
          "error",
          {
            allowForKnownSafeCalls: [],
            allowForKnownSafePromises: [],
            checkThenables: false,
            ignoreIIFE: false,
            ignoreVoid: true,
          },
        ],
        "@typescript-eslint/no-for-in-array": "error",
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-inferrable-types": [
          "error",
          { ignoreParameters: true, ignoreProperties: true },
        ],
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": [
          "error",
          { capIsConstructor: true },
        ],
        "@typescript-eslint/no-invalid-void-type": [
          "error",
          { allowAsThisParameter: false, allowInGenericTypeArguments: true },
        ],
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": [
          "error",
          {
            detectObjects: false,
            enforceConst: true,
            ignore: [1],
            ignoreArrayIndexes: false,
            ignoreClassFieldInitialValues: true,
            ignoreDefaultValues: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreTypeIndexes: false,
          },
        ],
        "@typescript-eslint/no-meaningless-void-operator": [
          "error",
          { checkNever: false },
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksConditionals: true,
            checksSpreads: true,
            checksVoidReturn: true,
          },
        ],
        "@typescript-eslint/no-misused-spread": ["error", { allow: [] }],
        "@typescript-eslint/no-mixed-enums": "error",
        "@typescript-eslint/no-namespace": [
          "error",
          { allowDeclarations: false, allowDefinitionFiles: true },
        ],
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": [
          "error",
          { builtinGlobals: true, ignoreDeclarationMerge: true },
        ],
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": [
          "error",
          { allow: [], allowAsImport: false },
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": [
          "error",
          {
            allow: [],
            builtinGlobals: true,
            hoist: "functions-and-types",
            ignoreFunctionTypeParameterNameValueShadow: false,
            ignoreOnInitialization: false,
            ignoreTypeValueShadow: true,
          },
        ],
        "@typescript-eslint/no-this-alias": [
          "error",
          { allowDestructuring: true, allowedNames: [] },
        ],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
          "error",
          {
            allowComparingNullableBooleansToFalse: true,
            allowComparingNullableBooleansToTrue: true,
          },
        ],
        "@typescript-eslint/no-unnecessary-condition": [
          "error",
          {
            allowConstantLoopConditions: "never",
            checkTypePredicates: false,
          },
        ],
        "@typescript-eslint/no-unnecessary-parameter-property-assignment":
          "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-template-expression": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unnecessary-type-parameters": "off",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "error",
        "@typescript-eslint/no-unsafe-function-type": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-unsafe-type-assertion": "error",
        "@typescript-eslint/no-unsafe-unary-minus": "error",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: false,
            allowTaggedTemplates: false,
            allowTernary: false,
            enforceForJSX: false,
          },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            destructuredArrayIgnorePattern: "^_",
            ignoreRestSiblings: false,
            vars: "all",
            varsIgnorePattern: "^_",
          },
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            allowNamedExports: false,
            classes: true,
            enums: true,
            functions: true,
            ignoreTypeReferences: true,
            typedefs: true,
            variables: true,
          },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/no-wrapper-object-types": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "no-throw-literal": "off",
        "@typescript-eslint/only-throw-error": [
          "error",
          {
            allow: [],
            allowThrowingAny: true,
            allowThrowingUnknown: true,
          },
        ],
        "@typescript-eslint/parameter-properties": [
          "error",
          { allow: [], prefer: "class-property" },
        ],
        "@typescript-eslint/prefer-as-const": "error",
        "prefer-destructuring": "off",
        "@typescript-eslint/prefer-destructuring": [
          "error",
          {
            array: true,
            object: true,
          },
          {
            enforceForDeclarationWithTypeAnnotation: false,
            enforceForRenamedProperties: false,
          },
        ],
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-find": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": [
          "error",
          { allowBitwiseExpressions: false },
        ],
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": [
          "error",
          {
            ignoreBooleanCoercion: false,
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: false,
            ignorePrimitives: {
              bigint: false,
              boolean: false,
              number: false,
              string: false,
            },
            ignoreTernaryTests: false,
          },
        ],
        "@typescript-eslint/prefer-optional-chain": [
          "error",
          {
            allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing:
              false,
            checkAny: true,
            checkBigInt: true,
            checkBoolean: true,
            checkNumber: true,
            checkString: true,
            checkUnknown: true,
            requireNullish: false,
          },
        ],
        "prefer-promise-reject-errors": "off",
        "@typescript-eslint/prefer-promise-reject-errors": [
          "error",
          {
            allowEmptyReject: false,
            allowThrowingAny: false,
            allowThrowingUnknown: false,
          },
        ],
        "@typescript-eslint/prefer-readonly": [
          "error",
          { onlyInlineLambdas: false },
        ],
        "@typescript-eslint/prefer-readonly-parameter-types": ["off"],
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": [
          "error",
          { allowSingleElementEquality: "never" },
        ],
        "@typescript-eslint/promise-function-async": [
          "error",
          {
            allowAny: true,
            allowedPromiseNames: [],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true,
          },
        ],
        "@typescript-eslint/related-getter-setter-pairs": "error",
        "@typescript-eslint/require-array-sort-compare": [
          "error",
          { ignoreStringArrays: true },
        ],
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": [
          "error",
          {
            allowAny: false,
            allowBoolean: false,
            allowNullish: false,
            allowNumberAndString: false,
            allowRegExp: false,
            skipCompoundAssignments: false,
          },
        ],
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            allow: [{ name: ["Error", "URL", "URLSearchParams"], from: "lib" }],
            allowAny: false,
            allowBoolean: false,
            allowNever: false,
            allowNullish: false,
            allowNumber: false,
            allowRegExp: false,
          },
        ],
        "@typescript-eslint/return-await": ["error", "in-try-catch"],
        "@typescript-eslint/strict-boolean-expressions": [
          "error",
          {
            allowAny: false,
            allowNullableBoolean: true,
            allowNullableEnum: false,
            allowNullableNumber: false,
            allowNullableObject: true,
            allowNullableString: false,
            allowNumber: true,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            allowString: true,
          },
        ],
        "@typescript-eslint/switch-exhaustiveness-check": [
          "error",
          {
            allowDefaultCaseForExhaustiveSwitch: true,
            considerDefaultExhaustiveForUnions: true,
            requireDefaultForNonUnion: true,
          },
        ],
        "@typescript-eslint/triple-slash-reference": [
          "error",
          { lib: "always", path: "never", types: "prefer-import" },
        ],
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/unbound-method": ["error", { ignoreStatic: false }],
        "@typescript-eslint/unified-signatures": [
          "error",
          { ignoreDifferentlyNamedParameters: false },
        ],
        "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
        ...rulesOverrides,
      },
    },
  ];
}
