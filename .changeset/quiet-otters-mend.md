---
"@arphi/eslint-config": minor
---

Enables [`vitest/unbound-method`](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md) at `warn` in the `tests` preset.

This applies for TypeScript test files only, in place of `@typescript-eslint/unbound-method` which flags legitimate Vitest mock patterns.

If you want the previous behavior back, disable it via the `tests` override:

```js
import arphi from "@arphi/eslint-config";

export default arphi({
  tests: true,
  overrides: {
    tests: {
      "vitest/unbound-method": "off",
    },
  },
});
```
