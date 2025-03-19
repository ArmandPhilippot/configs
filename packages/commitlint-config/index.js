import { RuleConfigSeverity } from "@commitlint/types";

const MAX_LENGTH = 72;
const HEADER_MAX_LENGTH = 50;

/**
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-case": [RuleConfigSeverity.Error, "always", "sentence-case"],
    "body-empty": [RuleConfigSeverity.Disabled],
    "body-full-stop": [RuleConfigSeverity.Error, "always"],
    "body-leading-blank": [RuleConfigSeverity.Error, "always"],
    "body-max-length": [RuleConfigSeverity.Disabled],
    "body-max-line-length": [RuleConfigSeverity.Error, "always", MAX_LENGTH],
    "body-min-length": [RuleConfigSeverity.Disabled],
    "footer-empty": [RuleConfigSeverity.Disabled],
    "footer-leading-blank": [RuleConfigSeverity.Error, "always"],
    "footer-max-length": [RuleConfigSeverity.Disabled],
    "footer-max-line-length": [RuleConfigSeverity.Error, "always", MAX_LENGTH],
    "footer-min-length": [RuleConfigSeverity.Disabled],
    "header-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "header-full-stop": [RuleConfigSeverity.Error, "never"],
    "header-max-length": [
      RuleConfigSeverity.Error,
      "always",
      HEADER_MAX_LENGTH,
    ],
    "header-min-length": [RuleConfigSeverity.Disabled],
    "header-trim": [RuleConfigSeverity.Error, "always"],
    "references-empty": [RuleConfigSeverity.Disabled],
    "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "scope-empty": [RuleConfigSeverity.Disabled],
    "scope-enum": [RuleConfigSeverity.Disabled],
    "scope-max-length": [RuleConfigSeverity.Disabled],
    "scope-min-length": [RuleConfigSeverity.Disabled],
    "signed-off-by": [RuleConfigSeverity.Disabled],
    "subject-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "subject-empty": [RuleConfigSeverity.Error, "never"],
    "subject-full-stop": [RuleConfigSeverity.Error, "never", "."],
    "subject-max-length": [RuleConfigSeverity.Disabled],
    "subject-min-length": [RuleConfigSeverity.Disabled],
    "trailer-exists": [RuleConfigSeverity.Disabled],
    "type-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "type-empty": [RuleConfigSeverity.Error, "never"],
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "type-max-length": [RuleConfigSeverity.Disabled],
    "type-min-length": [RuleConfigSeverity.Disabled],
  },
};
