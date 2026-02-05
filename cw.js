//                                  //////////////////////////////////////////////////// NUMBER 1  SUM OF MULTIPLES   /////////////////////////////
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







////////////////////////                NUMBER 2 Convert number to reversed array of digits  ////////////////////


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






/////////////////////////                NUMBER 3   NEEDLE IN THE HAYSTACK ////////////////////
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input-- > Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]-- > "found the needle at position 5"
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






/////////////////////////                NUMBER 4  How many lightsabers do you own?////////////////////
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





/////////////////////////                NUMBER 5 -  HIGHEST AND LOWERST        ////////////////////
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






/////////////////////////                NUMBER 6 - HOW GOOD ARE YOU REALLY      ////////////////////
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






/////////////////////////                NUMBER 7   - KEEP HYDRATED    ////////////////////
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





/////////////////////////                NUMBER 8   PARSE NICE INT FROM CHAR PROBLEM ////////////////////

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





/////////////////////////                NUMBER 9 Merging sorted integer arrays (without duplicates) ////////////////////
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





/////////////////////////                NUMBER 10  REVERSED STRINGS  ////////////////////
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





////////////////////////                NUMBER 12  Color Ghost ////////////////////

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
// Math.random() generates a random number between 0 and 1
// Math.floor(Math.random() * colors.length) generates a random index to select a color from the colors array
////////////////////////      COMPLETED //////////////////////////





////////////////////////                NUMBER 13 QUATER OF THE YEAR ////////////////////

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



////////////////////////                NUMBER 14 SUM OF POSITIVE ////////////////////
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
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// function plural(n) {
//     return n !== 1
// }

// Explanation:
// plural is the function name
// n is the parameter representing the number
// return n !== 1 checks if n is not equal to 1 and returns true if so, otherwise returns false
////////////////////////      COMPLETED //////////////////////////







////////////////////////                NUMBER 18 ////////////////////
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, 
// even if there are more than one with the same value. Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) 
// is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {
//     if (array == null || array.length <= 2) {
//         return 0
//     } else {
//         let sortedArr = array.sort((a, b) => a - b)
//         let sum = 0
//         for (let i = 1; i < sortedArr.length - 1; i++) {
//             sum += sortedArr[i]
//         }
//         return sum
//     }
// }

// Explanation:
// sumArray is the function name
// array is the parameter representing the input array
// if (array == null || array.length <= 2) checks if the array is null or has 2 or fewer elements and returns 0 if true
// sort((a, b) => a - b) sorts the array in ascending order
// for loop iterates through the sorted array, starting from the second element and ending at the second-to-last element
// sum += sortedArr[i] adds each element in the specified range to the sum
////////////////////////      COMPLETED //////////////////////////







////////////////////////                NUMBER 19 ////////////////////
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, 
// albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated

// function gooseFilter(birds) {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(bird => !geese.includes(bird));
// }
// Explanation: 
// gooseFilter is the function name
// birds is the parameter representing the input array of bird names
// geese is an array containing the names of geese to be filtered out
// return birds.filter is used to create a new array containing only the elements that pass the test
// bird is the current element being processed in the array
// !geese.includes(bird) checks if the current bird is not included in the geese array
////////////////////////      COMPLETED //////////////////////////






////////////////////////                NUMBER 20 ////////////////////
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

// function multiTable(number) {
//     let result = ''
//     for (let i = 1; i <= 10; i++) {
//         result += `${i} * ${number} = ${i * number}`
//         if (i < 10) {
//             result += '\n'
//         }
//     }
//     return result
// }
// Explanation:
// multiTable is the function name
// number is the parameter representing the input number
// result is initialized as an empty string to hold the multiplication table
// for loop iterates from 1 to 10
// result += `${i} * ${number} = ${i * number}` appends the current multiplication line to the result string
// if (i < 10) { result += '\n' } adds a newline character after each line except the last one
// return result returns the final multiplication table string
////////////////////////      COMPLETED //////////////////////////






