# @arphi/stylelint-config

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
