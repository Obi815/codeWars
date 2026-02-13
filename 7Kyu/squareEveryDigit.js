// Description:

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// Solution:
function squareDigits(num){
    return Number(String(num).split('').map(n => Math.pow(n, 2)).join(''));
}

// Explanation:
// squareDigits is the function name
// num is the parameter representing the input integer
// Number() converts the final result back to an integer
// String(num) converts the input number to a string so we can manipulate it
// split('') splits the string into an array of individual characters (digits)
// map(n => Math.pow(n, 2)) applies the square operation to each digit in the array
// join('') concatenates the squared digits back into a single string


// Alternative Solution:
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

// Explanation:
// squareDigits is the function name
// num is the parameter representing the input integer
// + converts the final result back to an integer --> this is a shorthand for Number()
// num.toString() converts the input number to a string so we can manipulate it
// split('') splits the string into an array of individual characters (digits)
// map(i => i*i) applies the square operation to each digit in the array
// join('') concatenates the squared digits back into a single string