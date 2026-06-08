# @arphi/stylelint-config

## 2.0.0

### Major Changes

- 426ff33: Drops support for Stylelint v16.

  The minimal supported version of Stylelint is now v17.8.0, which was released on 2026-04-15.

  If you are using Stylelint v16, please upgrade to v17.8.0 or later. If you are unable to upgrade, you can continue using `@arphi/stylelint-config` by pinning the previous version in your `package.json`:

  ```json
  {
    "devDependencies": {
      "@arphi/stylelint-config": "1.0.4"
    }
  }
  ```

### Minor Changes

- 426ff33: Enables the [`selector-no-deprecated` rule](https://stylelint.io/user-guide/rules/selector-no-deprecated/), which disallows the use of deprecated selectors in CSS.

## 1.0.4

### Patch Changes

- 756f8e5: Adds support for Stylelint v17.

  No rules have been removed or added. If you're interested in the new `display-notation` rule added in v17, you must add it yourself in you configuration file.

  ```js
  /** @type {import('stylelint').Config} */
  export default {
    extends: ["@arphi/stylelint-config"],
    rules: {
      "display-notation": "full",
    },
  };
  ```

## 1.0.3

### Patch Changes

- 09ab7b0: Bumps `stylelint` from `>=16.25.0` to `>=16.26.1`.

## 1.0.2

### Patch Changes

- 17f5b79: This package is now published using [OIDC trusted publishing](https://docs.npmjs.com/trusted-publishers).

## 1.0.1

### Patch Changes

- 28dcc42: Bump dependencies.

## 1.0.0

### Major Changes

- abc9b14: Releases the first version of my shareable Stylelint configuration.
