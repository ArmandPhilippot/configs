---
"@arphi/stylelint-config": patch
---

Adds support for Stylelint v17.

No rules have been removed or added. If you're interested in the new `display-notation` rule added in v17, you must add it yourself in you configuration file.

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ["@arphi/stylelint-config"],
  rules: {
    "display-notation": "full",
  },
};
```
