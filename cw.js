//                                  //////////////////////////////////////////////////// NUMBER 1 /////////////////////////////
// Sum of Multiples
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers(positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7) ==> "INVALID"


// find all numbers divisible x up to y
// add all those numbers up excluding y
// return value

// function sumMul(n, m) {
//     let sum = 0

//     if ((n == 0 && m == 0) || (m < 0)) {
//         return "INVALID"
//     } else {
//         for (let i = n; i < m; i++) {
//             if (i % n === 0) {
//                 sum += i
//             }
//         }
//     }
//     return sum
// }

//                                                              Simpler Way to do it ////////////

// function sumMul(n, m) {
//     if (n >= m) return "INVALID";

//     let sum = 0;
//     for (let i = n; i < m; i += n) {
//         sum += i;
//     }
//     return sum;
// }
//////////////////////      COMPLETED //////////////////////////

////////////////////////                NUMBER 2 ////////////////////


// Given a random non-negative number, 
// you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
// }

// console.log(digitize([2345960]))

//////////////////////      COMPLETED //////////////////////////

/////////////////////////                NUMBER 3 ////////////////////
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// function findNeedle(haystack) {
//     // your code here
//     return `found the needle at position ${haystack.indexOf("needle")}`
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

// Learn this code as well. 
// const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

// Explanation:
// findNeedle is the function name
// haystack is the parameter                    
// => is the arrow function syntax that also returns the value
// haystack.indexOf('needle') finds the index of 'needle' in the haystack array

//////////////////////      COMPLETED //////////////////////////