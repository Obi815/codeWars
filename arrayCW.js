// Square(n) Sum
// Complete the square sum function so that it squares 
// each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Solution 1: 
function squareSum(numbers){
  let sum = 0
  numbers.forEach((x,i) => {
    sum = sum + Math.pow(x, 2)
  })
  return sum 
}

// Explanation:
// 1. We define a function squareSum that takes an array of numbers as input.
// 2. We initialize a variable sum to 0 to keep track of the total sum of squares.
// 3. We use the forEach method to iterate over each number in the array.
// 4. For each number, we calculate its square using Math.pow(x, 2) and add it to sum.
// 5. Finally, we return the total sum of squares.

// Solution 2:
function squareSum(numbers){
  return numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0)
}

// Explanation:
// 1. We define a function squareSum that takes an array of numbers as input.
// 2. We use the reduce method to iterate over the array and accumulate the sum of squares.
// 3. The accumulator acc starts at 0, and for each number curr, we add its square to acc.
// 4. Finally, we return the total sum of squares.





// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// Solution 1:
function maps(x){
  return x.map(n => n * 2);
}
// Explanation:
// 1. We define a function maps that takes an array of integers x as input.
// 2. We use the map method to create a new array by multiplying each element n by 2.
// 3. The resulting array is returned.




// I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, 
// saying each of the following phrases each time a petal was torn:

// 1."I love you"
// 2."a little"
// 3."a lot"
// 4."passionately"
// 5."madly"
// 6."not at all"
// If there are more than 6 petals, 
// you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, 
// dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls 
// would say at the last petal for a flower of a given number of petals. 
// The number of petals is always greater than 0.

// Solution:
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}

// Explanation:
// 1. We define an array phrases that contains the six phrases in order.
// 2. We define a function howMuchILoveYou that takes an integer n (number of petals) as input.
// 3. We calculate the index of the phrase to return using (n - 1) % phrases.length.
//    - (n - 1) is used to convert the 1-based petal count to a 0-based index.
//    - The modulo operator (%) ensures that if n exceeds the length of the phrases array, 
//      it wraps around to the beginning.
// 4. Finally, we return the phrase at the calculated index from the phrases array.









// The Highest Profit Wins!
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. 
// Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
// Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length.
// Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

// Explanation:
// 1. We define a function minMax that takes an array arr as input.
// 2. We use the Math.min function 
//   along with the spread operator (...) that expands the array into individual arguments to find the minimum value in the array.
// 3. Similarly, we use Math.max with the spread operator to find the maximum value in the array.
// 4. We return an array containing both the minimum and maximum values.








// Removes the minimum 
// The museum of incredibly dull things wants to get rid of some exhibits. 
// Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. 
// She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, 
// so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with the lowest index. 
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


// Solution:
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// Explanation:
// 1. We define a function removeSmallest that takes an array of integers numbers as input.
// 2. We find the index of the smallest value in the array using Math.min and indexOf.
// 3. We create a new array by concatenating two slices of the original array:
//    - The first slice contains all elements before the index of the smallest value.
//    - The second slice contains all elements after the index of the smallest value.
// 4. We use the spread operator (...) to combine these two slices into a new array.
// 5. Finally, we return the new array, which excludes the smallest value.

// Solution 2:
function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}
// Explanation:
// 1. We define a function removeSmallest that takes an array of integers numbers as input.
// 2. We find the smallest value in the array using Math.min.apply.
// 3. We use the filter method to create a new array that excludes the first occurrence of the smallest value.
//    - The filter callback checks if the current index idx is not equal to the index of the smallest value (arr.indexOf(min)).
// 4. Finally, we return the new array, which excludes the smallest value.






// Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

// Explanation:
// 1. We define a function number that takes an array of strings as input.
// 2. We use the map method to create a new array by transforming each line.
// 3. The map callback function takes two parameters: line (the current string) and index (the current index).
// 4. For each line, we return a new string that combines the line number (index + 1) with the line itself, formatted as "n: string".
// 5. Finally, we return the new array with the numbered lines.


// Solution 2:
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
// Explanation:
// 1. We define a function number using arrow function syntax that takes an array of strings a as input.
// 2. We use the map method to create a new array by transforming each line.
// 3. The map callback function takes two parameters: v (the current string) and i (the current index).
// 4. For each line, we return a new string using template literals that combines the line number (i + 1) with the line itself, formatted as "n: string".
// 5. Finally, we return the new array with the numbered lines.
