// You are given a list of mixed values.

// Return a new list where:
// 	•	only certain values are kept
// 	•	those values are transformed in a specific way

// Examples: 
// cleanData([1, "2", 3, "hello", 4]) ➞ [1, 9, 16]

// cleanData(["a", 2, 3, null, 5]) ➞ [4, 9, 25]

// cleanData([true, "test", 6]) ➞ [36]

// Input:
    // List of mixed values 

// Output: 
    // New list 
    // number values that are squared 

// Method:
    // mapping

// Approach:
    // First I take the list of mixed values
    // Then I check if values are numbers
    // then I square the values that are numbers
    // Then I return the new array 

// Solution: 
function cleanData(arr) {
  return arr
        .filter(num => typeof num === 'number')
        .map(number => number ** 2)
}