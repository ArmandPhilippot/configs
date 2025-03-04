import type { RulesOverrides } from "../../types";

/**
 * Retrieve the JSX A11y rules.
 *
 * @returns {RulesOverrides} The customized JSX A11y rules.
 */
export function getJsxA11yRules(): RulesOverrides {
  return {
    "jsx-a11y/alt-text": [
      "error",
      {
        elements: ["img", "object", "area", 'input[type="image"]'],
        img: ["Image", "Img"],
        object: ["Object"],
        area: ["Area"],
        'input[type="image"]': ["InputImage"],
      },
    ],
    "jsx-a11y/anchor-ambiguous-text": [
      "error",
      {
        words: ["click here", "here", "link", "a link", "learn more"],
      },
    ],
    "jsx-a11y/anchor-has-content": [
      "error",
      {
        components: ["Anchor", "Link"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Anchor", "Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": [
      "error",
      {
        allowedInvalidRoles: ["text"],
        ignoreNonDOM: true,
      },
    ],
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/autocomplete-valid": [
      "error",
      {
        inputComponents: ["Field", "FormField", "Input", "TextField"],
      },
    ],
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/control-has-associated-label": [
      "error",
      {
        labelAttributes: ["label"],
        controlComponents: ["Field", "FormField", "Input", "TextField"],
        ignoreElements: [],
        ignoreRoles: [],
        depth: 2,
      },
    ],
    "jsx-a11y/heading-has-content": [
      "error",
      {
        components: ["Heading", "H1", "H2", "H3", "H4", "H5", "H6"],
      },
    ],
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": [
      "error",
      {
        components: ["Image", "Img", "NextImage"],
        words: ["image", "photo", "picture"],
      },
    ],
    "jsx-a11y/interactive-supports-focus": [
      "error",
      {
        tabbable: [
          "button",
          "checkbox",
          "link",
          "searchbox",
          "spinbutton",
          "switch",
          "textbox",
        ],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: ["Label"],
        labelAttributes: ["label"],
        controlComponents: ["Field", "FormField", "Input", "TextField"],
        assert: "both",
        depth: 2,
      },
    ],
    "jsx-a11y/lang": "error",
    "jsx-a11y/media-has-caption": [
      "error",
      {
        audio: ["Audio"],
        video: ["Video"],
        track: ["Track"],
      },
    ],
    "jsx-a11y/mouse-events-have-key-events": [
      "error",
      {
        hoverInHandlers: [
          "onMouseOver",
          "onMouseEnter",
          "onPointerOver",
          "onPointerEnter",
        ],
        hoverOutHandlers: [
          "onMouseOut",
          "onMouseLeave",
          "onPointerOut",
          "onPointerLeave",
        ],
      },
    ],
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-aria-hidden-on-focusable": "error",
    "jsx-a11y/no-autofocus": [
      "error",
      {
        ignoreNonDOM: true,
      },
    ],
    "jsx-a11y/no-distracting-elements": [
      "error",
      {
        elements: ["marquee", "blink"],
      },
    ],
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "error",
      {
        ul: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
        ol: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
        li: ["menuitem", "option", "row", "tab", "treeitem"],
        table: ["grid"],
        td: ["gridcell"],
      },
    ],
    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      {
        tags: [],
        roles: ["tabpanel"],
        allowExpressionValues: true,
      },
    ],
    "jsx-a11y/no-redundant-roles": [
      "error",
      {
        nav: ["navigation"],
      },
    ],
    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
        allowExpressionValues: true,
      },
    ],
    "jsx-a11y/prefer-tag-over-role": "warn",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
  };
}
