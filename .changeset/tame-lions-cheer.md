---
"@arphi/commitlint-config": patch
---

Fixes a missing dependency issue with some package managers.

Previously, depending on your package manager, you could hit a `Cannot find module '@commitlint/types'` error when linting a commit message. `@commitlint/types` is now installed automatically with this package.
