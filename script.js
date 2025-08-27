// Summation
// Write a program that finds the summation of every number from 1 to num (both inclusive). 
// The number will always be a positive integer greater than 0. 
// Your function only needs to return the result, 
// what is shown between parentheses in the example below
// is how you reach that result and it's not part of it, 
// see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// function summation(n1) {
//     if (n1 > 0) {
//         let sum = 0

//         for (let i = 1; i <= n1; i++) {
//             sum += i
//             // console.log(sum)
//         }
//         return sum
//     }
// }
// console.log(summation(8))

///////////////// COMPLETED //////////////////////

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// function findAverage(array) {
//     if (array.length == 0) {
//         return 0;
//     }
//     let result = 0;
//     for (let i of array) {
//         result += i;
//     }
//     return result / array.length;
// }

////////////      TRY AGAIN!!! ////////////

// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.


// function numberToPower(number, power) {
//     let sum = 1
//     for (let i = 0; i < power; i++) {
//         sum *= number
//     }
//     return sum
// }
// raisePower(10, 6)


////////////////////////////// COMPLETED ///////////////////////


// /////// copmpleted just for github

document.querySelector('h1')
