// You are given a list of numbers.

// Return a new list where each value is turned into a string that describes it.

// Examples:
// labelNumbers([1, 2, 3]) ➞ ["Index 0: 1", "Index 1: 2", "Index 2: 3"]

// labelNumbers([10, 20]) ➞ ["Index 0: 10", "Index 1: 20"]

// What is the input? 
    // A list of numbers

// What is the output? 
    // A new list 
    // Each value is turned to a string
    // Each value is described ("Index 0: 1")

// Method: 
    // Mapping
    // toString()
    // Sting()

// Approach: 
    // First I take the list of numbers
    // Then I turn the values into strings
    // Then I create a new array using .map()
    // Then I describe the values 

// Solution: 
function labelNumbers(arr) {
  return arr.map((number, i) => `Index ${i}: ${number}`)
}