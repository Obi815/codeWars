// Employee Access Codes

// A company stores employee access codes in an array.
//
// Each valid code follows these rules:
// - must be a string
// - must start with "EMP"
// - must be exactly 8 characters long
//
// Return all valid access codes in lowercase.
//
// The order of the codes must not change.


// Example

// Input:
// [
//   "EMP12345",
//   "emp99999",
//   "EMP12",
//   404,
//   "EMP77777"
// ]

// Output:
// [
//   "emp12345",
//   "emp77777"
// ]


// Method
    // Filtering then Mapping 

// Approach
    // First I take the array of codes 
    // Then check if the code starts with 'EMP'
    // Then map a new array with codes changed the lower case 
    // Then return it 

// Write a function:

function accessCodes(codes) {
    return codes
        .filter(code => typeof code === 'string' && code.startsWith('EMP') && code.length === 8)
        .map(code => code.toLowerCase())
}