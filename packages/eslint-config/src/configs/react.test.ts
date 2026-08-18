import { describe, expect, it } from "vitest";
import { TSX_ANCHOR } from "../../test/helpers/fixtures";
import { lintCode } from "../../test/helpers/lint";
import { react } from "./react";
import { typescript } from "./typescript";

// `@eslint-react`'s `recommended` preset includes type-aware rules, so it
// must be combined with the `typescript` preset (which supplies the parser
// and type info) — exactly how a real consumer would enable both together.

describe("react preset", () => {
  it("resolves cleanly (no removed/renamed rule, no fatal parse error)", async () => {
    expect.assertions(1);

    const config = [...(await typescript()), ...(await react())];
    const code = 'const El = () => <button type="button">Click</button>;\n';
    const { messages } = await lintCode(code, config, TSX_ANCHOR);

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags a button without a type via @eslint-react/dom-no-missing-button-type", async () => {
    expect.assertions(1);

    const config = [...(await typescript()), ...(await react())];
    const code = "const El = () => <button>Click</button>;\n";
    const { messages } = await lintCode(code, config, TSX_ANCHOR);

    expect(messages.map((message) => message.ruleId)).toContain(
      "@eslint-react/dom-no-missing-button-type"
    );
  });

  it("applies rule overrides", async () => {
    expect.assertions(1);

    const config = await react({
      "@eslint-react/dom-no-missing-button-type": "off",
    });

    expect(config[0]?.rules?.["@eslint-react/dom-no-missing-button-type"]).toBe(
      "off"
    );
  });
});
