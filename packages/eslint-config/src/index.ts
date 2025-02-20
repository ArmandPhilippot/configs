import ignoresConfig from "./configs/ignores";
import { javascript } from "./configs/javascript";
import { typescript } from "./configs/typescript";
import type { Config, ConfigOptions } from "./types";

export default function arphi({
  ignores,
  overrides,
}: ConfigOptions = {}): Config[] {
  return [
    ignoresConfig(ignores),
    ...javascript(overrides?.javascript),
    ...typescript(overrides?.typescript),
  ];
}
