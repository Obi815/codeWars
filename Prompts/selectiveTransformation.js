// You are given a list of numbers.

// Return a new list where:
// 	•	values that meet a certain condition are transformed
// 	•	values that do not meet the condition are completely removed

// Examples:
// processNumbers([1, 2, 3, 4]) ➞ [4, 16]

// processNumbers([5, 6, 7, 8]) ➞ [36, 64]

// processNumbers([1, 3, 5]) ➞ []

// What is the input?
    // A list of numbers 

// What is the output?
    // A new list where certain numbers that meet a condition are transformed 

// Method:
    // Mapping
    // Filtering

// Approach:  
    //  First I take the list of numbers
    // Then I check if they meet the condition
    // Then I take the numbers that meet the condition and square them and add them to a new array 
    // Then I return the new array 

// Solution: 
function processNumbers(arr) {
  return arr
  .filter(num => num % 2 === 0)
  .map(number => number ** 2)
}