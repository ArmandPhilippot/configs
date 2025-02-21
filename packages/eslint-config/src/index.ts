import { astro } from "./configs/astro";
import { comments } from "./configs/comments";
import { ignores as ignoresConfig } from "./configs/ignores";
import { imports } from "./configs/imports";
import { javascript } from "./configs/javascript";
import { react } from "./configs/react";
import { typescript } from "./configs/typescript";
import type { Config, ConfigOptions } from "./types";

export default function arphi({
  ignores,
  overrides,
  astro: enableAstro = false,
  react: enableReact = false,
  typescript: enableTypescript = false,
}: ConfigOptions = {}): Config[] {
  const configs: Config[] = [
    ignoresConfig(ignores),
    ...javascript(overrides?.javascript),
    comments(overrides?.comments),
    imports(overrides?.imports),
  ];

  if (enableTypescript) {
    configs.push(...typescript(overrides?.typescript));
  }

  if (enableAstro) {
    configs.push(...astro(overrides?.astro));
  }

  if (enableReact) {
    configs.push(react(overrides?.react));
  }

  return configs;
}
