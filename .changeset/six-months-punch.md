---
"@arphi/eslint-config": minor
---

Enables ascending alphabetical sorting for imports.

Imports sorted in ascending alphabetical order are often easier to visually analyze, as sibling modules would be side by side in a long list of imports.

Previously, the following order wasn't an issue:

```ts
import type { Linter } from "eslint";
import type { TSESLint } from "@typescript-eslint/utils";
```

Now, it will be reported as an auto-fixable error and the fixed order will be:

```ts
import type { TSESLint } from "@typescript-eslint/utils";
import type { Linter } from "eslint";
```
