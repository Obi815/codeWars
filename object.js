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




////////////////////////                NUMBER 19 ////////////////////

// let cyclicRotation = (a, k) => {
//     if (a.length === 0) return a;
//     k = k % a.length; // Handle cases where k is greater than array length
//     return a.slice(-k).concat(a.slice(0, a.length - k));
// }
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




////////////////////////                NUMBER 20 ////////////////////
// Write a function that returns how many even numbers are in a given array of integers.

// function checkEven(arr) {
//     let count = 0
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             count++
//         }
//     }
//     return count
// }

// Explanation:
// checkEven is the function name
// arr is the parameter representing the array of integers
// count is initialized to 0 to keep track of the number of even integers
// for (let num of arr) iterates through each number in the array
// if (num % 2 === 0) checks if the current number is even
// count++ increments the count if the number is even
// return count returns the total count of even integers in the array
///////////////////////      COMPLETED //////////////////////////






////////////////////////                NUMBER 21 ////////////////////
// You have an array A of integers.
// Split it at every position P (1 ≤ P < N) into two parts:

// function solution(A) {
//     let totalSum = A.reduce((acc, curr) => acc + curr, 0);
//     let leftSum = 0;
//     let minDiff = Infinity;
//     for (let i = 0; i < A.length - 1; i++) {
//         leftSum += A[i];
//         let rightSum = totalSum - leftSum;
//         let diff = Math.abs(leftSum - rightSum);
//         if (diff < minDiff) {
//             minDiff = diff;
//         }
//     }
//     return minDiff;
// }
// Explanation:
// solution is the function name
// A is the parameter representing the array of integers
// totalSum calculates the total sum of the array using reduce
// leftSum initializes the sum of the left part of the array
// minDiff initializes the minimum difference to Infinity
// for loop iterates through the array up to the second-to-last element
// leftSum += A[i]; adds the current element to the left sum
// rightSum calculates the sum of the right part of the array
// diff calculates the absolute difference between leftSum and rightSum
// if (diff < minDiff) checks if the current difference is less than the minimum difference found so far
// minDiff = diff; updates minDiff if a smaller difference is found
// return minDiff returns the minimum difference found
///////////////////////      COMPLETED //////////////////////////





////////////////////////                NUMBER 22 ////////////////////

// Write a function that takes an array of numbers and returns an array of running sums.

// function runningSum(nums) {
//     let newArr = []
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         newArr.push(sum)
//     }
//     return newArr
// }

// Explanation:
// runningSum is the function name
// nums is the parameter representing the array of numbers
// newArr initializes an empty array to store the running sums
// sum initializes the sum to 0
// for loop iterates through each number in the nums array
// sum += nums[i] adds the current number to the sum
// newArr.push(sum) adds the current sum to the newArr array
// return newArr returns the array of running sums
///////////////////////      COMPLETED //////////////////////////

// let solution = (A) => {
//     let totalSum = A.reduce((acc, curr) => acc + curr, 0);
//     let leftSum = 0;
//     let minDiff = Infinity;
//     for (let i = 0; i < A.length - 1; i++) {
//         leftSum += A[i];
//         let rightSum = totalSum - leftSum;
//         let diff = Math.abs(leftSum - rightSum)
//         if (diff < minDiff) {
//             minDiff = diff;
//         }
//     }
//     return minDiff;
// }

// ADD 
// Sum without highest and lowest number

// Filter out the geese

