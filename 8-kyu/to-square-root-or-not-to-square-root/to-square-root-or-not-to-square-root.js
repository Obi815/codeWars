// Params: integer array 
// Returns: A new array with a number's square root if possible or the numbers squared
​
// Examples: 
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// [10, 4, 3, 9, 1, 16] -> [100, 2, 9, 3, 1, 4]
// [64, 7, 49, 25, 5] -> [8, 49, 7, 5, 25]
​
// Pseudo:
// First we take the integer array, use map function to create and manipulate new array 
// Then we set a check for each number
// Check: if number has a square root whole number then use it if not square it 
​
​
​
function squareOrSquareRoot(array) {
  return array.map(number => Math.sqrt(number) % 1 == 0 ? Math.sqrt(number) : number * number) 
}