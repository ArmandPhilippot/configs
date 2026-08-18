import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { javascript } from "./javascript";

describe("javascript preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = javascript();
    const code = "const a = 1;\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags loose equality via eqeqeq", async () => {
    expect.assertions(1);

    const config = javascript();
    const code = "if (1 == 1) {\n  1 + 1;\n}\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.map((message) => message.ruleId)).toContain("eqeqeq");
  });

  it("applies rule overrides", () => {
    const config = javascript({ eqeqeq: "off" });

    expect(config[0]?.rules?.["eqeqeq"]).toBe("off");
  });
});
