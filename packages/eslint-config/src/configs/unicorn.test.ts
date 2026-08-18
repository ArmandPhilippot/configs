import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { unicorn } from "./unicorn";

describe("unicorn preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = unicorn();
    const code = "const a = 1;\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags a wrongly-named catch parameter via unicorn/catch-error-name", async () => {
    expect.assertions(1);

    const config = unicorn();
    const code = "try {\n  1 + 1;\n} catch (err) {\n  1 + 1;\n}\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.map((message) => message.ruleId)).toContain(
      "unicorn/catch-error-name"
    );
  });

  it("applies rule overrides", () => {
    const config = unicorn({ "unicorn/catch-error-name": "off" });

    expect(config[0]?.rules?.["unicorn/catch-error-name"]).toBe("off");
  });
});
