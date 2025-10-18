---
"@arphi/eslint-config": minor
---

Adds new rules to the `jsdoc` preset.

The `eslint-plugin-jsdoc` has been bumped to `61.1.4`. The `v61` brings some new rules which has been added to this package and configured to raised an error:

- [`jsdoc/ts-method-signature-style`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-method-signature-style.md#readme)
- [`jsdoc/ts-no-empty-object-type`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-empty-object-type.md#readme)
- [`jsdoc/ts-no-unnecessary-template-expression`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-unnecessary-template-expression.md#readme)
- [`jsdoc/ts-prefer-function-type`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-prefer-function-type.md#readme)

#### What you need to do

If you're not using the `jsdoc` preset, no updates are required.

If you're using the `jsdoc` preset, you might need to fix new errors in your codebase or to disable those rules in your configuration file.