////////////////////////                NUMBER 21 ////////////////////
// HELP! Jason can't find his textbook! It is two days before the test date,
// and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) 
// full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

// function sorter(textbooks) {
//     return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
//                                     a.toLowerCase() < b.toLowerCase() ? -1  : 0)
//   }

// Explanation:
// sorter is the function name
// textbooks is the parameter representing the array of textbook subjects
// sort((a, b) => ...) sorts the textbooks array
// a and b are the current elements being compared during sorting
// toLowerCase() converts the subjects to lowercase for case-insensitive comparison
// The ternary operator compares a and b and returns 1, -1, or 0 based on their order
////////////////////////      COMPLETED //////////////////////////




////////////////////////                NUMBER 22 ////////////////////
// Given an array of integers as 
// strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x) {
//     return x.reduce((s, n) => s + Number(n), 0)
// }
// Explanation:
// sumMix is the function name
// x is the parameter representing the array of integers as strings and numbers
// reduce((s, n) => s + Number(n), 0) iterates through the array, converting each element to a number and summing them up starting from an initial value of 0
// s represents the accumulated sum
// n represents the current element being processed
////////////////////////      COMPLETED //////////////////////////






////////////////////////                NUMBER 23 ////////////////////
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), 
// but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), 
// populate an array with all numbers up to and including that number, but excluding zero.

// function monkeyCount(n) {
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         arr.push[i]
//     }
//     return arr
// }
// Explanation:
// monkeyCount is the function name
// n is the parameter representing the number of monkeys
// arr is initialized as an empty array to hold the monkey counts
// for loop iterates from 1 to n
// arr.push(i) adds the current number to the arr array
// return arr returns the final array of monkey counts

////////////////////////      COMPLETED //////////////////////////




////////////////////////                NUMBER 24 ////////////////////
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

// function countBy(x, n) {
//     var z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }
// Explanation:
// countBy is the function name
// x is the parameter representing the base number
// n is the parameter representing the number of multiples to generate
// z is initialized as an empty array to hold the multiples
// for loop iterates from 1 to n
// z.push(x * i) adds the current multiple of x to the z array
// return z returns the final array of multiples
////////////////////////      COMPLETED //////////////////////////








////////////////////////                NUMBER 25 ////////////////////
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// function spEng(sentence){
//     return sentence.toLowerCase().includes('english')
//   }

// Explanation:
// spEng is the function name
// sentence is the parameter representing the input string
// toLowerCase() converts the input string to lowercase for case-insensitive comparison
// includes('english') checks if the input string contains the word 'english'
////////////////////////      COMPLETED //////////////////////////






////////////////////////                NUMBER 26  Cat Dog Years  ////////////////////
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:
// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// var humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
//   }

// Explanation:
// humanYearsCatYearsDogYears is the function name
// y is the parameter representing the human years
// The function checks the value of y and returns the corresponding 
// ages in an array based on the defined rules for cat and dog years
////////////////////////      COMPLETED //////////////////////////



 ////////////////////////                NUMBER 27  Find the smallest integer in the array  ////////////////////
// class Hero {
//   // add default values here
//     constructor(name, position, health, damage) {
//       this.name = name;
//       this.position = position;
//       this.health = health;
//       this.damage = damage;
//       this.experience = 0
        
//     }
// }


////////////////////////                NUMBER 27  Band Name Generator ////////////////////

// My friend wants a new band name for her band. 
// She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, 
// she likes to repeat the noun twice and connect them together with the first and last letter, 
// combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, 
// and returns her preferred band name written as a string.

// function bandNameGenerator(str) {
//   if(str[0] != str.slice(-1)){
//     return 'The' + ' ' + str[0].toUpperCase() + str.slice(1)
//   }
//   else{
//     return str[0].toUpperCase() + str.slice(1).repeat(2)
//   }
// }

