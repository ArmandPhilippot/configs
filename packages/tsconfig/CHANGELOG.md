# @arphi/tsconfig

## 1.0.2

### Patch Changes

- f36ae3e: Declares a peer requirement.
  
  Previously, installing this package would silently assume any version instead of enforcing the peer requirement. Now, it requires `typescript` to be `^5.9.0 || ^6.0.0`.
  
  The config itself hasn't changed. This just lets package managers warn you if your installed TypeScript falls outside the range this config has actually been verified against.

## 1.0.1

### Patch Changes

- 17f5b79: This package is now published using [OIDC trusted publishing](https://docs.npmjs.com/trusted-publishers).

## 1.0.0

### Major Changes

- 16285ce: Releases the first version of my shareable Typescript configuration.
