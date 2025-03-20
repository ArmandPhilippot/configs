---
"@arphi/eslint-config": patch
---

Fixes a rule triggering an ESLint validation failure.

The `unicorn/number-literal-case` rule [should accept an option](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md) but the rule seems bugged. When `prettier` is not set to `true`, the rule is not deactivated so ESLint will fail to validate the rule.