// Explanation:
// bandNameGenerator is the function name
// str is the parameter representing the input noun
// str[0] accesses the first character of the string
// str.slice(-1) accesses the last character of the string
// if(str[0] != str.slice(-1)) checks if the first and last characters are different
// 'The' + ' ' + str[0].toUpperCase() + str.slice(1) constructs the band name with "The" and capitalizes the first letter of the noun
// str[0].toUpperCase() capitalizes the first letter of the noun
// str.slice(1) gets the rest of the noun after the first letter
// str[0].toUpperCase() + str.slice(1).repeat(2) constructs the band name by repeating the noun when the first and last letters are the same

//Simple way to do it:
// function bandNameGenerator(str) {
//   return str.slice(0,1) == str.slice(-1) ? str.slice(0,1).toUpperCase() + 
//   str.slice(1) + str.slice(1) : "The " + str.slice(0,1).toUpperCase() + str.slice(1);
// }

// Explanation:
// bandNameGenerator is the function name
// str is the parameter representing the input noun
// str.slice(0,1) accesses the first character of the string
// str.slice(-1) accesses the last character of the string
// ? is the ternary operator that checks if the first and last characters are the same
// str.slice(0,1).toUpperCase() + str.slice(1) + str.slice(1) constructs the band name by repeating the noun when the first and last letters are the same
// "The " + str.slice(0,1).toUpperCase() + str.slice(1) constructs the band name with "The" and capitalizes the first letter of the noun when the first and last letters are different
////////////////////////      COMPLETED //////////////////////////





////////////////////////                NUMBER 28  Double Trouble ////////////////////
// Given an array of integers (x), and a target (t), 
// you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

// Example:

// x = [1, 2, 3, 4, 5]
// t = 3

// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

// [1, 3, 4, 5]

// Work through the array from left to right.

// Return the resulting array.

// function trouble(x, t){
//   for(var i=0; i<x.length; i++) {
//     if(x[i]+x[i+1]===t) {
//       x.splice(i+1,1);
//       i--;
//     }
//   }
  
//   return x;
// }

// Explanation:
// trouble is the function name
// x is the parameter representing the array of integers
// t is the parameter representing the target sum
// for loop iterates through the array from left to right
// if(x[i]+x[i+1]===t) checks if the sum of the current element and the next element equals t
// x.splice(i+1,1) removes the second element of the pair that sums to t
// i-- decrements the index to recheck the current position after removal
// return x returns the modified array after processing
////////////////////////      COMPLETED //////////////////////////






//////////////// //////                NUMBER 29  Are You playing Banjo? ////////////////////
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// function areYouPlayingBanjo(name) {
//   if(name.toLowerCase().startsWith("r")){
//   return `${name} plays banjo`
//  } else {
//  return `${name} does not play banjo`
//  }}
// Explanation:
// areYouPlayingBanjo is the function name
// name is the parameter representing the input name
// toLowerCase() converts the name to lowercase for case-insensitive comparison
// startsWith("r") checks if the name starts with the letter "r"
// `${name} plays banjo` constructs the return string if the condition is true
// `${name} does not play banjo` constructs the return string if the condition is false

// Simple way to do it:
// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }
// Explanation:
// areYouPlayingBanjo is the function name
// name is the parameter representing the input name
// name[0].toLowerCase() accesses the first character of the name and converts it to lowercase
// == 'r' checks if the first character is equal to 'r'
// ? ' plays' : ' does not play' uses a ternary operator to choose the appropriate string based on the condition
// The final return statement constructs the complete return string based on whether the name starts with 'r' or not
////////////////////////      COMPLETED //////////////////////////




//////////////////// Abbreviate a Two Word Name ////////////////////////
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
// Explanation:
// abbrevName is the function name
// name is the parameter representing the input name
// split(" ") splits the name into an array of words based on the space character
// nameArray[0][0] accesses the first letter of the first word
// nameArray[1][0] accesses the first letter of the second word
// + "." + concatenates the two initials with a dot in between
// toUpperCase() converts the resulting string to uppercase
////////////////////////      COMPLETED //////////////////////////



