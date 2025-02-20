import type { Linter } from "eslint";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

export type Config = FlatConfig.Config;

type OptionalConfigs = {
  typescript: boolean;
};

export type RulesOverrides = Partial<Linter.RulesRecord>;

type Overrides = {
  /**
   * Override the comments rules.
   */
  comments: RulesOverrides;
  /**
   * Override the imports rules.
   */
  imports: RulesOverrides;
  /**
   * Override the JS rules.
   */
  javascript: RulesOverrides;
  /**
   * Override the TS rules.
   */
  typescript: RulesOverrides;
};

export type ConfigOptions = Partial<OptionalConfigs> & {
  /**
   * Define the additional paths to ignore.
   */
  ignores?: string[];
  /**
   * Define the rules to override in each configuration.
   */
  overrides?: Partial<Overrides>;
};
