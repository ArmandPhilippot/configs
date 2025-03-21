---
"@arphi/commitlint-config": patch
---

Disables the rule enforcing a case for the subject.

The previous values was causing issue with capital letters with some words or depending on their position. This seems to be a known issue according the commitlint repository. So the rule is now disabled and capital letters are now allowed in the subject regardless of their position.
