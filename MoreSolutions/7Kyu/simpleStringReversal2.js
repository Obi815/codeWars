// Description: 
// In this Kata, you will be given a string and two indexes (a and b). 
// Your task is to reverse the portion of that string between those two indices inclusive.

// str = "codewars", a = 1, b = 5 --> "cawedors"
// str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"
// Input will be lowercase and uppercase letters only.

// The first index a will always be smaller than the string length;
//  the second index b can be greater than the string length. More examples in the test cases. Good luck!

const solve = (string, a, b) => string.slice(0, a) + 
    string.slice(a, b + 1).split('').reverse().join('') + string.slice(b + 1);  

// Explanation:
// 1. solve is a function that takes in three parameters: string, a, and b.
// 2. Function returns a new string that is a combination of three parts:
//   a. The first part is the string.slice(0, a) the removes the characters from the start of the string up to index a (exclusive).
// The second string.splice(a, b + 1) takes the portion of the string from index a to index b (inclusive) 
//  and splits it into an array of characters, reverses the array, and then joins it back into a string.
//  c. The third part is the string.slice(b + 1) which removes the characters from index b + 1 to the end of the string.
