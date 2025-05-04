---
"@arphi/eslint-config": major
---

Fixes an issue where React rules was used on regular JS files.

Since Create React App is now deprecated, there is no reason to keep supporting `.js` files: React files should use `.jsx` or `.tsx` extension.
