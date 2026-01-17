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
