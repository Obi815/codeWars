// Write a function that takes an array of numbers and returns a new array where every number has been doubled.

// What is the Input?
    // Array of numbers 

// What is the Output?
    // a new array with the numbers doubled

// What is the Method?
    //Mapping

// What is the Approach?
    // First I take the array of numbers, then I create a new array using .map method, 
    // then I change the numbers by doubling them and then I return the array 

// Solution: 
function doubleNumbers(numbers) {
  return numbers.map(num => num * 2)
}