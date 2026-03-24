---
"@arphi/eslint-config": patch
---

Unpins `@vitest/eslint-plugin`.

The `tests` preset was using a pinned version of `@vitest/eslint-plugin`. This was accidental and there are no reasons to use a pin version here. This package now uses a [caret range](https://github.com/npm/node-semver#caret-ranges-123-025-004).
