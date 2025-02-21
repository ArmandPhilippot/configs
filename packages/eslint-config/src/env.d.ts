declare module "@eslint-community/eslint-plugin-eslint-comments" {
  import type { ESLint, Linter } from "eslint";

  export = {
    config: {
      recommended: Linter.Config,
    },
    rules: NonNullable<ESLint.Plugin["rules"]>,
  };
}

declare module "eslint-plugin-react-hooks" {
  import type { ESLint, Linter } from "eslint";

  export = {
    config: {
      recommended: Linter.Config,
    },
    rules: NonNullable<ESLint.Plugin["rules"]>,
  };
}
