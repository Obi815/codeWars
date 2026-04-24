// You will be given a list of strings. You must sort it alphabetically 
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Input: 
    // A list of strings
// Output:
    // First value of sorted strings with '***' between each string

    function twoSort(s) {
  return s.sort()[0].split('').join('***')
}

// Shorter Code: 
const sumSquares = arr =>
  arr.reduce((sum, n) => sum + n ** 2, 0);