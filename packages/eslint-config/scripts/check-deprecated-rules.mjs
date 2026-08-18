/*
 * Built to its own directory (not dist/) so this doesn't race the repo's own
 * eslint.config.js, which imports @arphi/eslint-config from dist/.
 */
import arphi from "../.lint-deprecated-rules/dist/index.js";
import { TEST_TS_ANCHOR, TSX_ANCHOR } from "../test/helpers/fixtures.ts";
import { lintCode } from "../test/helpers/lint.ts";

/*
 * Each preset's rules only apply to files matching its own `files` glob. These
 * three extensions cover every preset between them (jsdoc has no `files`
 * restriction, so all three exercise it too).
 */
const SAMPLES = [
  {
    code: 'const El = () => <button type="button">Click</button>;\n',
    filePath: TSX_ANCHOR,
  },
  {
    code: 'test("a", () => {\n  expect(1).toBe(1);\n});\n',
    filePath: TEST_TS_ANCHOR,
  },
  { code: "---\n---\n<div></div>\n", filePath: "sample.astro" },
];

const config = await arphi({
  astro: true,
  jsdoc: true,
  react: true,
  tests: true,
  typescript: true,
});

const deprecated = new Map();
for (const { code, filePath } of SAMPLES) {
  // eslint-disable-next-line no-await-in-loop -- samples must run sequentially to keep failures attributable
  const { deprecated: used } = await lintCode(code, config, filePath);
  for (const rule of used) {
    deprecated.set(
      rule.ruleId,
      rule.info?.message ?? "No further details provided."
    );
  }
}

if (deprecated.size === 0) {
  console.log("No deprecated rules in use.");
} else {
  console.error(`${deprecated.size} deprecated rule(s) in use:\n`);
  for (const [ruleId, message] of deprecated) {
    console.error(`- ${ruleId}\n  ${message}`);
  }
}
