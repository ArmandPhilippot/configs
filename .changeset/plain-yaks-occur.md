---
"@arphi/stylelint-config": major
---

Drops support for Stylelint v16.

The minimal supported version of Stylelint is now v17.8.0, which was released on 2026-04-15.

If you are using Stylelint v16, please upgrade to v17.8.0 or later. If you are unable to upgrade, you can continue using `@arphi/stylelint-config` by pinning the previous version in your `package.json`:

```json
{
  "devDependencies": {
    "@arphi/stylelint-config": "1.0.4"
  }
}
```
