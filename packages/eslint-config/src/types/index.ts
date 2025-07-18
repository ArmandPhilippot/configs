import type { TSESLint } from "@typescript-eslint/utils";
import type { Linter } from "eslint";

export type Config = Omit<TSESLint.FlatConfig.Config, "plugins"> & {
  // Relax type because some plugins do not have correct type.
  plugins?: Record<string, unknown>;
};

export type OptionalConfigs = {
  /**
   * Enable Astro configuration.
   */
  astro: boolean;
  /**
   * Enable JSDoc configuration.
   */
  jsdoc: boolean;
  /**
   * Enable Prettier configuration.
   */
  prettier: boolean;
  /**
   * Enable React configuration.
   */
  react: boolean;
  /**
   * Enable the configuration for tests written with Vitest.
   */
  tests: boolean;
  /**
   * Enable Typescript configuration.
   */
  typescript: boolean;
};

export type RulesOverrides = Partial<Linter.RulesRecord>;

type Overrides = {
  /**
   * Override the Astro rules.
   */
  astro: RulesOverrides;
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
   * Override the JSDoc rules.
   */
  jsdoc: RulesOverrides;
  /**
   * Override the Prettier rules.
   */
  prettier: RulesOverrides;
  /**
   * Override the React rules.
   */
  react: RulesOverrides;
  /**
   * Override the rules for tests.
   */
  tests: RulesOverrides;
  /**
   * Override the TS rules.
   */
  typescript: RulesOverrides;
  /**
   * Override the unicorn rules.
   */
  unicorn: RulesOverrides;
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
