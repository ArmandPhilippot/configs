# @arphi/eslint-config

My shareable ESLint configuration.

## Install

```sh
npm install --save-dev @arphi/eslint-config
```

## Usage

In your ESLint configuration file (ie. `eslint.config.js`):

```js
import arphiConfig from "@arphi/eslint-config";

export default arphiConfig();
```

This will enable rules for JavaScript, ESLint comments and imports.

### Additional configurations

When you enable additional configurations in your ESLint configuration file, you might need to restart the ESLint server in your editor to be able to see any changes.

#### Typescript

To enable ESLint for TypeScript files, you can pass the following flag:

```js
import arphiConfig from "@arphi/eslint-config";

export default arphiConfig({ typescript: true });
```

#### Astro

To enable ESLint for Astro files, you can pass the following flag:

```js
import arphiConfig from "@arphi/eslint-config";

export default arphiConfig({ astro: true });
```

The Astro configuration uses the following plugins, you might need to install them:

```sh
npm i -D eslint-plugin-astro
```

See also: [Typescript](#typescript)

#### React

To enable ESLint for React files, you can pass the following flag:

```js
import arphiConfig from "@arphi/eslint-config";

export default arphiConfig({ react: true });
```

The React configuration uses the following plugins, you might need to install them:

```sh
npm i -D @eslint-react/eslint-plugin eslint-plugin-react-hooks
```

See also: [Typescript](#typescript)

#### Tests

To enable ESLint for you tests files written with Vitest, you can pass the following flag:

```js
import arphiConfig from "@arphi/eslint-config";

export default arphiConfig({ react: true });
```

The configuration for tests uses the following plugins, you might need to install them:

```sh
npm i -D @vitest/eslint-plugin eslint-plugin-no-only-tests
```

See also: [Typescript](#typescript)

## Acknowledgments

Inspired by the following packages:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config)
- [@hideoo/eslint-config](https://github.com/HiDeoo/eslint-config)
