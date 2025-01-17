# Unexpected Results in Addition Function

This repository demonstrates a common JavaScript error: unexpected results when performing arithmetic operations on non-numeric types. The `foo` function handles null values, but it can still throw errors or produce unexpected results if the input values are not numbers.  This example highlights the importance of input validation in JavaScript functions.

## Bug

The `bug.js` file contains the faulty function.  Notice that while it correctly handles `null`, it will fail if passed strings or other non-numbers.