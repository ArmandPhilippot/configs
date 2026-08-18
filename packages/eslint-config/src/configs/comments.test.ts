import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { comments } from "./comments";

describe("comments preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = comments();
    const code = "const a = 1;\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags a directive comment without a description via require-description", async () => {
    expect.assertions(1);

    const config = comments();
    const code = "// eslint-disable-next-line no-console\nconsole.log(1);\n";
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.map((message) => message.ruleId)).toContain(
      "@eslint-community/eslint-comments/require-description"
    );
  });

  it("applies rule overrides", () => {
    const config = comments({
      "@eslint-community/eslint-comments/require-description": "off",
    });

    expect(
      config[0]?.rules?.[
        "@eslint-community/eslint-comments/require-description"
      ]
    ).toBe("off");
  });
});
