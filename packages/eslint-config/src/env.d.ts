declare type Config =
  import("@typescript-eslint/utils/ts-eslint").FlatConfig.Config;
declare const eslintModuleExport = {
  config: {
    recommended: {} as Config,
  },
  rules: {} as Partial<import("eslint").Linter.RulesRecord>,
};

declare module "@eslint-community/eslint-plugin-eslint-comments" {
  export = eslintModuleExport;
}

declare module "eslint-config-prettier" {
  export = eslintModuleExport;
}

declare module "eslint-plugin-no-only-tests" {
  export = eslintModuleExport;
}

declare module "eslint-plugin-react-hooks" {
  export = eslintModuleExport;
}
