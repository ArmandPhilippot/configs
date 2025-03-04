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
  const reactHooksPlugin = await import("eslint-plugin-react-hooks");

  return [
    {
      files: ["**/*.?([cm])[jt]s?(x)"],
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
        react: reactPlugin.default,
        "react-hooks": reactHooksPlugin,
        "jsx-a11y": jsxA11yPlugin,
      },
      rules: {
        "@eslint-react/avoid-shorthand-boolean": "off",
        "@eslint-react/avoid-shorthand-fragment": "off",
        "@eslint-react/ensure-forward-ref-using-ref": "error",
        "@eslint-react/no-access-state-in-setstate": "error",
        "@eslint-react/no-array-index-key": "error",
        "@eslint-react/no-children-count": "error",
        "@eslint-react/no-children-for-each": "error",
        "@eslint-react/no-children-map": "error",
        "@eslint-react/no-children-only": "error",
        "@eslint-react/no-children-prop": "error",
        "@eslint-react/no-children-to-array": "error",
        "@eslint-react/no-class-component": "error",
        "@eslint-react/no-clone-element": "error",
        "@eslint-react/no-comment-textnodes": "error",
        "@eslint-react/no-complex-conditional-rendering": "error",
        "@eslint-react/no-component-will-mount": "error",
        "@eslint-react/no-component-will-receive-props": "error",
        "@eslint-react/no-component-will-update": "error",
        "@eslint-react/no-context-provider": "error",
        "@eslint-react/no-create-ref": "error",
        "@eslint-react/no-default-props": "error",
        "@eslint-react/no-direct-mutation-state": "error",
        "@eslint-react/no-duplicate-jsx-props": "error",
        "@eslint-react/no-duplicate-key": "error",
        "@eslint-react/no-forward-ref": "error",
        "@eslint-react/no-implicit-key": "error",
        "@eslint-react/no-leaked-conditional-rendering": "error",
        "@eslint-react/no-missing-component-display-name": "error",
        "@eslint-react/no-missing-context-display-name": "error",
        "@eslint-react/no-missing-key": "error",
        "@eslint-react/no-nested-components": "error",
        "@eslint-react/no-prop-types": "error",
        "@eslint-react/no-redundant-should-component-update": "error",
        "@eslint-react/no-set-state-in-component-did-mount": "error",
        "@eslint-react/no-set-state-in-component-did-update": "error",
        "@eslint-react/no-set-state-in-component-will-update": "error",
        "@eslint-react/no-string-refs": "error",
        "@eslint-react/no-unsafe-component-will-mount": "error",
        "@eslint-react/no-unsafe-component-will-receive-props": "error",
        "@eslint-react/no-unsafe-component-will-update": "error",
        "@eslint-react/no-unstable-context-value": "error",
        "@eslint-react/no-unstable-default-props": "error",
        "@eslint-react/no-unused-class-component-members": "error",
        "@eslint-react/no-unused-state": "error",
        "@eslint-react/no-use-context": "error",
        "@eslint-react/no-useless-fragment": "error",
        "@eslint-react/prefer-destructuring-assignment": "error",
        "@eslint-react/prefer-react-namespace-import": "error",
        "@eslint-react/prefer-read-only-props": "error",
        "@eslint-react/prefer-shorthand-boolean": "off",
        "@eslint-react/prefer-shorthand-fragment": "off",
        "@eslint-react/use-jsx-vars": "error",
        "@eslint-react/dom/no-dangerously-set-innerhtml": "error",
        "@eslint-react/dom/no-dangerously-set-innerhtml-with-children": "error",
        "@eslint-react/dom/no-find-dom-node": "error",
        "@eslint-react/dom/no-flush-sync": "error",
        "@eslint-react/dom/no-missing-button-type": "error",
        "@eslint-react/dom/no-missing-iframe-sandbox": "error",
        "@eslint-react/dom/no-namespace": "error",
        "@eslint-react/dom/no-render-return-value": "error",
        "@eslint-react/dom/no-script-url": "error",
        "@eslint-react/dom/no-unknown-property": [
          "error",
          { ignore: [], requireDataLowercase: true },
        ],
        "@eslint-react/dom/no-unsafe-iframe-sandbox": "error",
        "@eslint-react/dom/no-unsafe-target-blank": "error",
        "@eslint-react/dom/no-void-elements-with-children": "error",
        "@eslint-react/web-api/no-leaked-event-listener": "error",
        "@eslint-react/web-api/no-leaked-interval": "error",
        "@eslint-react/web-api/no-leaked-resize-observer": "error",
        "@eslint-react/web-api/no-leaked-timeout": "error",
        "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "error",
        "@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect":
          "error",
        "@eslint-react/hooks-extra/no-unnecessary-use-callback": "error",
        "@eslint-react/hooks-extra/no-unnecessary-use-memo": "error",
        "@eslint-react/hooks-extra/no-useless-custom-hooks": "error",
        "@eslint-react/hooks-extra/prefer-use-state-lazy-initialization":
          "error",
        "@eslint-react/naming-convention/component-name": [
          "error",
          { allowAllCaps: false, excepts: [], rule: "PascalCase" },
        ],
        "@eslint-react/naming-convention/context-name": "error",
        "@eslint-react/naming-convention/filename": "off",
        "@eslint-react/naming-convention/filename-extension": "off",
        "@eslint-react/naming-convention/use-state": "error",
        ...getJsxA11yRules(),
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        ...rulesOverrides,
      },
    },
  ];
}
