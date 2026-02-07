---
"@arphi/eslint-config": minor
---

Removes deprecated rules from the React preset.

The following rules have been deprecated in the [ESLint React](https://www.eslint-react.xyz/) plugin and will be removed in the next major of the plugin:

- `@eslint-react/no-default-props`
- `@eslint-react/no-prop-types`
- `@eslint-react/no-string-refs`

To avoid obsolete use, these rules have been removed from the React preset. If you were using them, you can still enable them manually in your configuration file. However, consider [migrating to the ESLint `no-restricted-syntax` rule](https://github.com/Rel1cx/eslint-react/blob/HEAD/CHANGELOG.md#v293-2026-02-02) now.
