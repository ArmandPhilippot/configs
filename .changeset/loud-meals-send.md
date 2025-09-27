---
"@arphi/eslint-config": minor
---

Disables the ESLint [`one-var`](https://eslint.org/docs/latest/rules/one-var) rule.

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
