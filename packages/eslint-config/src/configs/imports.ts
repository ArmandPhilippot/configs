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
        "import-x/consistent-type-specifier-style": [
          "error",
          "prefer-top-level",
        ],
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
        "import-x/namespace": "error",
        "import-x/no-absolute-path": "error",
        "import-x/no-amd": "error",
        "import-x/no-anonymous-default-export": "off",
        "import-x/no-commonjs": "off",
        "import-x/no-cycle": "error",
        "import-x/no-default-export": "off",
        "import-x/no-deprecated": "warn",
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
        "import-x/no-rename-default": "error",
        "import-x/no-restricted-paths": "off",
        "import-x/no-self-import": "error",
        "import-x/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
        // Can't make it works properly with Typescript...
        "import-x/no-unresolved": "off",
        // Can't make it works properly with Typescript...
        "import-x/no-unused-modules": "off",
        "import-x/no-useless-path-segments": "warn",
        "import-x/no-webpack-loader-syntax": "error",
        "import-x/order": [
          "error",
          {
            groups: ["builtin", "external", "parent", "sibling", "index"],
          },
        ],
        "import-x/prefer-default-export": "off",
        "import-x/unambiguous": "warn",
        ...rulesOverrides,
      },
    },
  ];
}
