import type { Config, RulesOverrides } from "../types";
import { getJsxA11yRules } from "./rules/jsx-a11y";

/**
 * Configure the React rules.
 *
 * @param {RulesOverrides} [rulesOverrides] - The rules to override.
 * @returns {Promise<Config[]>} The React configuration.
 */
export async function react(
  rulesOverrides: RulesOverrides = {}
): Promise<Config[]> {
  const jsxA11yPlugin = await import("eslint-plugin-jsx-a11y");
  const reactPlugin = await import("@eslint-react/eslint-plugin");

  return [
    {
      files: ["**/*.?([cm])[jt]sx"],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: "module",
      },
      name: "arphi/react",
      plugins: {
        "@eslint-react": reactPlugin.default,
        "jsx-a11y": jsxA11yPlugin.default,
      },
      rules: {
        ...reactPlugin.default.configs.recommended.rules,
        "@eslint-react/dom-no-dangerously-set-innerhtml": "error",
        "@eslint-react/dom-no-missing-button-type": "error",
        "@eslint-react/dom-no-missing-iframe-sandbox": "error",
        "@eslint-react/dom-no-script-url": "error",
        "@eslint-react/dom-no-string-style-prop": "error",
        "@eslint-react/dom-no-unknown-property": [
          "error",
          { ignore: [], requireDataLowercase: true },
        ],
        "@eslint-react/dom-no-unsafe-iframe-sandbox": "error",
        "@eslint-react/dom-no-unsafe-target-blank": "error",
        "@eslint-react/jsx-no-children-prop": "error",
        "@eslint-react/jsx-no-comment-textnodes": "error",
        "@eslint-react/jsx-no-leaked-dollar": "error",
        "@eslint-react/jsx-no-leaked-semicolon": "error",
        // Not included in the `recommended` preset.
        "@eslint-react/jsx-no-useless-fragment": "warn",
        "@eslint-react/naming-convention-context-name": "error",
        "@eslint-react/no-array-index-key": "error",
        "@eslint-react/no-children-count": "error",
        "@eslint-react/no-children-for-each": "error",
        "@eslint-react/no-children-map": "error",
        "@eslint-react/no-children-only": "error",
        "@eslint-react/no-children-to-array": "error",
        "@eslint-react/no-class-component": "error",
        "@eslint-react/no-clone-element": "error",
        "@eslint-react/no-context-provider": "error",
        "@eslint-react/no-duplicate-key": "error",
        "@eslint-react/no-forward-ref": "error",
        "@eslint-react/no-implicit-key": "error",
        "@eslint-react/no-leaked-conditional-rendering": "error",
        "@eslint-react/no-missing-component-display-name": "error",
        "@eslint-react/no-missing-context-display-name": "error",
        "@eslint-react/no-set-state-in-component-did-mount": "error",
        "@eslint-react/no-set-state-in-component-did-update": "error",
        "@eslint-react/no-set-state-in-component-will-update": "error",
        "@eslint-react/no-unnecessary-use-prefix": "error",
        "@eslint-react/no-unsafe-component-will-mount": "error",
        "@eslint-react/no-unsafe-component-will-receive-props": "error",
        "@eslint-react/no-unsafe-component-will-update": "error",
        "@eslint-react/no-unstable-context-value": "error",
        "@eslint-react/no-unstable-default-props": "error",
        "@eslint-react/no-unused-class-component-members": "error",
        "@eslint-react/no-use-context": "error",
        "@eslint-react/set-state-in-effect": "error",
        "@eslint-react/use-state": "error",
        "@eslint-react/web-api-no-leaked-event-listener": "error",
        "@eslint-react/web-api-no-leaked-intersection-observer": "error",
        "@eslint-react/web-api-no-leaked-interval": "error",
        "@eslint-react/web-api-no-leaked-resize-observer": "error",
        "@eslint-react/web-api-no-leaked-timeout": "error",
        ...jsxA11yPlugin.default.flatConfigs.recommended.rules,
        ...getJsxA11yRules(),
        ...rulesOverrides,
      },
    },
  ];
}
