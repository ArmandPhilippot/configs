---
"@arphi/eslint-config": minor
---

Adds a `monorepo` flag that disables rules known to misbehave in a monorepo/workspace layout.

This is useful in cases where ESLint is run from the root of a monorepo/workspace, but the `package.json` for a nested package is not visible to ESLint's process.

For example, [`jsdoc/imports-as-dependencies`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md) is not able to see dependencies declared in a nested package's own `package.json` and reports false positives.

If you are working in a monorepo/workspace and linting from the root, enable this flag to disable the affected rules:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ monorepo: true });
```
