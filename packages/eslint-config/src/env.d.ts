declare type RuleModules = Record<string, import("eslint").Rule.RuleModule>;
declare type RulesRecord = Partial<import("eslint").Linter.RulesRecord>;

declare module "eslint-plugin-jsx-a11y" {
  const plugin: {
    rules: RuleModules;
    flatConfigs: {
      recommended: { rules: RulesRecord };
      strict: { rules: RulesRecord };
    };
  };
  export = plugin;
}

declare module "eslint-plugin-no-only-tests" {
  const plugin: { rules: RuleModules };
  export = plugin;
}
