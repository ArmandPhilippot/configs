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

    const config = [
      ...(await typescript()),
      ...(await react({ "@eslint-react/dom-no-missing-button-type": "off" })),
    ];
    const code = "const El = () => <button>Click</button>;\n";
    const { messages } = await lintCode(code, config, TSX_ANCHOR);

    expect(messages.map((message) => message.ruleId)).not.toContain(
      "@eslint-react/dom-no-missing-button-type"
    );
  });

  it("resolves cleanly on plain JSX with no typed parser (no-implicit-key is TS-only)", async () => {
    expect.assertions(1);

    const config = await react();
    const code = 'const El = () => <button type="button">Click</button>;\n';
    const { messages } = await lintCode(code, config, "sample.jsx");

    expect(messages.filter((message) => message.fatal)).toStrictEqual([]);
  });

  it("flags an implicit key spread via @eslint-react/no-implicit-key on TSX files", async () => {
    expect.assertions(1);

    const config = [...(await typescript()), ...(await react())];
    const code =
      "const items: { key: string }[] = [];\n" +
      "const El = () => (\n" +
      "  <ul>\n" +
      "    {items.map((item) => (\n" +
      "      <li {...item} />\n" +
      "    ))}\n" +
      "  </ul>\n" +
      ");\n";
    const { messages } = await lintCode(code, config, TSX_ANCHOR);

    expect(messages.map((message) => message.ruleId)).toContain(
      "@eslint-react/no-implicit-key"
    );
  });

  it("applies rule overrides to TS-only rules like @eslint-react/no-implicit-key", async () => {
    expect.assertions(1);

    const config = [
      ...(await typescript()),
      ...(await react({ "@eslint-react/no-implicit-key": "off" })),
    ];
    const code =
      "const items: { key: string }[] = [];\n" +
      "const El = () => (\n" +
      "  <ul>\n" +
      "    {items.map((item) => (\n" +
      "      <li {...item} />\n" +
      "    ))}\n" +
      "  </ul>\n" +
      ");\n";
    const { messages } = await lintCode(code, config, TSX_ANCHOR);

    expect(messages.map((message) => message.ruleId)).not.toContain(
      "@eslint-react/no-implicit-key"
    );
  });
});
