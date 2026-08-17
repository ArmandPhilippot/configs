---
"@arphi/stylelint-config": patch
---

Narrows the supported Stylelint range so a future major version isn't silently accepted.

The `stylelint` requirement was `>=17.8.0` with no upper bound, so it also matched Stylelint 18+ even though this config has never been tested against it. It's now capped to `^17.8.0` (any 17.x).
