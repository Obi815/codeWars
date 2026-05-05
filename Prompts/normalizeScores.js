// You are given a list of numbers.

// Return a new list where:
// 	•	some values are removed
// 	•	the remaining values are transformed based on a rule

// Examples: 
// normalize([10, -5, 20, 0]) ➞ [1, 2]

// normalize([5, 15, -10]) ➞ [0.5, 1.5]

// normalize([-3, -2, -1]) ➞ []

// Input: 
    // List of numbers

// Output: 
    // A new list with remaining values transformed 
    // based on a rule (index > 0)

// Method: 
    // mapping
    // Filtering

// Approach: 
    // First I take the list of numbers
    // Then I filter out the numbers less than 1
    // Then I map the array changing the values
    // Then i return the array 

// Solution: 
function normalize(arr) {
  const positives = arr.filter(num => num > 0)
  const max = Math.max(...positives)

  return positives.map(num => num / max * 2)
}