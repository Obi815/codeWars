// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

// What is the Input?
    // Array of Strings 

// What is the OutPut? 
    // A new array where the strings are converted to uppercase

// What is the Method? 
    // Mapping

// What is the approach? 
    // First I take the array of strings 
    // Then I use the map method to create a new array
    // Then I convert the strings to be uppercase
    // Then I return the new array

// Solution: 
function loudWords(words) {
  return words.map(word => word.toUpperCase())
}