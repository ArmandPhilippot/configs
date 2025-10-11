---
"@arphi/eslint-config": patch
---

Bumps `@eslint-react/eslint-plugin` to v2.

In `@eslint-react/eslint-plugin` some rules have been renamed or removed. See [their changelog](https://github.com/Rel1cx/eslint-react/blob/HEAD/CHANGELOG.md#v200-2025-09-26) for the details.
Only a few rules activated by default in the React preset are impacted:

- `@eslint-react/no-comment-textnodes` has been renamed to `@eslint-react/jsx-no-comment-textnodes`
- `@eslint-react/no-direct-set-state-in-use-layout-effect` has been removed in favor of a single rule: `@eslint-react/no-direct-set-state-in-use-effect`
