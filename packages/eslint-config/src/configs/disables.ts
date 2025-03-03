import type { Config } from "../types";

/**
 * Configure the rules to disable for specific files.
 *
 * @returns {Config[]} The disables configuration.
 */
export function disables(): Config[] {
  return [
    {
      files: ["**/*.d.?([cm])ts"],
      name: "arphi/disables/dts",
      rules: {
        "no-duplicate-imports": "off",
        "import-x/no-unused-modules": "off",
        "import-x/unambiguous": "off",
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
    {
      files: ["**/*.js", "**/*.cjs"],
      name: "arphi/disables/cjs",
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ];
}
