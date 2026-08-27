import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { jsdoc } from "./jsdoc";

describe("jsdoc preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = await jsdoc();
    const code = "const a = 1;\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags an undocumented parameter via jsdoc/require-param", async () => {
    expect.assertions(1);

    const config = await jsdoc();
    const code =
      "/**\n * Do something.\n */\nfunction doSomething(value) {\n  return value;\n}\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.map((message) => message.ruleId)).toContain(
      "jsdoc/require-param"
    );
  });

  it("applies rule overrides", async () => {
    expect.assertions(1);

    const config = await jsdoc({ "jsdoc/require-param": "off" });

    expect(config[0]?.rules?.["jsdoc/require-param"]).toBe("off");
  });

  it("disables jsdoc/imports-as-dependencies by default", async () => {
    expect.assertions(1);

    const config = await jsdoc();
    const code =
      "/** @type {import('lodash').LoDashStatic} */\nconst a = {};\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.map((message) => message.ruleId)).not.toContain(
      "jsdoc/imports-as-dependencies"
    );
  });
});