////////////// If you can't sleep, just count sheep!! ////////////////////////
// Given a non-negative integer, 3 for example, 
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// var countSheep = function (num){
//   let str = "";
//   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//   return str;
// }
// Explanation:
// countSheep is the function name
// num is the parameter representing the non-negative integer
// str is initialized as an empty string to hold the murmur
// for loop iterates from 1 to num
// str+= `${i} sheep...` appends the current count of sheep to the str string
// return str returns the final murmur string
////////////////////////      COMPLETED //////////////////////////




//////////////// Total amount of points ////////////////////////
// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. 
// Each match is represented by a string in the format "x:y", where x is our team's score and y is the opponent's score.
// For example: ["3:1", "2:2", "0:1", ...] 
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the total number of points our team has earned.

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }
// Explanation:
// points is the function name
// games is the parameter representing the collection of match results
// return games.reduce(...) iterates through the games array, calculating the total points
// => is the arrow function syntax that also returns the value
// parseInt(current[0]) converts the first character of the current match result to an integer (our team's score)
// parseInt(current[2]) converts the third character of the current match result to an integer (opponent's score)
// x > y ? 3 : x === y ? 1 : 0 uses a ternary operator to determine the points based on the scores
// output + value accumulates the total points
// 0 is the initial value for the accumulation
////////////////////////      COMPLETED //////////////////////////








/////////////////// Vowel Count ////////////////////////
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
// Explanation:
// getCount is the function name
// str is the parameter representing the input string
// match(/[aeiou]/ig) uses a regular expression to find all vowels in the string, ignoring case
// || [] ensures that if no vowels are found, an empty array is returned to avoid errors
// .length counts the number of vowels found in the string


// Solution 2
function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
// Explanation:
// getCount is the function name
// str is the parameter representing the input string
// split('') splits the string into an array of individual characters
// filter(c => "aeiouAUEIOU" fileters the array to include only vowels (both lowercase and uppercase
// "aeiouAEIOU " is a string containing all the vowels
// .includes(c) checks if the current character is a vowel
// .length counts the number of vowels found in the string
////////////////////////      COMPLETED //////////////////////////







///////////////// Disemvowel Trolls ////////////////////////
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
// neutralizing the threat.
// Your task is to write a function that takes a string and returns a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
// Explanation:
// disemvowel is the function name
// str is the parameter representing the input string
// replace(/[aeiou]/gi, '') uses a regular expression to find all vowels in the string 
// (both lowercase and uppercase) and replaces them with an empty string, effectively removing them



const vowels = 'aeiou';
function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}
// Explanation:
// disemvowel is the function name
// str is the parameter representing the input string
// split('') splits the string into an array of individual characters
// filter(letter => !vowels.includes(letter.toLowerCase())) filters the array to exclude vowels (both lowercase and uppercase)
// join('') joins the filtered array back into a single string without vowels
////////////////////////      COMPLETED //////////////////////////





///////////////// Getr the middle character ////////////////////////
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
// Explanation:
// getMiddle is the function name
// s is the parameter representing the input string
// substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1) extracts the middle character(s) based on the length of the string
// Math.ceil(s.length / 2 - 1) calculates the starting index for extraction
// s.length % 2 === 0 ? 2 : 1 determines the number of characters to extract (2 for even length, 1 for odd length)

// Alternative Solution:
function getMiddle(s){
  return s.slice((s.length-1)/2, s.length/2+1);
}
// Explanation:
// getMiddle is the function name
// s is the parameter representing the input string
// slice((s.length-1)/2, s.length/2+1) extracts the middle character(s) based on the length of the string
// (s.length-1)/2 calculates the starting index for extraction
// s.length/2+1 calculates the ending index for extraction
////////////////////////      COMPLETED //////////////////////////

