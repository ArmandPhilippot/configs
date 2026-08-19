import { describe, expect, it } from "vitest";
import { TEST_TS_ANCHOR } from "../../test/helpers/fixtures";
import { lintCode } from "../../test/helpers/lint";
import { tests } from "./tests";
import { typescript } from "./typescript";

describe("tests preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = await tests();
    const code = 'test("a", () => {\n  expect(1).toBe(1);\n});\n';
    const { messages } = await lintCode(code, config, "sample.test.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags .only via @funboxteam/no-only-tests/no-only-tests", async () => {
    expect.assertions(1);

    const config = await tests();
    const code = 'test.only("a", () => {\n  expect(1).toBe(1);\n});\n';
    const { messages } = await lintCode(code, config, "sample.test.js");

    expect(messages.map((message) => message.ruleId)).toContain(
      "@funboxteam/no-only-tests/no-only-tests"
    );
  });

  it("flags a missing assertion via vitest/expect-expect", async () => {
    expect.assertions(1);

    const config = await tests();
    const code = 'test("a", () => {\n  const value = 1;\n});\n';
    const { messages } = await lintCode(code, config, "sample.test.js");

    expect(messages.map((message) => message.ruleId)).toContain(
      "vitest/expect-expect"
    );
  });

  it("applies rule overrides", async () => {
    expect.assertions(1);

    const config = await tests({ "vitest/max-expects": "off" });
    const expectCallsOverDefaultLimit = 6;
    const code = `test("a", () => {\n${"  expect(1).toBe(1);\n".repeat(
      expectCallsOverDefaultLimit
    )}});\n`;
    const { messages } = await lintCode(code, config, "sample.test.js");

    expect(messages.map((message) => message.ruleId)).not.toContain(
      "vitest/max-expects"
    );
  });

  it("flags unbound mocked methods via vitest/unbound-method on TS test files", async () => {
    expect.assertions(1);

    const config = [...(await typescript()), ...(await tests())];
    const code =
      "class Foo {\n" +
      "  bar() {}\n" +
      "}\n" +
      'test("a", () => {\n' +
      "  const foo = new Foo();\n" +
      "  const bar = foo.bar;\n" +
      "  expect(bar).toBeDefined();\n" +
      "});\n";
    const { messages } = await lintCode(code, config, TEST_TS_ANCHOR);

    expect(messages.map((message) => message.ruleId)).toContain(
      "vitest/unbound-method"
    );
  });

  it("applies rule overrides to TS-only rules like vitest/unbound-method", async () => {
    expect.assertions(1);

    const config = [
      ...(await typescript()),
      ...(await tests({ "vitest/unbound-method": "off" })),
    ];
    const code =
      "class Foo {\n" +
      "  bar() {}\n" +
      "}\n" +
      'test("a", () => {\n' +
      "  const foo = new Foo();\n" +
      "  const bar = foo.bar;\n" +
      "  expect(bar).toBeDefined();\n" +
      "});\n";
    const { messages } = await lintCode(code, config, TEST_TS_ANCHOR);

    expect(messages.map((message) => message.ruleId)).not.toContain(
      "vitest/unbound-method"
    );
  });
});
