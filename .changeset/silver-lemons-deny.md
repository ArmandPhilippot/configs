---
"@arphi/commitlint-config": patch
---

Relaxes the header case.

When using function or properties name in the header we need capital letters. So the header case can't be set to `lower-case`. Since we can control `type-case` and `subject-case` separately, `header-case` is now disabled and the `subject-case` has been relaxed to allow capital letters.
