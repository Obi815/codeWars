//Params: Array of whole numbers 
//Return: product of all numbers. (Total of all numbers multiplied)
​
//Examples:
  //[1,2,3,4] -> 24
  // [0,12,34,8] -> 0
  //[2,2,2,2,2] -> 32
function grow(x) {
  //take array multiply multiple each number to each other 
  //return product 
  return x.reduce((acc, curr) => acc * curr, 1)
}