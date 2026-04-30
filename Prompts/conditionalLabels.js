// You are given a list of numbers.

// Return a new list where each value is replaced based on a rule:
// 	•	some values become descriptive strings
// 	•	others stay as numbers

// Examples: 
// transformNumbers([1, 2, 3, 4]) ➞ ["odd", 2, "odd", 4]

// transformNumbers([10, 11, 12]) ➞ [10, "odd", 12]

// What is the input?
    // List of numbers 

// What is the output? 
    // New array 
    // If odd number is replaced with "odd"

// Method: 
    // Map

// Approach: 
    // First I take the list of numbers
    // Then I create a new array with values changed
    // Check conditional if number is odd replace number with "odd"
    // Return Array 

// Solution: 
function transformNumbers(arr) {
  return arr.map(num => {
    if(num % 2 !== 0){return 'odd'}
    else{return num}
  })
}