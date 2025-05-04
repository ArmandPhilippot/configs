---
"@arphi/eslint-config": patch
---

Fixes an issue where React rules was used on regular JS files.

Since Create React App is now deprecated, there is no reasons to keep supporting `.js` files: React files should use `.jsx` or `.tsx` extension.
