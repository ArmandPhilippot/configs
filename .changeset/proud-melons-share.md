---
"@arphi/eslint-config": minor
---

Adds [`@e18e/eslint-plugin`](https://github.com/e18e/eslint-plugin) as a new always-enabled preset.

Its recommended rules are now enabled by default to help modernize code and improve runtime performance. As with the other presets, the rules can be overridden:

```diff
import arphi from "@arphi/eslint-config";

export default arphi({
  overrides: {
+    e18e: {
+      "e18e/prefer-date-now": "off"
+    },
  },
});
```

A few recommended rules are disabled out of the box:

- `e18e/prefer-string-fromcharcode` conflicts with `unicorn/prefer-code-point` (opposite autofixes).
- `e18e/prefer-includes`, `e18e/prefer-date-now`, `e18e/prefer-regex-test`, `e18e/prefer-array-some`, `e18e/prefer-array-at`, `e18e/prefer-array-to-reversed` and `e18e/prefer-array-to-sorted` duplicate an already-enabled unicorn rule that rewrites to the same API.

Re-enable any of them through the `e18e` overrides if you want the extra reporting.
