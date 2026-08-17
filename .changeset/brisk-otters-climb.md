---
"@arphi/eslint-config": major
---

Raises the minimum supported ESLint, Node.js, and TypeScript versions.

The minimum supported versions are now:

- `^10.4.0` for ESLint. Support for ESLint 9 has been dropped as it reached end of life on 2026-08-06.
- `^22.13.0 || >=24` for Node.js.
- `^5.9.0 || ^6.0.0` for TypeScript. This is now an explicit, required peer dependency.
