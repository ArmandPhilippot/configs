# @arphi/renovate-config

## 1.0.1

### Patch Changes

- 9431c87: Prevents lock file maintenance PR creation.

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

- 9431c87: Prevents PR deduplication because of majors.

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

## 1.0.0

### Major Changes

- 088959a: Adds a new `renovate-config` package to share my Renovate config.

  Please read the README file to learn how to use it. This package is not shipped to npm.
