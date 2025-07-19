import importPlugin from "eslint-plugin-import-x";
import type { Config, RulesOverrides } from "../types";

/**
 * Configure the import rules.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Config[]} The imports configuration.
 */
export function imports(rulesOverrides: RulesOverrides = {}): Config[] {
  return [
    {
      name: "arphi/imports",
      plugins: {
        "import-x": importPlugin,
      },
      rules: {
        // I'd prefer a smarter option: prefer top-level unless...
        "import-x/consistent-type-specifier-style": "off",
        "import-x/default": "error",
        "import-x/dynamic-import-chunkname": "off",
        "import-x/export": "error",
        "import-x/exports-last": "off",
        "import-x/extensions": "off",
        "import-x/first": "error",
        "import-x/group-exports": "off",
        "import-x/max-dependencies": "off",
        "import-x/newline-after-import": [
          "error",
          { considerComments: true, count: 1, exactCount: true },
        ],
        "import-x/named": "error",
        // Too slow.
        "import-x/namespace": "off",
        "import-x/no-absolute-path": "error",
        "import-x/no-amd": "error",
        "import-x/no-anonymous-default-export": "off",
        "import-x/no-commonjs": "off",
        "import-x/no-cycle": "error",
        "import-x/no-default-export": "off",
        "import-x/no-deprecated": "off",
        "import-x/no-duplicates": [
          "error",
          { considerQueryString: true, "prefer-inline": true },
        ],
        "import-x/no-dynamic-require": "error",
        "import-x/no-empty-named-blocks": "error",
        "import-x/no-extraneous-dependencies": [
          "error",
          {
            bundledDependencies: true,
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: true,
          },
        ],
        "import-x/no-import-module-exports": "error",
        "import-x/no-internal-modules": "off",
        "import-x/no-mutable-exports": "error",
        "import-x/no-named-as-default": "error",
        "import-x/no-named-as-default-member": "error",
        "import-x/no-named-default": "error",
        "import-x/no-named-export": "off",
        "import-x/no-namespace": "off",
        "import-x/no-nodejs-modules": "off",
        "import-x/no-relative-packages": "error",
        "import-x/no-relative-parent-imports": "off",
        // Too restrictive with third-party modules
        "import-x/no-rename-default": "off",
        "import-x/no-restricted-paths": "off",
        "import-x/no-self-import": "error",
        "import-x/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
        // Can't make it works properly (virtual modules, mjs...)
        "import-x/no-unresolved": "off",
        "import-x/no-unused-modules": "off",
        "import-x/no-useless-path-segments": "warn",
        "import-x/no-webpack-loader-syntax": "error",
        "import-x/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
              orderImportKind: "asc",
              caseInsensitive: true,
            },
            groups: ["builtin", "external", "parent", "sibling", "index"],
          },
        ],
        "import-x/prefer-default-export": "off",
        "import-x/unambiguous": "warn",
        ...rulesOverrides,
      },
      settings: {
        "import-x/ignore": ["node_modules"],
      },
    },
  ];
}
