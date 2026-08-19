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
        ...importPlugin.configs["flat/recommended"].rules,
        // Only supports one global style; can't mix top-level and inline per case.
        "import-x/consistent-type-specifier-style": "off",
        "import-x/first": "error",
        "import-x/newline-after-import": [
          "error",
          { considerComments: true, count: 1, exactCount: true },
        ],
        // Resolves and parses every imported module; slow on larger codebases (see un-ts/eslint-plugin-import-x#201).
        "import-x/namespace": "off",
        "import-x/no-absolute-path": "error",
        "import-x/no-amd": "error",
        "import-x/no-cycle": "error",
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
        "import-x/no-mutable-exports": "error",
        "import-x/no-named-as-default": "error",
        "import-x/no-named-as-default-member": "error",
        "import-x/no-named-default": "error",
        "import-x/no-relative-packages": "error",
        // Renaming a default import is normal for third-party packages we don't control the export name of.
        "import-x/no-rename-default": "off",
        "import-x/no-self-import": "error",
        "import-x/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
        // Can't resolve virtual/framework-generated module specifiers (e.g. Astro's `astro:content`).
        "import-x/no-unresolved": "off",
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
        "import-x/unambiguous": "warn",
        ...rulesOverrides,
      },
      settings: {
        "import-x/ignore": ["node_modules"],
      },
    },
  ];
}
