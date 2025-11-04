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

// Explanation:
// sumMul is the function name
// n is the parameter representing the multiple
// m is the parameter representing the upper limit
// if (n >= m) return "INVALID"; checks if n is greater than or equal to m and returns "INVALID" if true
// for (let i = n; i < m; i += n) iterates through numbers starting from n up to m, incrementing by n each time
// i+= n adds n to i in each iteration
// sum += i adds the current value of i to sum

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

// Explanation:
// digitize is the function name
// n is the parameter representing the input number
// String(n) converts the number to a string
// split('') splits the string into an array of individual characters
// map(Number) converts each character back to a number
// reverse() reverses the order of the array elements

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
//     return `found the needle at position ${haystack.indexOf("needle")}`
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

//                  LEARN THIS CODE AS WELL
// const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

// Explanation:
// findNeedle is the function name
// haystack is the parameter                    
// => is the arrow function syntax that also returns the value
// haystack.indexOf('needle') finds the index of 'needle' in the haystack array

//////////////////////      COMPLETED //////////////////////////






/////////////////////////                NUMBER 4 ////////////////////
// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

// function howManyLightsabersDoYouOwn(name) {
//     return name === 'Zack' ? 18 : 0
// }

// LEARN THIS CODE AS WELL
// let howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0;

// Explanation:
// howManyLightsabersDoYouOwn() is function name
// name is the parameter
// => is the arrow function syntax that also returns the value
// name === 'Zach' ? 18 : 0 is a ternary operator that checks if name is equal to 'Zach'. If true, it returns 18, otherwise it returns 0.

//////////////////////      COMPLETED //////////////////////////





