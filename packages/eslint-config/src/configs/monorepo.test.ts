import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { jsdoc } from "./jsdoc";
import { monorepo } from "./monorepo";

describe("monorepo preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = monorepo();
    const code = "const a = 1;\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("silences jsdoc/imports-as-dependencies, which only checks the root package.json", async () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- assertion count
    expect.assertions(2);

    const code =
      "/** @type {import('lodash').LoDashStatic} */\nconst a = {};\n";
    const jsdocConfig = await jsdoc();
    const [withoutMonorepo, withMonorepo] = await Promise.all([
      lintCode(code, jsdocConfig, "sample.js"),
      lintCode(code, [...jsdocConfig, ...monorepo()], "sample.js"),
    ]);

    expect(withoutMonorepo.messages.map((message) => message.ruleId)).toContain(
      "jsdoc/imports-as-dependencies"
    );
    expect(
      withMonorepo.messages.map((message) => message.ruleId)
    ).not.toContain("jsdoc/imports-as-dependencies");
  });

  it("applies rule overrides", () => {
    expect.assertions(1);

    const config = monorepo({
      "jsdoc/imports-as-dependencies": "warn",
    });

    expect(config[0]?.rules?.["jsdoc/imports-as-dependencies"]).toBe("warn");
  });
});
