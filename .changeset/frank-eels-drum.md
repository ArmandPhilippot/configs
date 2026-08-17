---
"@arphi/eslint-config": major
---

Updates the default config rules, regardless of which optional presets you turn on.

You may see new lint results: `unicorn` now inherits many rules from [`eslint-plugin-unicorn`'s own `unopinionated` preset](https://github.com/sindresorhus/eslint-plugin-unicorn#rules) that weren't explicitly configured before.

#### JavaScript

Two new ESLint core rules are now enabled: [`no-unassigned-vars`](https://eslint.org/docs/latest/rules/no-unassigned-vars) and [`preserve-caught-error`](https://eslint.org/docs/latest/rules/preserve-caught-error).

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
