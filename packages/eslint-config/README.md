# @arphi/eslint-config

My shareable ESLint configuration.

## Install

```sh
npm install --save-dev @arphi/eslint-config
```

## Usage

In your ESLint configuration file (ie. `eslint.config.js`), add:

```js
import arphi from "@arphi/eslint-config";

export default arphi();
```

This will enable rules for JavaScript, ESLint comments and imports. Optionally, you can enable [additional presets](#optional-presets) to extend the configuration, or [flags](#optional-flags) to adapt it to a specific context.

## Optional presets

When you enable additional presets in your ESLint configuration file, you may need to restart the ESLint server in your editor for the changes to take effect.

### Typescript

To enable ESLint for [TypeScript](https://www.typescriptlang.org/) files, pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ typescript: true });
```

### Astro

To enable ESLint for [Astro](https://astro.build/) files, pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ astro: true });
```

The Astro preset uses the following plugins, you might need to install them:

```sh
npm i -D eslint-plugin-astro astro-eslint-parser eslint-plugin-jsx-a11y
```

When you write TypeScript with Astro, you want to also enable the [Typescript](#typescript) preset.

### React

To enable ESLint for [React](https://reactjs.org/) files, pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ react: true });
```

The React preset uses the following plugins, you might need to install them:

```sh
npm i -D @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

When you write TypeScript with React, you want to also enable the [Typescript](#typescript) preset.

### JSDoc

To enable ESLint for [JSDoc](https://jsdoc.app/), pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ jsdoc: true });
```

The JSDoc preset uses the following plugins, you might need to install them:

```sh
npm i -D eslint-plugin-jsdoc
```

### Tests

To enable ESLint for your test files written with [Vitest](https://vitest.dev/), pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ tests: true });
```

The Tests preset uses the following plugins, you might need to install them:

```sh
npm i -D @vitest/eslint-plugin eslint-plugin-no-only-tests
```

When you write TypeScript with Vitest, you want to also enable the [Typescript](#typescript) preset.

## Optional flags

Unlike the presets above, these flags don't add new rules. They adjust the existing rules for a specific context. As with presets, you may need to restart the ESLint server in your editor after enabling one.

### Prettier

Some rules may conflict with [Prettier](https://prettier.io/). If you use Prettier and encounter conflicts, instead of manually overriding the rules, you can enable the Prettier flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ prettier: true });
```

This flag uses the following plugin, you might need to install it:

```sh
npm i -D eslint-config-prettier
```

### Monorepo

Some rules only look at the `package.json` of the directory ESLint was started from, which doesn't work well in a monorepo/workspace.

If you lint from the workspace root, enable this flag to disable the affected rules:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ monorepo: true });
```

For example, [`jsdoc/imports-as-dependencies`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md) only reads `process.cwd()/package.json`, so it can't see a dependency declared in a nested package's own `package.json`.

## Customizing the configuration

If you need some configurations not covered by the optional presets, you can pass one or more custom config objects after the first argument:

```js
import arphi from "@arphi/eslint-config";

export default arphi(
  {
    // Optional built-in configurations
  },
  {
    name: "your-custom-test-config",
    files: ["**/*.test.ts"],
    rules: {},
  },
  {
    name: "another-custom-config",
    rules: {},
  }
);
```

## Known issues

### `eslint-plugin-jsx-a11y` peer warning on ESLint 10

`eslint-plugin-jsx-a11y`, used by the [Astro](#astro) and [React](#react) presets, still declares `eslint@9` as its highest supported peer version. It should work fine with ESLint 10 in practice, but your package manager may report an unmet peer dependency for it.

This is a harmless, non-blocking warning. If you want to silence it, tell your package manager to trust the mismatch.

The following example shows how to suppress the warning for `pnpm` in your `pnpm-workspace.yaml`:

```yaml
peerDependencyRules:
  allowedVersions:
    "eslint-plugin-jsx-a11y>eslint": "10"
```

## Acknowledgments

Inspired by the following packages:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config)
- [@hideoo/eslint-config](https://github.com/HiDeoo/eslint-config)
