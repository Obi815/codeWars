// Write a function that takes an array of objects and returns a new array containing only the name values.

// What is the Input?
    // Array of objects

// What is the Output?
    // A new array containing only the name values 

// Method: 
    // Mapping

// Approach:
    // First I take the array of objects 
    // Then I keep the object name values 
    // Then I return the new array 

// Solution: 
function getNames(arr) {
  return arr.map(obj => obj.name)
}