---
"@arphi/tsconfig": patch
---

Declares a peer requirement.

Previously, installing this package would silently assume any version instead of enforcing the peer requirement. Now, it requires `typescript` to be `^5.9.0 || ^6.0.0`.

The config itself hasn't changed. This just lets package managers warn you if your installed TypeScript falls outside the range this config has actually been verified against.
