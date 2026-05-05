// You are given a list of values.

// Return a new list where:

// * some values are kept as-is
// * some values are transformed
// * some values are removed entirely

// Examples:
// processData([1, "hello", 2, "world", 3]) ➞ [1, "HELLO", 2, "WORLD", 3]

// processData(["a", 10, null, "b"]) ➞ ["A", 10, "B"]

// processData([true, "test", 5]) ➞ ["TEST", 5]

// Input: 
    // A list of Values

// Output: 
    // A new list with some values the same, changed, removed

// Method: 
    // Mapping

// Approach: 
    // First I take the list of values
    // Then I check the conditions of the values 
    // Then I use map to create a new array 
    // Then Return the array 
function processData(arr) {
  return arr
    .filter(value => typeof value === 'number' || typeof value === 'string')
    .map(value =>
      typeof value === 'string' ? value.toUpperCase() : value
    )
}