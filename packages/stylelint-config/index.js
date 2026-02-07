const kebabCasePattern = "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$";

/** @type {import('stylelint').Config} */
const config = {
  rules: {
    "alpha-value-notation": [
      "percentage",
      {
        exceptProperties: [
          "opacity",
          "fill-opacity",
          "flood-opacity",
          "stop-opacity",
          "stroke-opacity",
        ],
      },
    ],
    "annotation-no-unknown": [true, { ignoreAnnotations: [] }],
    "at-rule-descriptor-no-unknown": true,
    "at-rule-descriptor-value-no-unknown": true,
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: [],
      },
    ],
    "at-rule-no-deprecated": [true, { ignoreAtRules: [] }],
    "at-rule-no-vendor-prefix": true,
    "at-rule-no-unknown": [true, { ignoreAtRules: [] }],
    "at-rule-prelude-no-invalid": [true, { ignoreAtRules: [] }],
    "at-rule-property-required-list": {
      "font-face": ["font-display", "font-family", "font-style"],
    },
    "block-no-empty": [true, { ignore: ["comments"] }],
    "color-function-notation": "modern",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    // Comments between properties should be allowed without empty line.
    "comment-empty-line-before": null,
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "comment-word-disallowed-list": [
      [/^TODO:/, /^FIXME:/],
      {
        severity: "warning",
      },
    ],
    "custom-media-pattern": [
      kebabCasePattern,
      {
        message: (name) =>
          `Expected custom media query name "${name}" to be kebab-case`,
      },
    ],
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-custom-property", "first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "custom-property-no-missing-var-function": true,
    "custom-property-pattern": [
      kebabCasePattern,
      {
        message: (name) =>
          `Expected custom property name "${name}" to be kebab-case`,
      },
    ],
    "declaration-block-no-duplicate-custom-properties": [
      true,
      { ignoreProperties: [] },
    ],
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-syntaxes"],
        ignoreProperties: [],
      },
    ],
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreLonghands: [],
        ignoreShorthands: ["grid-template"],
      },
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-single-line-max-declarations": 1,
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"],
      },
    ],
    "declaration-no-important": true,
    "declaration-property-value-disallowed-list": {
      "/^border(?!-(width|spacing))/": [/thin/, /medium/, /thick/],
      "/^transition/": [/all/],
    },
    "declaration-property-value-keyword-no-deprecated": [
      true,
      { ignoreKeywords: [] },
    ],
    "declaration-property-value-no-unknown": [
      true,
      { ignoreProperties: {}, propertiesSyntax: {}, typesSyntax: {} },
    ],
    "font-family-name-quotes": "always-where-recommended",
    "font-family-no-duplicate-names": [true, { ignoreFontFamilyNames: [] }],
    "font-family-no-missing-generic-family-keyword": [
      true,
      { ignoreFontFamilies: [] },
    ],
    "font-weight-notation": "numeric",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": ["lower", { ignoreFunctions: [] }],
    "function-no-unknown": [true, { ignoreFunctions: [] }],
    "function-url-no-scheme-relative": true,
    "function-url-quotes": ["always", { except: [] }],
    "hue-degree-notation": "angle",
    "import-notation": "url",
    "keyframe-block-no-duplicate-selectors": true,
    "keyframe-declaration-no-important": true,
    "keyframes-name-pattern": [
      kebabCasePattern,
      {
        message: (name) => `Expected keyframe name "${name}" to be kebab-case`,
      },
    ],
    "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
    "length-zero-no-unit": [true, { ignore: [], ignoreFunctions: [] }],
    "lightness-notation": "percentage",
    "max-nesting-depth": [
      // eslint-disable-next-line no-magic-numbers -- Self explanatory
      3,
      {
        ignore: ["pseudo-classes"],
        ignoreAtRules: [],
        ignorePseudoClasses: [],
        ignoreRules: [],
      },
    ],
    "media-feature-name-no-unknown": [true, { ignoreMediaFeatureNames: [] }],
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-name-value-no-unknown": true,
    "media-feature-range-notation": "context",
    "media-query-no-invalid": [true, { ignoreFunctions: [] }],
    "named-grid-areas-no-invalid": true,
    "no-descending-specificity": [true, { ignore: [] }],
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": [true, { disallowInList: false }],
    "no-empty-source": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": [true, { ignoreAtRules: [] }],
    "no-irregular-whitespace": true,
    "no-unknown-animations": true,
    "number-max-precision": [
      // eslint-disable-next-line no-magic-numbers -- Self explanatory
      4,
      {
        ignoreProperties: [],
        ignoreUnits: [],
        insideFunctions: {},
      },
    ],
    "property-no-unknown": [
      true,
      {
        checkPrefixed: true,
        ignoreAtRules: [],
        ignoreProperties: [],
        ignoreSelectors: [],
      },
    ],
    "property-no-vendor-prefix": [true, { ignoreProperties: [] }],
    "rule-empty-line-before": [
      "always",
      {
        except: ["after-single-line-comment", "first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-anb-no-unmatchable": true,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": [
      kebabCasePattern,
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
    "selector-id-pattern": [
      kebabCasePattern,
      {
        message: (selector) =>
          `Expected id selector "${selector}" to be kebab-case`,
      },
    ],
    // eslint-disable-next-line no-magic-numbers -- Self explanatory (but might need to be adjusted)
    "selector-max-attribute": [4, { ignoreAttributes: [] }],
    "selector-max-class": 5,
    "selector-max-combinators": 4,
    // eslint-disable-next-line no-magic-numbers -- Self explanatory (but might need to be adjusted)
    "selector-max-compound-selectors": [4, { ignoreSelectors: [] }],
    "selector-max-id": [
      // eslint-disable-next-line no-magic-numbers -- Self explanatory (but might need to be adjusted)
      5,
      {
        ignoreContextFunctionalPseudoClasses: [],
      },
    ],
    "selector-max-pseudo-class": 5,
    "selector-max-universal": [1, { ignoreAfterCombinators: [">", "+", "~"] }],
    "selector-no-vendor-prefix": [true, { ignoreSelectors: [] }],
    "selector-not-notation": "complex",
    "selector-pseudo-class-no-unknown": [
      true,
      // `:global` is commonly used (CSS modules, Astro...)
      { ignorePseudoClasses: ["global"] },
    ],
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": [true, { ignorePseudoElements: [] }],
    "selector-type-case": ["lower", { ignoreTypes: [] }],
    "selector-type-no-unknown": [
      true,
      { ignore: [], ignoreNamespaces: [], ignoreTypes: [] },
    ],
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": [true, { ignore: [] }],
    "syntax-string-no-invalid": true,
    // eslint-disable-next-line no-magic-numbers -- Self explanatory
    "time-min-milliseconds": [100, { ignore: [] }],
    "unit-no-unknown": [true, { ignoreFunctions: [], ignoreUnits: [] }],
    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: false,
        ignoreFunctions: [],
        ignoreKeywords: [],
        ignoreProperties: [],
      },
    ],
    "value-no-vendor-prefix": [true, { ignoreValues: [] }],
  },
};

export default config;
