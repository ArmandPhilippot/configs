# @arphi/eslint-config

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
