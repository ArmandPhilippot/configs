# @arphi/commitlint-config

My shareable commitlint configuration.

## Install

```sh
npm install --save-dev @arphi/commitlint-config
```

## Usage

In your commitlint configuration file (e.g. `commitlint.config.js`), add the following:

```js
/** @type {import('commitlint').Config} */
export default {
  extends: ["@arphi"],
};
```

Consider reading [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) if you choose to use this package.
