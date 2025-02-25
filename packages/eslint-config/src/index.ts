import { astro } from "./configs/astro";
import { comments } from "./configs/comments";
import { disables } from "./configs/disables";
import { ignores as ignoresConfig } from "./configs/ignores";
import { imports } from "./configs/imports";
import { javascript } from "./configs/javascript";
import { jsdoc } from "./configs/jsdoc";
import { prettier } from "./configs/prettier";
import { react } from "./configs/react";
import { tests } from "./configs/tests";
import { typescript } from "./configs/typescript";
import type { Config, ConfigOptions } from "./types";

/**
 * Generate an array of ESLint configurations.
 *
 * @param {ConfigOptions} [options] - The configuration options.
 * @param {Config[]} [userConfigs] - The custom configurations to merge.
 * @returns {Config[]} The ESLint configuration.
 */
export default function arphi(
  {
    ignores,
    overrides,
    astro: enableAstro = false,
    jsdoc: enableJSDoc = false,
    prettier: enablePrettier = false,
    react: enableReact = false,
    tests: enableTests = false,
    typescript: enableTypescript = false,
  }: ConfigOptions = {},
  ...userConfigs: Config[]
): Config[] {
  // Define required configs that are always included
  const requiredConfigs = [
    ...ignoresConfig(ignores),
    ...javascript(overrides?.javascript),
    ...comments(overrides?.comments),
    ...imports(overrides?.imports),
  ];

  // Define optional configs with their feature flags
  const optionalConfigs: Array<[boolean, () => Config[]]> = [
    [enableTypescript, () => typescript(overrides?.typescript)],
    [enableAstro, () => astro(overrides?.astro)],
    [enableReact, () => react(overrides?.react)],
    [enableJSDoc, () => jsdoc(overrides?.jsdoc)],
    [enableTests, () => tests(overrides?.tests)],
  ];

  // Define the configs that should appear last
  const footerConfigs = [
    ...disables(),
    ...(enablePrettier ? prettier(overrides?.prettier) : []),
  ];

  return [
    ...requiredConfigs,
    ...optionalConfigs
      .filter(([enabled]) => enabled)
      .flatMap(([, enableConfig]) => enableConfig()),
    ...userConfigs,
    ...footerConfigs,
  ];
}
