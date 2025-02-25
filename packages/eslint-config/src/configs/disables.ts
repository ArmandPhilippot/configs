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
      },
    },
  ];
}
