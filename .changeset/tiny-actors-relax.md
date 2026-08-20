---
"@arphi/eslint-config": patch
---

Fixes [`@eslint-react/no-implicit-key`](https://eslint-react.xyz/docs/rules/no-implicit-key) crashing ESLint.

This rule requires type information that only a typed TSX parser provides. On any plain JSX file (or TSX file used without the `typescript` preset), it would crash ESLint. It's now only enabled for TSX files.
