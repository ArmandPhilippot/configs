---
"@arphi/eslint-config": patch
---

Disables `jsdoc/imports-as-dependencies` in the `jsdoc` preset.

The v3.0.0 release enabled `jsdoc/imports-as-dependencies` by default. This rule is now disabled again as it reports too many false positives. It only recognizes a package's types via `pkg.types`/`pkg.typings` or an explicit `"types"` condition in `exports`. This means packages relying on TypeScript's implicit sibling-`.d.ts` resolution are false-flagged.

The `monorepo` preset no longer disables this rule itself, since it's now off by default.
