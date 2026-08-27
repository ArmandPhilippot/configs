---
"@arphi/eslint-config": patch
---

Fixes a unicorn rule reporting false positives for non-DOM nodes.

The `unicorn/better-dom-traversing` is now globally disabled. It reports false positives for variables that are not DOM nodes, which is common in a Node.js environment.

If your project is a browser environment and you want to preserve the previous behavior, update your configuration:

```diff
import arphi from "@arphi/eslint-config";

export default arphi({
  overrides: {
    unicorn: {
+      "unicorn/better-dom-traversing": "error"
    },
  },
});
```
