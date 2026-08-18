import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { imports } from "./imports";

describe("imports preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = imports();
    const code = 'import a from "node:path";\n';
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags duplicate imports via import-x/no-duplicates", async () => {
    expect.assertions(1);

    const config = imports();
    const code = 'import a from "node:path";\nimport b from "node:path";\n';
    const { messages } = await lintCode(code, config, "sample.js");

    expect(messages.map((message) => message.ruleId)).toContain(
      "import-x/no-duplicates"
    );
  });

  it("applies rule overrides", () => {
    const config = imports({ "import-x/no-duplicates": "off" });

    expect(config[0]?.rules?.["import-x/no-duplicates"]).toBe("off");
  });
});
