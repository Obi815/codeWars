// Given an input of an array of digits, return the array with each digit incremented by its position in the array: 
// the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, 
// only the last digit of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2


// Input:
    // Array of digits

// Output: 
    // Array of digits incremented by position in array
    // if a double digit return the last digit of number

// Technique:
    // Mapping and looping 

// Approach: First I take the array of digits, then map them using a for loop to increment each number, 
// Then I check if number is greater than or equal to 10 and if so I return last digit of the number

function incrementer(nums) { 
    return nums.map((number, index) => {
        let sum = number + index + 1
        return sum = sum % 10
    })
}

// Simple Solution: 
const incrementer = nums => nums.map((n, i) => (n + i + 1) % 10)
// nums is parameter
// change array with map
// use n and i as parameters for the map method
// add n and i then add one because the array starts at 0 
// get remainder '%' 10 because 10 does not divide into smaller numbers fully 
//      getting the remaiders for every number