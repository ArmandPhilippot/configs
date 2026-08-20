# @arphi/prettier-config

## 1.0.5

### Patch Changes

- f36ae3e: Narrows the supported Prettier range so a future major version isn't silently accepted.
  
  The `prettier` requirement was `>=3.8.1` with no upper bound, so it also matched Prettier 4+ even though this config has never been tested against it. It's now capped to `^3.8.1` (any 3.x).

## 1.0.4

### Patch Changes

- abf91ad: Bumps dependencies
  - `prettier`: >=3.7.4 → >=3.8.1

## 1.0.3

### Patch Changes

- 09ab7b0: Bumps `prettier` from `>=3.6.2` to `>=3.7.4`.

## 1.0.2

### Patch Changes

- 17f5b79: This package is now published using [OIDC trusted publishing](https://docs.npmjs.com/trusted-publishers).

## 1.0.1

### Patch Changes

- 28dcc42: Bump dependencies.

## 1.0.0

### Major Changes

- 26485ab: Releases the first version of my shareable Prettier configuration.
