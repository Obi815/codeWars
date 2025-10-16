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
//     // your code here
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



