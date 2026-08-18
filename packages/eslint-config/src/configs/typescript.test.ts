import { describe, expect, it } from "vitest";
import { TS_ANCHOR } from "../../test/helpers/fixtures";
import { lintCode } from "../../test/helpers/lint";
import { typescript } from "./typescript";

describe("typescript preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = await typescript();
    const code = "const a = 1;\n";
    const { messages } = await lintCode(code, config, TS_ANCHOR);

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags unhandled promises via @typescript-eslint/no-floating-promises", async () => {
    expect.assertions(1);

    const config = await typescript();
    const code = "async function run(): Promise<void> {}\nrun();\n";
    const { messages } = await lintCode(code, config, TS_ANCHOR);

    expect(messages.map((message) => message.ruleId)).toContain(
      "@typescript-eslint/no-floating-promises"
    );
  });

  it("applies rule overrides", async () => {
    expect.assertions(1);

    const config = await typescript({
      "@typescript-eslint/no-floating-promises": "off",
    });

    expect(config[0]?.rules?.["@typescript-eslint/no-floating-promises"]).toBe(
      "off"
    );
  });
});
