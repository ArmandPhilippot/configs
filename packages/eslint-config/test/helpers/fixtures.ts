import path from "node:path";

/*
 * Real, on-disk files that anchor typescript-eslint's projectService: it
 * accepts in-memory code as an overlay, but only for a path it can find on
 * disk. Any test exercising the `typescript` preset must use one of these
 * instead of a virtual path.
 */
export const TS_ANCHOR = path.join(process.cwd(), "test/fixtures/anchor.ts");
export const TSX_ANCHOR = path.join(
  process.cwd(),
  "test/fixtures/anchor-jsx.tsx"
);
export const TEST_TS_ANCHOR = path.join(
  process.cwd(),
  "test/fixtures/anchor.test.ts"
);
