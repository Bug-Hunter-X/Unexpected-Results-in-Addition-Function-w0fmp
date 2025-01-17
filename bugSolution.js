function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle null and non-numeric values
  }
  return a + b;
}