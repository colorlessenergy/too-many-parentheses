// input: (((3)))
// result (3)

// The rule for "too many parentheses"
// around part of an expression is that if removing matching parentheses around a section of text still
//leaves that section enclosed by parentheses, then those parentheses should be removed as extraneous.
// ((a((bc)(de)))f) does not have any extra parentheses. Removing any matching set of parentheses does not leave a "single" parenthesesed group that was previously enclosed by the parentheses in question.
