# @arphi/eslint-config

My shareable ESLint configuration.

## Install

```sh
npm install --save-dev @arphi/eslint-config
```

## Usage

In your ESLint configuration file (ie. `eslint.config.js`):

```js
import arphi from "@arphi/eslint-config";

export default arphi();
```

This will enable rules for JavaScript, ESLint comments and imports.

### Optional configurations

When you enable additional configurations in your ESLint configuration file, you might need to restart the ESLint server in your editor to be able to see any changes.

#### Typescript

To enable ESLint for TypeScript files, you can pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ typescript: true });
```

#### Astro

To enable ESLint for Astro files, you can pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ astro: true });
```

The Astro configuration uses the following plugins, you might need to install them:

```sh
npm i -D eslint-plugin-astro
```

See also: [Typescript](#typescript)

#### React

To enable ESLint for React files, you can pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ react: true });
```

The React configuration uses the following plugins, you might need to install them:

```sh
npm i -D @eslint-react/eslint-plugin eslint-plugin-react-hooks
```

See also: [Typescript](#typescript)

#### JSDoc

To enable ESLint for JSDoc, you can pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ jsdoc: true });
```

The configuration for JSDoc uses the following plugins, you might need to install them:

```sh
npm i -D eslint-plugin-jsdoc
```

#### Prettier

Some rules might be conflicting with Prettier. If you're using Prettier and notice some conflicts, instead of overriding the rules manually you can enable the Prettier flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ prettier: true });
```

The configuration for Prettier uses the following plugin, you might need to install it:

```sh
npm i -D eslint-config-prettier
```

#### Tests

To enable ESLint for your tests files written with Vitest, you can pass the following flag:

```js
import arphi from "@arphi/eslint-config";

export default arphi({ tests: true });
```

The configuration for tests uses the following plugins, you might need to install them:

```sh
npm i -D @vitest/eslint-plugin eslint-plugin-no-only-tests
```

See also: [Typescript](#typescript)

### Custom configurations

If you need some configurations not covered by the optional ones, you can pass one or more custom configurations after the first argument:

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

## Acknowledgments

Inspired by the following packages:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config)
- [@hideoo/eslint-config](https://github.com/HiDeoo/eslint-config)
