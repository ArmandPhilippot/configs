---
"@arphi/eslint-config": patch
---

Removes the `eslint-comments/no-unused-disable` rule.

The `@eslint-community/eslint-comments/no-unused-disable` rule is now deprecated because [ESLint provides a built-in rule](https://eslint.org/docs/latest/use/configure/configuration-files#report-unused-disable-directives) to check unused disable directives since v6.3.0.

`reportUnusedDisableDirectives` was already enabled explicitly for JS files and implicitly in Typescript since `'warn'` is the default value in ESLint. This shouldn't change anything in your setup.
