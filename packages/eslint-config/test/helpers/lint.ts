import { ESLint, type Linter } from "eslint";
import type { Config } from "../../src/types";

export type LintResult = {
  messages: Linter.LintMessage[];
  deprecated: ESLint.DeprecatedRuleUse[];
};

/**
 * Lint a code snippet against a resolved flat config using real ESLint.
 *
 * @param {string} code - The source code to lint.
 * @param {Config[]} configs - The resolved flat config to lint against.
 * @param {string} filePath - Path used to match `files` globs and parsers. Must be real and on-disk for presets using typescript-eslint's `projectService` — see `test/helpers/fixtures.ts`.
 * @returns {Promise<LintResult>} The lint messages and any deprecated rules that were used.
 */
export async function lintCode(
  code: string,
  configs: Config[],
  filePath: string
): Promise<LintResult> {
  const eslint = new ESLint({
    cwd: process.cwd(),
    overrideConfig: configs as Linter.Config[],
    overrideConfigFile: true,
  });
  const [result] = await eslint.lintText(code, { filePath });

  return {
    deprecated: result?.usedDeprecatedRules ?? [],
    messages: result?.messages ?? [],
  };
}
