// Task
// Given an array/list of integers, find the maximum sum of 3 DISTINCT array elements.

// Notes :
// array size is at least 3 .
// array elements can be zero or negative
// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples
// maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Best triplet = {6,8,3}, its sum is 17

// maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Best triplet = {8, 6, 4} , its sum is 18.

// maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
// Best triplet = {12 , 29 , 0} , its sum is 41


// What is the Input?
    // Array of number or a list of integers

// What is the Output?
    // The sum of the 3 largerst unique numbers (no duplicates)

// What METHOD could you use?
    // Map Method
    // Sort Method
    // new Set Method
    // Filter Method

// What is the Approach?
    // First I take the array of integers and then use the new Set method 
    // to keep the unique intergers. Then I sort the array and add the largerst numbers together and return sum

// Solution:
function maxTriSum(numbers){
    let unique = new Set(numbers)
    nums = [...unique].sort((a, b) => b - a)
    return nums[0] + nums[1] + nums[2]
}