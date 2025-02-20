import type { Linter } from "eslint";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

export type Config = FlatConfig.Config;

export type RulesOverrides = Partial<Linter.RulesRecord>;

export type Overrides = {
  /**
   * Override the comments rules.
   */
  comments?: RulesOverrides;
  /**
   * Override the imports rules.
   */
  imports?: RulesOverrides;
  /**
   * Override the JS rules.
   */
  javascript?: RulesOverrides;
  /**
   * Override the TS rules.
   */
  typescript?: RulesOverrides;
};

export type ConfigOptions = {
  /**
   * Define the additional paths to ignore.
   */
  ignores?: string[];
  /**
   * Define the rules to override in each configuration.
   */
  overrides?: Overrides;
};
