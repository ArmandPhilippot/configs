---
"@arphi/eslint-config": patch
---

Fixes `unicorn/import-style` silently ignoring its `styles` override for Node builtins.

The `styles` option was keyed with `"node:path"` / `"node:util"`, but `eslint-plugin-unicorn` strips the protocol prefix since [`eslint-plugin-unicorn#3207`](https://github.com/sindresorhus/eslint-plugin-unicorn/pull/3207). The override never matched and the plugin's stricter built-in default applied instead. Keys are now `path` / `util`.
