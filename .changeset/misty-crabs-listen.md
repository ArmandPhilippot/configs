---
"@arphi/eslint-config": major
---

Updates the `astro` preset to extend [`eslint-plugin-astro`](https://ota-meshi.github.io/eslint-plugin-astro/rules/)'s own `recommended` and `flat/jsx-a11y-recommended` presets.

You may see new lint results, since rules that weren't explicitly configured before are now inherited from those presets.

[`astro/valid-compile`](https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/) was also removed as it was deprecated by `eslint-plugin-astro` in favor of running `astro check` instead.
