// Params: Array of integers (positive & negative) 
// Return: the numbers which are mutliples of their index 
​
// Examples: 
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
//  [22 / 0 = 0] - Remove
//  [-6 / 1 = -6] - Keep
//  [32 / 2 = 16] - Remove
​
// Pseudo: Check every number in the array and find if it is a multiple of it own index
//  Filter method to keep the numbers that pass the check: (value, index) params 
​
function multipleOfIndex(array) {
  return array.filter((number, index) => number % index === 0 || number === index)
}