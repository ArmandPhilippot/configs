---
"@arphi/eslint-config": major
---

Updates the `react` preset to extend [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/docs/presets)'s own `recommended` preset.

You may see new lint results, since `@eslint-react` rules that weren't explicitly configured before are now inherited from its `recommended` preset.

`@eslint-react/eslint-plugin` was also bumped from v2 to v5. Sub-namespaced rule IDs (`dom/*`, `web-api/*`, `naming-convention/*`, `hooks-extra/*`) were flattened into hyphenated top-level names, and the hooks rules moved out of the separate `eslint-plugin-react-hooks` package into `@eslint-react` itself, for example:

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