/////////////////////////                NUMBER 5 ////////////////////
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers) {
//     let numArr = numbers.split(' ').map(Number);
//     numArr.sort((a, b) => b - a)
//     return `${numArr[0]} ${numArr[numArr.length - 1]}`
// }

// explanation:
// highAndLow is the function name
// numbers is the parameter
// split(' ') splits the string into an array of substrings based on spaces
// map(Number) converts each substring into a number
// sort((a, b) => b - a) sorts the array in descending order
// `${numArr[0]} ${numArr[numArr.length - 1]}` uses template literals to return the highest and lowest numbers as a string

///////////////////////    COMPLETED //////////////////////////




/////////////////////////                NUMBER 6 ////////////////////
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     let classTotal = 0

//     classPoints.forEach((x, i) => {
//         classTotal += x
//     });

//     let classAvg = classTotal / classPoints.length

//     return yourPoints > classAvg ? true : false
// }
// Explanation:
// betterThanAverage is the function name
// classPoints is the parameter representing an array of class point scores
// yourPoints is the parameter representing your score
// forEach((x, i) => { classTotal += x }) iterates through each score in classPoints and adds it to classTotal
// classAvg calculates the average score of the class
// return yourPoints > classAvg ? true : false uses a ternary operator to return true if yourPoints is greater than classAvg, otherwise returns false

// LEARN THIS CODE AS WELL
// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
//   }
// Explanation:
// reduce((a, b) => a + b, 0) sums up all the scores in classPoints starting from an initial value of 0
// classPoints.length gets the number of scores in the classPoints array
// yourPoints > ... compares your score to the calculated average
// This code is more concise and achieves the same result as the previous implementation.
///////////////////////    COMPLETED //////////////////////////






/////////////////////////                NUMBER 7 ////////////////////
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// let litres = time => time > 0 ? Math.floor(time * 0.5) : 0

// Explanation:
// litres is the function name
// time is the parameter representing the time in hours
// => is the arrow function syntax that also returns the value
// time > 0 ? is the time is greater than 0 check
// Math.floor(time * 0.5) calculates the litres of water Nathan will drink and rounds it down to the nearest whole number
// : 0 returns 0 if time is not greater than 0
/////////////////////////      COMPLETED //////////////////////////





/////////////////////////                NUMBER 8 ////////////////////

// You ask a small girl "How old are you?" She always says "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, 
// the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// function getAge(inputString) {
//     return parseInt(inputString)
// }

// let getAge = inputString => parseInt(inputString)

// Explanation:
// getAge is the function name
// inputString is the parameter representing the input string
// parseInt(inputString) converts the first character of the input string to an integer and returns it
/////////////////////////      COMPLETED //////////////////////////





/////////////////////////                NUMBER 9 ////////////////////
// Write a function that merges two sorted arrays into a single one. 
// The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// function mergeArrays(a, b) {
//     // your code here
//     let mergedArr = [...new Set([...a, ...b])]
//     return mergedArr.sort((a, b) => a - b)
// }

// Explanation:
// mergeArrays is the function name
// a and b are the parameters representing the two input arrays
// [...a, ...b] uses the spread operator to combine both arrays into one
//      Example:
//      let a = [1, 2, 3];
//      let b = [3, 4, 5];
//      console.log([...a, ...b]); // Output: [1, 2, 3, 3, 4, 5]

// new Set(...) creates a Set object that automatically removes duplicate values
// ...and ...b are spread into the Set to ensure all elements from both arrays are included
// [...new Set(...)] converts the Set back into an array
// mergedArr.sort((a, b) => a - b) sorts the merged array in ascending order

////////////////////////      COMPLETED //////////////////////////





/////////////////////////                NUMBER 10 ////////////////////
// Create a function that takes string
// Print the reverse of that string to the console
// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

// Explanation:
// reverseString is the function name
// str is the parameter representing the input string
// split('') splits the string into an array of individual characters
// reverse() reverses the order of the array elements
// join('') joins the array elements back into a single string

////////////////////////      COMPLETED //////////////////////////




/////////////////////////                NUMBER 11 ////////////////////

// Create an array of numbers. Sum all of the numbers. Alert the sum (can you forEach or .reduce())

// .reduce() Method 

// let numbers = [10, 20, 30, 40]
// let sum = numbers.reduce((acc, curr) => (acc + curr), 0)
// alert(sum)

// Explanation:
// numbers is an array containing the numbers to be summed
// reduce((acc, curr) => (acc + curr), 0) iterates through the array, summing the elements starting from an initial value of 0
// acc represents the accumulated sum
// curr represents the current element being processed
// alert(sum) displays the sum in an alert dialog

// .forEach() Method

// let numbers = [10, 20, 30, 40]
// let sum = 0
// numbers.forEach(num => { 
//     sum += num
// })
// alert(sum)

// Explanation:
// numbers is an array containing the numbers to be summed
// sum is initialized to 0 to hold the total sum
// forEach(num => { sum += num }) iterates through each number in the array and adds it to sum
// num represents the current element being processed
// alert(sum) displays the sum in an alert dialog
// //////////////////////      COMPLETED //////////////////////////





////////////////////////                NUMBER 12 ////////////////////

// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// function Ghost() {
//     const colors = ["white", "yellow", "purple", "red"];
//     this.color = colors[Math.floor(Math.random() * colors.length)];
// }

// Explanation:
// The constructor name is Ghost
// colors is an array containing the possible colors for the ghost
// this.color assigns a random color from the colors array to the ghost instance
////////////////////////      COMPLETED //////////////////////////





////////////////////////                NUMBER 13 ////////////////////

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2(February), is part of the first quarter; month 6(June), is part of the second quarter; and month 11(November), is part of the fourth quarter.
//     Constraint:
// 1 <= month <= 12

// function quarterOf(month) {
//     if (month >= 1 && month <= 3) {
//         return 1
//     } else if (month >= 4 && month <= 6) {
//         return 2
//     } else if (month >= 7 && month <= 9) {
//         return 3
//     } else if (month >= 10 && month <= 12) {
//         return 4
//     }
// }

// Different Way to do it:

// const quarterOf = (month) => {
//     return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
//   }

// Explanation:
// quarterOf is the function name
// month is the parameter representing the month as an integer
// The function checks the value of month and returns the corresponding quarter number based on the defined ranges

// different Way to do it:

// const quarterOf = month => Math.ceil(month / 3);

// Explanation:
// quarterOf is the function name
// month is the parameter representing the month as an integer
// Math.ceil does the rounding up to the nearest integer
// month / 3 divides the month by 3 to determine the quarter

////////////////////////      COMPLETED //////////////////////////



////////////////////////                NUMBER 14 ////////////////////
// You get an array of numbers, return the sum of all of the positives ones.
// Example
// [1, -4, 7, 12] => 1 + 7 12 = 20

// function positiveSum(arr) {
//     let sum = 0
//     arr.forEach(num => {
//         if (num > 0) {
//             sum += num
//         }
//     });
//     return sum
// }

// Explanation:
// positiveSum is the function name
// arr is the parameter representing the array of numbers
// forEach(num => { ... }) iterates through each number in the array
// if (num > 0) checks if the current number is positive
// sum += num adds the positive number to the sum

// Different Way to do it:
// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }
// Explanation:
// positiveSum is the function name
// arr is the parameter representing the array of numbers
//reduce is used to accumulate the sum of positive numbers
// a represents the accumulated sum
// b represents the current number being processed
//(b > 0 ? b : 0) adds b to the sum if it is positive, otherwise adds 0
////////////////////////      COMPLETED //////////////////////////





////////////////////////                NUMBER 15 ////////////////////
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
// 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length === 0) {
//         return []
//     } else {
//         let countPositives = 0
//         let sumNegatives = 0

//         input.forEach(num => {
//             if (num > 0) {
//                 countPositives++
//             } else if (num < 0) {
//                 sumNegatives += num
//             }
//         });

//         return [countPositives, sumNegatives]
//     }
// }

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// Explanation:
// countPositivesSumNegatives is the function name
// input is the parameter representing the array of integers
// return input && input.length ? checks if input is not null and has elements
// filter(p => p > 0).length counts the positive numbers in the array
// filter(n => n < 0).reduce((a, b) => a + b, 0) sums the negative numbers in the array
// : [] returns an empty array if input is null or empty
////////////////////////      COMPLETED //////////////////////////



////////////////////////                NUMBER 16 ////////////////////
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

// let word = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']

// function validateHello(greetings) {
//     let lowerCaseGreeting = greetings.toLowerCase()

//     for (let i = 0; i < word.length; i++) {
//         if (lowerCaseGreeting.includes(word[i])) {
//             return true
//         }
//     }
//     return false
// }
// Explanation:
// validateHello is the function name
// greetings is the parameter representing the input string
// toLowerCase() converts the input string to lowercase for case-insensitive comparison
// for loop iterates through the array of greetings in different languages
// includes(word[i]) checks if the input string contains the current greeting
// return true returns true if a greeting is found
// return false returns false if no greetings are found
////////////////////////      COMPLETED //////////////////////////


////////////////////////                NUMBER 17 ////////////////////
// Frog RIVER ONE
// A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.
// You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.
// The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we need to have at least one leaf at each position).
// For example, you are given integer X = 5 and array A such that:
// A[0] = 1
// A[1] = 3
// A[2] = 1
// A[3] = 4
// A[4] = 2
// A[5] = 3
// A[6] = 5
// A[7] = 4
// In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river from 1 to 5.
// Write a function:

// function frogRiverOne(X, A) {
//     let positions = new Set()
//     for (let i = 0; i < A.length; i++) {
//         positions.add(A[i])
//         if (positions.size === X) {
//             return i
//         }
//     }
//     return -1
// }

// Explanation:
// frogRiverOne is the function name
// X is the parameter representing the target position across the river
// A is the parameter representing the array of falling leaves
// positions is a Set to track unique positions where leaves have fallen
// new Set() creates a new Set object that automatically handles duplicates
// for loop iterates through the array A
// positions.add(A[i]) adds the position of the falling leaf to the Set
// if (positions.size === X) checks if all positions from 1 to X have leaves
// return i returns the earliest time (index) when the frog can cross
// return -1 returns -1 if the frog cannot cross
////////////////////////      COMPLETED //////////////////////////



////////////////////////                NUMBER 18 ////////////////////

// Write a function that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// function solution(A) {
//     let numSet = new Set(A)
//     let smallestMissing = 1
//     while (numSet.has(smallestMissing)) {
//         smallestMissing++
//     }
//     return smallestMissing
// }
// Explanation:
// solution is the function name
// A is the parameter representing the array of integers
// numSet is a Set to track unique integers in the array    
// new Set(A) creates a new Set object containing the elements of array A
// smallestMissing is initialized to 1 to find the smallest missing positive integer
// while (numSet.has(smallestMissing)) checks if smallestMissing is in the Set
// smallestMissing++ increments smallestMissing to check the next integer
// return smallestMissing returns the smallest missing positive integer

///////////////////////      COMPLETED //////////////////////////

let cyclicRotation = (a, k) => {
    if (a.length === 0) return a;
    k = k % a.length; // Handle cases where k is greater than array length
    return a.slice(-k).concat(a.slice(0, a.length - k));
}
// Explanation:
// cyclicRotation is the function name
// a is the parameter representing the array to be rotated
// k is the parameter representing the number of rotations
// if (a.length === 0) return a; checks if the array is empty and returns it as is
// k = k % a.length; handles cases where k is greater than the array length
// a.slice(-k) gets the last k elements of the array
// a.slice(0, a.length - k) gets the elements from the start of the array up to the length minus k
// concat() combines the two slices to form the rotated array
///////////////////////      COMPLETED //////////////////////////



