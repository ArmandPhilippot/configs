---
"@arphi/renovate-config": patch
---

Prevents PR deduplication because of majors.

The `:separateMultipleMajorReleases` preset has been removed from the configuration to prevent noisy PRs. For example, Renovate would create a PR for `@eslint-react/eslint-plugin` to v3, another one to v4, and so on.

If you want to keep the old behavior, you can add `:separateMultipleMajorReleases` back to your config extends:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>ArmandPhilippot/configs//packages/renovate-config/default",
    ":separateMultipleMajorReleases"
  ]
}
```
