import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { monorepo } from "./monorepo";

describe("monorepo preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = monorepo();
    const code = "const a = 1;\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("applies rule overrides", () => {
    expect.assertions(1);

    const config = monorepo({
      "no-console": "warn",
    });

    expect(config[0]?.rules?.["no-console"]).toBe("warn");
  });
});
