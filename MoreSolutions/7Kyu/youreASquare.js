// Description:

// You like building blocks. You especially like building blocks that are squares. 
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! 
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! 
// That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; 
// in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// My Solution:
var isSquare = function(n){
  if(n < 0){return false};
  
  const squareRoot = Math.sqrt(n);
  return Number.isInteger(squareRoot);
}

// Explanation:
// isSquare is the function name
// n is the parameter representing the input integral number
// if(n < 0) checks if the number is negative, since negative numbers cannot be perfect squares, it returns false
// let squareRoot = Math.sqrt(n) calculates the square root of the input number
// Number. returns a Number value
// isInteger(squareRoot) checks if the square root is an integer, which would indicate that n is a perfect square, and returns true or false accordingly

// Alternative Solution:
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Explanation:
// isSquare is the function name
// n is the parameter representing the input integral number
// Math.sqrt(n) calculates the square root of the input number
// % 1 checks if the square root has a fractional part; if it does, it's not a perfect square, so it returns false. If it doesn't, it returns true.


// More concise Alternative Solution:
const isSquare = n => Number.isInteger(Math.sqrt(n));