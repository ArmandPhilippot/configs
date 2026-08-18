import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { tests } from "./tests";

describe("tests preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = await tests();
    const code = 'test("a", () => {\n  expect(1).toBe(1);\n});\n';
    const { messages } = await lintCode(code, config, "sample.test.ts");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags .only via @funboxteam/no-only-tests/no-only-tests", async () => {
    expect.assertions(1);

    const config = await tests();
    const code = 'test.only("a", () => {\n  expect(1).toBe(1);\n});\n';
    const { messages } = await lintCode(code, config, "sample.test.ts");

    expect(messages.map((message) => message.ruleId)).toContain(
      "@funboxteam/no-only-tests/no-only-tests"
    );
  });

  it("flags a missing assertion via vitest/expect-expect", async () => {
    expect.assertions(1);

    const config = await tests();
    const code = 'test("a", () => {\n  const value = 1;\n});\n';
    const { messages } = await lintCode(code, config, "sample.test.ts");

    expect(messages.map((message) => message.ruleId)).toContain(
      "vitest/expect-expect"
    );
  });

  it("applies rule overrides", async () => {
    expect.assertions(1);

    const config = await tests({ "vitest/max-expects": "off" });

    expect(config[0]?.rules?.["vitest/max-expects"]).toBe("off");
  });
});
