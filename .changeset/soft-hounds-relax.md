---
"@arphi/prettier-config": patch
---

Narrows the supported Prettier range so a future major version isn't silently accepted.

The `prettier` requirement was `>=3.8.1` with no upper bound, so it also matched Prettier 4+ even though this config has never been tested against it. It's now capped to `^3.8.1` (any 3.x).
