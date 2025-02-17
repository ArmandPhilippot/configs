# @arphi/prettier-config

My shareable Prettier configuration.

## Install

```sh
npm install --save-dev @arphi/prettier-config
```

## Usage

### In `package.json`

```json
{
  "prettier": "@arphi/prettier-config"
}
```

### In a `.prettierrc` file

```
"@arphi/prettier-config"
```

### Extend the configuration

If you need to override some settings, you can use a `prettierrc.js` or a `prettier.config.js` file:

```js
import arphiPrettierConfig from "@arphi/prettier-config";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...arphiPrettierConfig,
  tabWidth: 4,
};

export default config;
```
