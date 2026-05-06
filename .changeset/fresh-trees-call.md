---
"@arphi/renovate-config": patch
---

Prevents lock file maintenance PR creation.

A PR was successfully created but, because of `security:minimumReleaseAgeNpm`, this was never mergeable. This preset has been removed from the default config to prevent an immortal PR living forever in your repository.

If you want to keep the old behavior, you can add `:maintainLockFilesWeekly` back to your config extends:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>ArmandPhilippot/configs//packages/renovate-config/default",
    ":maintainLockFilesWeekly"
  ]
}
```
