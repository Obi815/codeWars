// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

//Psuedo Code:
function unusedDigits(arr){
    // Filter through the digits given
        // Because they are varrying number of INT arguments use the rest parameter
        // .join() them together to get numbers as a string

    // Compare the ten numbers [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] to the digits given

    // return digits that where not in the digits given 
    
}

const unusedDigits = (...arr) => { // sets various args in array
    
    let digits = arr.join() // .join() adds comma inbetween numbers

    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter(number => !digits.includes(number)) //for each digit number, check if its absent from the digits string
    .join('') // .join('') -> [0,1,2,3] to "0123"
}