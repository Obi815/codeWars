// Description:
// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

// My Solution:
Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(numbers => !values_list.includes(numbers))  
}

// Explanation:
// Array.prototype.remove_ is the function name, defined as a method on the Array prototype
// it equals a function with two parameters: integer_list (the array of integers to be filtered) and values_list (the array of values to be removed)
// It returns the result of filtering integer_list using the filter method
// integer_list.filter returns a new array containing only the elements that satisfy the condition specified in the callback function
// numbers => !values_list.includes(numbers) is the callback function used in filter, which checks if each number in integer_list is not included in values_list
// !values_list.includes(numbers) returns true if the current number is not found in values_list, meaning it should be included in the final result
