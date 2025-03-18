import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  shims: true,
  esbuildOptions: (options) => {
    /* eslint-disable-next-line no-param-reassign -- Required because of a bug in esbuild, see #evanw/esbuild#1921 */
    options.banner = {
      js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
    };
  },
});
