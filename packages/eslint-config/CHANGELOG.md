# @arphi/eslint-config

## 2.3.1

### Patch Changes

- 09ab7b0: Bumps dependencies
  - `@eslint-community/eslint-plugin-eslint-comments` ^4.5.0 → ^4.6.0
  - `@eslint-react/eslint-plugin`: ^2.2.2 -> ^2.6.1
  - `@eslint/js`: ^9.38.0 -> ^9.39.2
  - `@typescript-eslint/parser`: ^8.46.1 -> ^8.53.0
  - `@typescript-eslint/utils`: ^8.46.1 -> ^8.53.0
  - `@vitest/eslint-plugin`: 1.3.23 -> 1.6.6
  - `eslint`: ^9.38.0 -> ^9.39.2
  - `eslint-plugin-astro`: ^1.3.1 -> ^1.5.0
  - `eslint-plugin-jsdoc`: ^61.1.4 -> ^62.0.0
  - `eslint-plugin-react-hooks`: ^5.2.0 -> ^7.0.1
  - `eslint-plugin-unicorn`: ^61.0.2 -> ^62.0.0
  - `globals`: ^16.4.0 -> ^16.5.0
  - `typescript-eslint`: ^8.46.1 -> ^8.53.0

## 2.3.0

### Minor Changes

- 17f5b79: Adds new rules to the `jsdoc` preset.

  The `eslint-plugin-jsdoc` has been bumped to `61.1.4`. The `v61` brings some new rules which has been added to this package and configured to raised an error:
  - [`jsdoc/ts-method-signature-style`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-method-signature-style.md#readme)
  - [`jsdoc/ts-no-empty-object-type`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-empty-object-type.md#readme)
  - [`jsdoc/ts-no-unnecessary-template-expression`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-unnecessary-template-expression.md#readme)
  - [`jsdoc/ts-prefer-function-type`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-prefer-function-type.md#readme)

  #### What you need to do

  If you're not using the `jsdoc` preset, no updates are required.

  If you're using the `jsdoc` preset, you might need to fix new errors in your codebase or to disable those rules in your configuration file.

### Patch Changes

- 17f5b79: This package is now published using [OIDC trusted publishing](https://docs.npmjs.com/trusted-publishers).
- 17f5b79: Updates dependencies.
  - `@eslint-react/eslint-plugin` to `2.2`
  - `@eslint/js` to `9.38.0`
  - `@types/node` `24.8.1`
  - `@typescript-eslint/parser` to `8.46.1`
  - `@typescript-eslint/utils` to `8.46.1`
  - `@vitest/eslint-plugin` to `1.3.23`
  - `eslint` to `9.38.0`
  - `typescript-eslint` to `8.46.1`

## 2.2.1

### Patch Changes

- d397f6b: Bumps `@eslint-react/eslint-plugin` to v2.

  In `@eslint-react/eslint-plugin` some rules have been renamed or removed. See [their changelog](https://github.com/Rel1cx/eslint-react/blob/HEAD/CHANGELOG.md#v200-2025-09-26) for the details.
  Only a few rules activated by default in the React preset are impacted:
  - `@eslint-react/no-comment-textnodes` has been renamed to `@eslint-react/jsx-no-comment-textnodes`
  - `@eslint-react/no-direct-set-state-in-use-layout-effect` has been removed in favor of a single rule: `@eslint-react/no-direct-set-state-in-use-effect`

## 2.2.0

### Minor Changes

- a254460: Adds 8 new rules from `eslint-plugin-unicorn` for JavaScript.

  The following rules were added in `eslint-plugin-unicorn` v60 and v61 and are now part of this default configuration:
  - [no-array-reverse](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reverse.md)
  - [no-array-sort](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort.md)
  - [no-useless-error-capture-stack-trace](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-error-capture-stack-trace.md)
  - [prefer-bigint-literals](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-bigint-literals.md)
  - [prefer-class-fields](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-class-fields.md)
  - [prefer-classlist-toggle](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-classlist-toggle.md)
  - [require-module-attributes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-attributes.md)
  - [require-module-specifiers](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-specifiers.md)

- 09d8091: Disables the ESLint [`one-var`](https://eslint.org/docs/latest/rules/one-var) rule.

  This rule is too restrictive to be enable by default and has been disabled in this new version. If you were relying on it, you can enable it yourself in your ESLint config file using `overrides`:

  ```js
  import arphi from "@arphi/eslint-config";

  export default arphi({
    overrides: {
      javascript: {
        "one-var": ["error", { initialized: "never", uninitialized: "always" }],
      },
    },
  });
  ```

## 2.1.0

### Minor Changes

- 436d355: Enables ascending alphabetical sorting for imports.

  Imports sorted in ascending alphabetical order are often easier to visually analyze, as sibling modules would be side by side in a long list of imports.

  Previously, the following order wasn't an issue:

  ```ts
  import type { Linter } from "eslint";
  import type { TSESLint } from "@typescript-eslint/utils";
  ```

  Now, it will be reported as an auto-fixable error and the fixed order will be:

  ```ts
  import type { TSESLint } from "@typescript-eslint/utils";
  import type { Linter } from "eslint";
  ```

### Patch Changes

- 28dcc42: Bump dependencies.

## 2.0.1

### Patch Changes

- 866c10d: Fixes an issue where React rules was used on regular JS files.

  Since Create React App is now deprecated, there is no reasons to keep supporting `.js` files: React files should use `.jsx` or `.tsx` extension.

- 866c10d: Fixes the name of some `@eslint-react/eslint-plugin` rules used in the React config.

  The following rules have been renamed in a previous version of `@eslint-react/eslint-plugin`:
  - `@eslint-react/ensure-forward-ref-using-ref`
  - `@eslint-react/no-nested-components`
  - `@eslint-react/use-jsx-vars`
  - `@eslint-react/hooks-extra/no-useless-custom-hooks`

- 866c10d: Fixes an issue where the `@eslint-react` rules was not resolved correctly in React config.

## 2.0.0

### Major Changes

- a8ded2e: Drops support to Node v18.

  Node v18 reaches end of life today (2025-04-30) and one of the new unicorn rules requires Node v20. While supported engines wasn't defined before, now this package explicitly requires a Node version greater or equal to Node v20.

### Minor Changes

- a8ded2e: Adds 3 new rules from `unicorn` plugin: `prefer-import-meta-properties`, `no-unnecessary-array-flat-depth` and `no-unnecessary-array-splice-count`.

### Patch Changes

- a8ded2e: Replaces the deprecated `unicorn/no-array-push-push` rule with `unicorn/prefer-single-call`.
- a8ded2e: Replaces the deprecated `unicorn/no-length-as-slice-end` rule with `unicorn/no-unnecessary-slice-end`.

## 1.0.2

### Patch Changes

- c8a5a2e: Fixes an issue where the `eslint-config-prettier` package was loaded even when Prettier is not enabled.

## 1.0.1

### Patch Changes

- 17506f1: Fixes a rule triggering an ESLint validation failure.

  The `unicorn/number-literal-case` rule [should accept an option](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md) but the rule seems bugged. When `prettier` is not set to `true`, the rule is not deactivated so ESLint will fail to validate the rule.

## 1.0.0

### Major Changes

- e2f7394: Releases the first version of my shareable ESLint configuration.

  This package provides default rules for JavaScript, ESLint comments and imports. Some additional configurations can be activated using a flag:
  - TypeScript
  - Astro
  - React
  - JSDoc
  - Prettier
  - Tests

  The exported function lets you activate the optional configurations and override rules if needed. In addition, you can pass one or more custom configurations after the first argument.
