//Description:

// Your task is to make a function that can take any non-negative integer as an argument and r
// eturn it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Solution:

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

// Explanation:
// descendingOrder is the function name
// n is the parameter representing the input non-negative integer
// parseInt() converts the final result back to an integer
// String(n) converts the input number to a string so we can manipulate it
// split('') splits the string into an array of individual characters (digits)
// sort() sorts the array in ascending order
// reverse() reverses the sorted array to get descending order
// join('') concatenates the sorted digits back into a single string
