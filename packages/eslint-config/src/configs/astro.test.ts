import { describe, expect, it } from "vitest";
import { lintCode } from "../../test/helpers/lint";
import { astro } from "./astro";

describe("astro preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = await astro();
    const code = '---\n---\n<div class="a" id="b"></div>\n';
    const { messages } = await lintCode(code, config, "sample.astro");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags unsorted attributes via astro/sort-attributes", async () => {
    expect.assertions(1);

    const config = await astro();
    const code = '---\n---\n<div id="b" class="a"></div>\n';
    const { messages } = await lintCode(code, config, "sample.astro");

    expect(messages.map((message) => message.ruleId)).toContain(
      "astro/sort-attributes"
    );
  });

  it("applies rule overrides", async () => {
    expect.assertions(1);

    const config = await astro({ "astro/sort-attributes": "off" });

    expect(config[0]?.rules?.["astro/sort-attributes"]).toBe("off");
  });
});
