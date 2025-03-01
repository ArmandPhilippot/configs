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
import type {
  Config,
  ConfigOptions,
  OptionalConfigs,
  RulesOverrides,
} from "./types";

/**
 * Load the required configurations.
 *
 * @param {ConfigOptions["ignores"]} ignores - The additional paths to ignore.
 * @param {ConfigOptions["overrides"]} overrides - The config overrides.
 * @returns {Promise<Config[]>} The required configurations.
 */
async function loadRequiredConfigs(
  ignores: ConfigOptions["ignores"],
  overrides: ConfigOptions["overrides"]
): Promise<Config[]> {
  const [ignoreResult, jsResult, commentResult, importResult] =
    await Promise.all([
      ignoresConfig(ignores),
      javascript(overrides?.javascript),
      comments(overrides?.comments),
      imports(overrides?.imports),
    ]);

  return [...ignoreResult, ...jsResult, ...commentResult, ...importResult];
}

/**
 * Load the optional configurations.
 *
 * @param {Omit<Partial<OptionalConfigs>, "prettier">} configs - The configs.
 * @param {ConfigOptions["overrides"]} overrides - The config overrides.
 * @returns {Promise<Config[]>} The optional configurations.
 */
async function loadOptionalConfigs(
  configs: Omit<Partial<OptionalConfigs>, "prettier">,
  overrides: ConfigOptions["overrides"]
): Promise<Config[]> {
  const configLoaders: [
    keyof typeof configs,
    (_opt?: RulesOverrides) => Promise<Config[]>,
  ][] = [
    ["typescript", typescript],
    ["astro", astro],
    ["react", react],
    ["jsdoc", jsdoc],
    ["tests", tests],
  ];

  const configPromises = configLoaders
    .filter(([key]) => !!configs[key])
    .map(async ([key, loader]) => loader(overrides?.[key]));

  const results = await Promise.all(configPromises);
  return results.flat();
}

/**
 * Load the configs that should appear last.
 *
 * @param {ConfigOptions["prettier"]} enablePrettier - Activate Prettier or not
 * @param {ConfigOptions["overrides"]} overrides - The config overrides.
 * @returns {Promise<Config[]>} The footer configurations.
 */
async function loadFooterConfigs(
  enablePrettier: boolean,
  overrides: ConfigOptions["overrides"]
): Promise<Config[]> {
  const [disableConfig, prettierConfig] = await Promise.all([
    disables(),
    enablePrettier ? prettier(overrides?.prettier) : [],
  ]);

  return [...disableConfig, ...(enablePrettier ? prettierConfig : [])];
}

/**
 * Generate an array of ESLint configurations.
 *
 * @param {ConfigOptions} [options] - The configuration options.
 * @param {Config[]} [userConfigs] - The custom configurations to merge.
 * @returns {Promise<Config[]>} The ESLint configuration.
 */
export default async function arphi(
  {
    ignores,
    overrides,
    prettier: enablePrettier = false,
    ...optional
  }: ConfigOptions = {},
  ...userConfigs: Config[]
): Promise<Config[]> {
  const [requiredConfigs, optionalConfigs, footerConfigs] = await Promise.all([
    loadRequiredConfigs(ignores, overrides),
    loadOptionalConfigs(optional, overrides),
    loadFooterConfigs(enablePrettier, overrides),
  ]);

  return [
    ...requiredConfigs,
    ...optionalConfigs,
    ...userConfigs,
    ...footerConfigs,
  ];
}
