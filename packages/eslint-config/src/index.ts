import { astro } from "./configs/astro";
import { comments } from "./configs/comments";
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
  const configs: Config[] = [
    ignoresConfig(ignores),
    ...javascript(overrides?.javascript),
    comments(overrides?.comments),
    imports(overrides?.imports),
  ];

  if (enableTypescript) {
    configs.push(...typescript(overrides?.typescript));
  }

  if (enableAstro) {
    configs.push(...astro(overrides?.astro));
  }

  if (enableReact) {
    configs.push(react(overrides?.react));
  }

  if (enableJSDoc) {
    configs.push(jsdoc(overrides?.jsdoc));
  }

  if (enableTests) {
    configs.push(tests(overrides?.tests));
  }

  if (userConfigs.length) {
    configs.push(...userConfigs);
  }

  if (enablePrettier) {
    configs.push(prettier(overrides?.prettier));
  }

  return configs;
}
