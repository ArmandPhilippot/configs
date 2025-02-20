import type { Linter } from "eslint";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

export type Config = FlatConfig.Config;

export type RulesOverrides = Partial<Linter.RulesRecord>;

export type Overrides = {
  javascript?: RulesOverrides;
  typescript?: RulesOverrides;
};

export type ConfigOptions = {
  /**
   * Define the additional paths to ignore.
   */
  ignores?: string[];
  overrides?: Overrides;
};
