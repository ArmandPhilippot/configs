# @arphi/commitlint-config

## 1.0.6

### Patch Changes

- 09ab7b0: Bumps dependencies
  - `@commitlint/cli`: >=20.1.0 -> >=20.3.1
  - `@commitlint/config-conventional`: ^20.0.0 -> ^20.3.1

## 1.0.5

### Patch Changes

- 17f5b79: This package is now published using [OIDC trusted publishing](https://docs.npmjs.com/trusted-publishers).

## 1.0.4

### Patch Changes

- 0813cdd: Upgrades commitlint to v20.

## 1.0.3

### Patch Changes

- 28dcc42: Bump dependencies.

## 1.0.2

### Patch Changes

- 6728827: Disables the rule enforcing a case for the subject.

  The previous values was causing issue with capital letters with some words or depending on their position. This seems to be a known issue according the commitlint repository. So the rule is now disabled and capital letters are now allowed in the subject regardless of their position.

## 1.0.1

### Patch Changes

- 34fef6c: Relaxes the header case.

  When using function or properties name in the header we need capital letters. So the header case can't be set to `lower-case`. Since we can control `type-case` and `subject-case` separately, `header-case` is now disabled and the `subject-case` has been relaxed to allow capital letters.

- 34fef6c: Increases the header max length.

  The header max length was set to 50. This seems a bit too restrictive so the value has been increased to match the max length of the body (72 characters).

## 1.0.0

### Major Changes

- 342ca95: Releases the first version of my shareable configuration for commitlint.
