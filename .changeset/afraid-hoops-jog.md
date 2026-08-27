---
"@arphi/eslint-config": patch
---

Disables `unicorn/no-array-from-fill` globally.

This rule was introduced in v3.0.0 and conflicts with [`@e18e/eslint-plugin`](https://github.com/e18e/eslint-plugin/tree/main) recommendations. Using `Array.from().fill()` is usually more readable and performant than `new Array().fill()`.

If you want to preserve the previous behavior, update your configuration:

```diff
import arphi from "@arphi/eslint-config";

export default arphi({
  overrides: {
    unicorn: {
+      "unicorn/no-array-from-fill": "error"
    },
  },
});
```
