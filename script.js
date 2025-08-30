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


// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order.
//  Your task is to merge them into a single array, ensuring that:
// The resulting array is sorted in ascending order.
// Any duplicate values are removed, so each integer appears only once.
// If both input arrays are empty, return an empty array.
// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// function mergerSortedArrays(arr1, arr2) {
//     const combined = arr1.concat(arr2);

//     const uniqueSet = new Set(combined);

//     return Array.from(uniqueSet).sort((a, b) => a - b);
// }

// console.log(mergerSortedArrays)

// /////// COMPLETED ///////

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


// function reverse(sentence) {
//     return sentence.split('').map(function (word) {
//         return word.split('').reverse().join('');
//     }).join('');
// }

// console.log(reverse('!dlrow olleh'))


//// NOT FINISHED ////

// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// function sumArray(arr) {
//     let sum = 0
//     if (arr.length < 0) {
//         return 0
//     } else {
//         arr.forEach((x, i) => {
//             sum += x
//         })

//     }
//     return sum
// }

// sumArray([10, 3.5, 30])

/////////// Completed ///////

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function sum2Arrays(arr1, arr2) {
//     let sum = 0;
//     arr1.forEach((x, i) => {
//         sum += x
//     });
//     arr2.forEach((x, i) => {
//         sum += x
//     });
//     return sum
// }

// sum2Arrays([10, 10, 10], [5, 5, 2])

// /////// Completed

// Find the mean (average) of a list of numbers in an array.

// function mean(arr) {
//     let sum = 0
//     arr.forEach((x) => {
//         sum += x
//     });

//     return sum / arr.length
// }

/////////  completed ///////////////


function friendOrFOe(arr) {
    return arr.filter((x, i) => x.length === 4)
}
console.log(friendOrFOe(["Ryan", "Kieran", "Jason", "Yous"]))