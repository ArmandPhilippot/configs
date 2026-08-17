---
"@arphi/eslint-config": minor
---

Enables [`jsdoc/imports-as-dependencies`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md) at `warn` in the `jsdoc` preset.

If you want the previous behavior back, disable it via the `jsdoc` override:

```js
import arphi from "@arphi/eslint-config";

export default arphi({
  jsdoc: true,
  overrides: {
    jsdoc: {
      "jsdoc/imports-as-dependencies": "off",
    },
  },
});
```
