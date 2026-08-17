---
"@arphi/eslint-config": major
---

Rebuilds each preset based on the predefined presets of its underlying plugins.

Previously, each preset manually listed every rule. As the list grows, it becomes harder to keep track of rules that have been removed, deprecated, or updated.

Each existing preset is now based on one of the predefined presets of its underlying plugins. If any of its rules are faulty or irrelevant to the project, they are manually disabled. Rules not included in the predefined preset continue to be enabled manually.

As a result, you may see new lint results on code that passed before, since presets bring in rules that weren't explicitly configured here previously.

Please review the extended presets to see how this affects your project and how to adjust or disable these rules.

The base configuration still manually configures ESLint rules and now extends:

- [`@eslint-community/eslint-plugin-eslint-comments` recommended rules](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/)
- [`eslint-plugin-import-x` recommended rules](https://github.com/un-ts/eslint-plugin-import-x#rules)
- [`eslint-plugin-unicorn` unopinionated rules](https://github.com/sindresorhus/eslint-plugin-unicorn#rules)

And here is the mapping for each preset:

- `astro` extends [`eslint-plugin-astro`'s recommended](https://ota-meshi.github.io/eslint-plugin-astro/rules/) and [JSX A11y rules](https://ota-meshi.github.io/eslint-plugin-astro/rules/#a11y-extension-rules)
- `jsdoc` extends [`eslint-plugin-jsdoc` recommended rules](https://github.com/gajus/eslint-plugin-jsdoc#rules)
- `react` extends [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/docs/presets) and [`eslint-plugin-jsx-a11y` recommended rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules)
- `tests` extends [`@vitest/eslint-plugin` recommended rules](https://github.com/vitest-dev/eslint-plugin-vitest#rules)
- `typescript` extends [`typescript-eslint` recommended type-checked rules](https://typescript-eslint.io/users/configs#recommended-type-checked)
