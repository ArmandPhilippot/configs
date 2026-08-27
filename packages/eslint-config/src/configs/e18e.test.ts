import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { e18e } from "./e18e";

describe("e18e preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = e18e();
    const code = "const a = 1;\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("enables the recommended rules", () => {
    const config = e18e();

    expect(config[0]?.rules?.["e18e/prefer-object-has-own"]).toBe("error");
  });

  it("flags an improvable pattern via e18e/prefer-object-has-own", async () => {
    expect.assertions(1);

    const config = e18e();
    const code = "export function f(o) {\n  return o.hasOwnProperty('a');\n}\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.map((message) => message.ruleId)).toContain(
      "e18e/prefer-object-has-own"
    );
  });

  it("applies rule overrides", () => {
    const config = e18e({ "e18e/prefer-object-has-own": "off" });

    expect(config[0]?.rules?.["e18e/prefer-object-has-own"]).toBe("off");
  });

  it("disables e18e rules that duplicate an already-enabled unicorn rule", () => {
    const config = e18e();

    expect(config[0]?.rules?.["e18e/prefer-date-now"]).toBe("off");
  });

  it("disables e18e/prefer-string-fromcharcode (conflicts with unicorn/prefer-code-point)", () => {
    const config = e18e();

    expect(config[0]?.rules?.["e18e/prefer-string-fromcharcode"]).toBe("off");
  });
});
