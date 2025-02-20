import type { Config } from "../types";

/**
 * Configure the paths to ignore when linting.
 *
 * @param {string[]} [userIgnores] - Additional paths to ignore.
 * @returns {Config} The ignores configuration.
 */
export function ignores(userIgnores: string[] = []): Config {
  return {
    name: "arphi/ignores",
    ignores: [
      "**/__snapshots__",
      "**/.astro",
      "**/.changeset",
      "**/.cache",
      "**/.next",
      "**/.nuxt",
      "**/.svelte-kit",
      "**/.vercel",
      "**/*.min.*",
      "**/bun.lockb",
      "**/CHANGELOG*.md",
      "**/LICENSE*",
      "**/coverage",
      "**/dist",
      "**/node_modules",
      "**/output",
      "**/package-lock.json",
      "**/pnpm-lock.yaml",
      "**/public",
      "**/yarn.lock",
      ...userIgnores,
    ],
  };
}
