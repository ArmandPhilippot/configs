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

## Acknowledgments

Inspired by the following packages:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config)
- [@hideoo/eslint-config](https://github.com/HiDeoo/eslint-config)
