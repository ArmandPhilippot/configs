# @arphi/eslint-config

## 3.0.0

### Major Changes

- f36ae3e: Raises the minimum supported ESLint, Node.js, and TypeScript versions.
  
  The minimum supported versions are now:
  
  - `^10.4.0` for ESLint. Support for ESLint 9 has been dropped as it reached end of life on 2026-08-06.
  - `^22.13.0 || >=24` for Node.js.
  - `^5.9.0 || ^6.0.0` for TypeScript. This is now an explicit, required peer dependency.
- f36ae3e: Updates the `tests` preset to extend [`@vitest/eslint-plugin`](https://github.com/vitest-dev/eslint-plugin-vitest#rules)'s own `recommended` preset.
  
  You may see new lint results. Two new rules have been added to the `@vitest/eslint-plugin` plugin: [`no-unneeded-async-expect-function`](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-unneeded-async-expect-function.md) and [`prefer-called-exactly-once-with`](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-exactly-once-with.md).
- f36ae3e: Updates the `jsdoc` preset to extend [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc#rules)'s own `flat/recommended` preset.
  
  You may see new lint results, since rules that weren't explicitly configured before are now inherited from that preset.
- f36ae3e: Updates the default config rules, regardless of which optional presets you turn on.
  
  You may see new lint results: `unicorn` now inherits many rules from [`eslint-plugin-unicorn`'s own `unopinionated` preset](https://github.com/sindresorhus/eslint-plugin-unicorn#rules) that weren't explicitly configured before.
  
  #### JavaScript
  
  Two new ESLint core rules are now enabled: [`no-unassigned-vars`](https://eslint.org/docs/latest/rules/no-unassigned-vars) and [`preserve-caught-error`](https://eslint.org/docs/latest/rules/preserve-caught-error).
  
  #### Comments
  
  The deprecated [`@eslint-community/eslint-comments/no-unused-disable`](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html) rule has been removed. Unused `eslint-disable` comments are still reported via the enabled ESLint's `linterOptions.reportUnusedDisableDirectives` option, which is already enabled.
  
  #### Unicorn
  
  The following rules were removed or renamed upstream:
  
  - [`unicorn/better-regex`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/deleted-and-deprecated-rules.md#better-regex): removed by the plugin, no replacement.
  - [`unicorn/no-hex-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/deleted-and-deprecated-rules.md#no-hex-escape) becomes [`unicorn/prefer-unicode-code-point-escapes`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-unicode-code-point-escapes.md).
  - [`unicorn/no-array-for-each`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/deleted-and-deprecated-rules.md#no-array-for-each) becomes [`unicorn/no-for-each`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-each.md).
  - [`unicorn/prefer-dom-node-dataset`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/deleted-and-deprecated-rules.md#prefer-dom-node-dataset) becomes [`unicorn/dom-node-dataset`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/dom-node-dataset.md).
  
  The renamed rules above are still enabled under their new name through the preset, so there's no coverage loss. But, you may need to update any overrides in your own config that reference the old names.
  
  The following rules are now following the preset's own severity/options instead of this config's previous custom tuning:
  
  - [`unicorn/expiring-todo-comments`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md): the severity changed from `warn` to `error`
  - [`unicorn/prefer-logical-operator-over-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md): the severity changed from `warn` to `error`
  - [`unicorn/prefer-number-properties`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md): still `error`, but the `checkInfinity` and `checkNaN` options now default to `false` instead of `true`
  
  If you want any of these back at their previous severity or options, override them explicitly:
  
  ```js
  import arphi from "@arphi/eslint-config";
  
  export default arphi({
    overrides: {
      unicorn: {
        "unicorn/expiring-todo-comments": "warn",
        "unicorn/prefer-logical-operator-over-ternary": "warn",
        "unicorn/prefer-number-properties": [
          "error",
          { checkInfinity: true, checkNaN: true },
        ],
      },
    },
  });
  ```
  
  Some new rules have been added explicitly on top of the preset. Read [the plugin's own documentation](https://github.com/sindresorhus/eslint-plugin-unicorn#rules) for their details and options:
  
  - `consistent-class-member-order`
  - `no-array-concat-in-loop`
  - `no-array-splice`
  - `no-duplicate-if-branches`
  - `no-duplicate-loops`
  - `no-duplicate-set-values`
  - `no-loop-iterable-mutation`
  - `no-object-methods-with-collections`
  - `no-return-array-push`
  - `no-selector-as-dom-name`
  - `no-uncalled-method`
  - `no-undeclared-class-members`
  - `no-unnecessary-boolean-comparison`
  - `no-unnecessary-splice`
  - `no-unreadable-for-of-expression`
  - `no-unsafe-property-key`
  - `no-unsafe-string-replacement`
  - `no-useless-else`
  - `no-useless-recursion`
  - `prefer-abort-signal-any`
  - `prefer-array-iterable-methods`
  - `prefer-array-slice`
  - `prefer-continue`
  - `prefer-dom-node-html-methods`
  - `prefer-error-is-error`
  - `prefer-group-by`
  - `prefer-hoisting-branch-code`
  - `prefer-location-assign`
  - `prefer-object-destructuring-defaults`
  - `prefer-observer-apis`
  - `prefer-private-class-fields`
  - `prefer-promise-try`
  - `prefer-set-methods`
  - `prefer-single-object-destructuring`
  - `prefer-smaller-scope`
- f36ae3e: Rebuilds each preset based on the predefined presets of its underlying plugins.
  
  Previously, each preset manually listed every rule. As the list grows, it becomes harder to keep track of rules that have been removed, deprecated, or updated.
  
  Each existing preset is now based on one of the predefined presets of its underlying plugins. If any of its rules are faulty or irrelevant to the project, they are manually disabled. Rules not included in the predefined preset continue to be enabled manually.
  
  As a result, you may see new lint results on code that passed before, since presets bring in rules that weren't explicitly configured here previously.
  
  Please review the extended presets to see how this affects your project and how to adjust or disable these rules.
  
  The base configuration still manually configures ESLint rules and now extends:
  
  - [`@eslint-community/eslint-plugin-eslint-comments` recommended rules](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/)
  - [`eslint-plugin-import-x` recommended rules](https://github.com/un-ts/eslint-plugin-import-x#rules)
  - [`eslint-plugin-unicorn` unopinionated rules](https://github.com/sindresorhus/eslint-plugin-unicorn#rules)
  
  And here is the mapping for each preset:
  
  - `astro` extends [`eslint-plugin-astro`'s recommended](https://ota-meshi.github.io/eslint-plugin-astro/rules/) and [JSX A11y rules](https://ota-meshi.github.io/eslint-plugin-astro/rules/#a11y-extension-rules)
  - `jsdoc` extends [`eslint-plugin-jsdoc` recommended rules](https://github.com/gajus/eslint-plugin-jsdoc#rules)
  - `react` extends [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/docs/presets) and [`eslint-plugin-jsx-a11y` recommended rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules)
  - `tests` extends [`@vitest/eslint-plugin` recommended rules](https://github.com/vitest-dev/eslint-plugin-vitest#rules)
  - `typescript` extends [`typescript-eslint` recommended type-checked rules](https://typescript-eslint.io/users/configs#recommended-type-checked)
- f36ae3e: Updates the `astro` preset to extend [`eslint-plugin-astro`](https://ota-meshi.github.io/eslint-plugin-astro/rules/)'s own `recommended` and `flat/jsx-a11y-recommended` presets.
  
  You may see new lint results, since rules that weren't explicitly configured before are now inherited from those presets.
  
  [`astro/valid-compile`](https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/) was also removed as it was deprecated by `eslint-plugin-astro` in favor of running `astro check` instead.
- f36ae3e: Updates the `typescript` preset to extend [`typescript-eslint`'s own `recommendedTypeChecked` preset](https://typescript-eslint.io/users/configs#recommended-type-checked).
  
  You may see new lint results, since rules that weren't explicitly configured before are now inherited from that preset.
- f36ae3e: Updates the `react` preset to extend [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/docs/presets)'s own `recommended` preset.
  
  You may see new lint results, since `@eslint-react` rules that weren't explicitly configured before are now inherited from its `recommended` preset.
  
  `@eslint-react/eslint-plugin` was also bumped from `^2.13.0` to `^5.18.6`. Sub-namespaced rule IDs (`dom/*`, `web-api/*`, `naming-convention/*`, `hooks-extra/*`) were flattened into hyphenated top-level names, for example:
  
  ```diff
  import arphi from "@arphi/eslint-config";
  
  export default arphi({
    react: true,
    overrides: {
      react: {
  -      "@eslint-react/dom/no-missing-button-type": "off"
  +      "@eslint-react/dom-no-missing-button-type": "off"
      },
    },
  });
  ```
  
  The hooks rules also moved out of the separate `eslint-plugin-react-hooks` package into `@eslint-react` itself, for example:
  
  ```diff
  import arphi from "@arphi/eslint-config";
  
  export default arphi({
    react: true,
    overrides: {
      react: {
  -      "react-hooks/exhaustive-deps": "off"
  +      "@eslint-react/exhaustive-deps": "off"
      },
    },
  });
  ```
  
  If your own config overrides a rule by its old ID, ESLint will throw a configuration error as soon as it lints a file, rather than silently ignoring it. See the [plugin's own changelog](https://github.com/Rel1cx/eslint-react/blob/main/CHANGELOG.md) for the full rename mapping.
  
  The plugin itself also removed several rules, without replacing them:
  
  - `no-complex-conditional-rendering`
  - `no-duplicate-jsx-props`
  - `no-redundant-should-component-update`
  - `no-unnecessary-use-callback`
  - `no-unnecessary-use-memo`
  - `no-useless-forward-ref`
  - `prefer-destructuring-assignment`
  - `prefer-namespace-import`
  - `prefer-read-only-props`
  - `prefer-use-state-lazy-initialization`
  - `naming-convention/component-name`
  - `jsx-uses-vars`.
  
  The [`@eslint-react/no-unused-state`](https://eslint-react.xyz/docs/rules/no-unused-state) rule has also been removed from this preset. `@eslint-react/eslint-plugin` itself marks it experimental and not recommended for production use.

### Minor Changes

- e584a5f: Adds a `monorepo` flag that disables rules known to misbehave in a monorepo/workspace layout.
  
  This is useful in cases where ESLint is run from the root of a monorepo/workspace, but the `package.json` for a nested package is not visible to ESLint's process.
  
  For example, [`jsdoc/imports-as-dependencies`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md) is not able to see dependencies declared in a nested package's own `package.json` and reports false positives.
  
  If you are working in a monorepo/workspace and linting from the root, enable this flag to disable the affected rules:
  
  ```js
  import arphi from "@arphi/eslint-config";
  
  export default arphi({ monorepo: true });
  ```
- f36ae3e: Enables [`jsdoc/imports-as-dependencies`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md) at `warn` in the `jsdoc` preset.
  
  If you want the previous behavior back, disable it via the `jsdoc` override:
  
  ```js
  import arphi from "@arphi/eslint-config";
  
  export default arphi({
    jsdoc: true,
    overrides: {
      jsdoc: {
        "jsdoc/imports-as-dependencies": "off",
      },
    },
  });
  ```
- 7ea6205: Enables [`vitest/unbound-method`](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md) at `warn` in the `tests` preset.
  
  This applies for TypeScript test files only, in place of `@typescript-eslint/unbound-method` which flags legitimate Vitest mock patterns.
  
  If you want the previous behavior back, disable it via the `tests` override:
  
  ```js
  import arphi from "@arphi/eslint-config";
  
  export default arphi({
    tests: true,
    overrides: {
      tests: {
        "vitest/unbound-method": "off",
      },
    },
  });
  ```

### Patch Changes

- f36ae3e: Fixes [`@funboxteam/no-only-tests/no-only-tests`](https://github.com/levibuzolic/eslint-plugin-no-only-tests#readme) being silently non-functional in the `tests` preset.
- 7ea6205: Fixes [`@eslint-react/no-implicit-key`](https://eslint-react.xyz/docs/rules/no-implicit-key) crashing ESLint.
  
  This rule requires type information that only a typed TSX parser provides. On any plain JSX file (or TSX file used without the `typescript` preset), it would crash ESLint. It's now only enabled for TSX files.
- f36ae3e: Documents the optional dependencies to be installed that were not listed in the packages to be installed for each preset.

## 2.5.1

### Patch Changes

- a5063e9: Bumps the following dependencies:
  - `@eslint-community/eslint-plugin-eslint-comments` from `^4.7.1` to `^4.7.2`
  - `@typescript-eslint/parser` from `^8.58.1` to `^8.60.1`
  - `@typescript-eslint/utils` from `^8.58.1` to `^8.60.1`
  - `@vitest/eslint-plugin` from `^1.6.15` to `^1.6.19`
  - `eslint-import-resolver-typescript` from `^4.4.4` to `^4.4.5`
  - `typescript-eslint` from `^8.58.1` to `^8.60.1`

## 2.5.0

### Minor Changes

- fcbca37: Enables new `eslint-plugin-unicorn` rules.

  The `eslint-plugin-unicorn` v64.0.0 offers new rules that have been enabled in this update:
  - [`unicorn/consistent-template-literal-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-template-literal-escape.md)
  - [`unicorn/no-useless-iterator-to-array`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-iterator-to-array.md)
  - [`unicorn/prefer-simple-condition-first`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-condition-first.md)
  - [`unicorn/switch-case-break-position`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-break-position.md)

### Patch Changes

- 9855a6a: Bumps dependencies.

  The following dependencies have been updated:
  - `@typescript-eslint/parser`: `^8.57.1` → `^8.58.1`
  - `@typescript-eslint/utils`: `^8.57.1` → `^8.58.1`
  - `@vitest/eslint-plugin`: `^1.6.12` → `^1.6.15`
  - `eslint-plugin-unicorn`: `^63.0.0` → `^64.0.0`
  - `typescript-eslint`: `^8.57.1` → `^8.58.1`

## 2.4.1

### Patch Changes

- 0c6b3e5: Unpins `@vitest/eslint-plugin`.

  The `tests` preset was using a pinned version of `@vitest/eslint-plugin`. This was accidental and there are no reasons to use a pin version here. This package now uses a [caret range](https://github.com/npm/node-semver#caret-ranges-123-025-004).

- d43caeb: Enables the [`unicorn/isolated-functions`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/isolated-functions.md) rule from `eslint-plugin-unicorn`.
- 0c6b3e5: Removes the `eslint-comments/no-unused-disable` rule.

  The `@eslint-community/eslint-comments/no-unused-disable` rule is now deprecated because [ESLint provides a built-in rule](https://eslint.org/docs/latest/use/configure/configuration-files#report-unused-disable-directives) to check unused disable directives since v6.3.0.

  `reportUnusedDisableDirectives` was already enabled explicitly for JS files and implicitly in Typescript since `'warn'` is the default value in ESLint. This shouldn't change anything in your setup.

- 3e36a75: Bumps dependencies.
  - `@eslint-community/eslint-plugin-eslint-comments`: `^4.6.0` → `^4.7.1`
  - `@vitest/eslint-plugin`: `1.6.6` → `^1.6.12`
  - `eslint-plugin-import-x`: `^4.16.1` → `^4.16.2`
  - `eslint-plugin-unicorn`: `^62.0.0"` → `^63.0.0"`
  - `typescript-eslint`: `^8.54.0` → `^8.57.1`

- 0c6b3e5: Removes two deprecated rules from the React preset.

  The `@eslint-react/naming-convention/filename` and `@eslint-react/naming-convention/filename-extension` rules were previously disabled in the React preset. These rules are now [deprecated in the ESLint React plugin](https://beta.eslint-react.xyz/docs/removed#rules) and have been removed from the preset.

## 2.4.0

### Minor Changes

- abf91ad: Removes deprecated rules from the React preset.

  The following rules have been deprecated in the [ESLint React](https://www.eslint-react.xyz/) plugin and will be removed in the next major of the plugin:
  - `@eslint-react/no-default-props`
  - `@eslint-react/no-prop-types`
  - `@eslint-react/no-string-refs`

  To avoid obsolete use, these rules have been removed from the React preset. If you were using them, you can still enable them manually in your configuration file. However, consider [migrating to the ESLint `no-restricted-syntax` rule](https://github.com/Rel1cx/eslint-react/blob/HEAD/CHANGELOG.md#v293-2026-02-02) now.

### Patch Changes

- abf91ad: Bump dependencies
  - `@eslint-react/eslint-plugin`: ^2.6.1 → ^2.9.4
  - `@typescript-eslint/parser`: ^8.53.0 → ^8.54.0
  - `eslint-plugin-jsdoc`: ^62.0.0 → ^62.5.0
  - `typescript-eslint`: ^8.53.0 → ^8.54.0

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
