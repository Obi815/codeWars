// Rick wants a faster way to get the product of the largest pair in an array. 
// Your task is to create a performant solution 
// to find the product of the largest two integers in a unique array of positive numbers.

// All inputs will be valid.
// Rick is only interested in solutions that are faster than his, which has a running time of O(n log n).
// [2, 6, 3]                      => 18 = 6 * 3
// [2, 1, 5, 0, 4, 3]             => 20 = 5 * 4
// [7, 8, 9]                      => 72 = 8 * 9
// [33, 231, 454, 11, 9, 99, 57]  => 104874 = 231 * 454


// Solution: 
function maxProduct(a) {
    let largestVal = a.splice((a.indexOf(Math.max(...a))),1)
    let secondVal = a.splice((a.indexOf(Math.max(...a))),1)
    return largestVal*secondVal
}


// Explanation:
// We call a function called maxProduct
// create a variable called largestVal 
// a.splice() removes the the value we want to find
// we use a.indexOf() to find the index of the largest value in the array and remove it from the array
// (...a) is used to spread the array so that we can use Math.max() to find the largest value in the array
// ,1 is used to remove only one element from the array
// we do the same thing to find the second largest value in the array and store it in a variable called secondVal
// finally we return the product of largestVal and secondVal 
