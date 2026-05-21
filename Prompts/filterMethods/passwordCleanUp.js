// Password Cleanup

// A website stores attempted passwords in an array.
//
// Some passwords are invalid and should be removed.
//
// A valid password:
// - must be a string
// - must be at least 8 characters long
// - cannot contain spaces
//
// After removing invalid passwords, return a new array where each
// password is replaced with its character count.


// Example

// Input:
// [
//   "hunter22",
//   "short",
//   "pass word",
//   404,
//   "dragonfire"
// ]

// Output:
// [8, 10]


// Explanation
// "hunter22"  -> 8 characters
// "dragonfire" -> 10 characters


// Method: 
    // Filter Mapping 

// Approach: 
    // First I take the passwords arry 
    // Then I filter to keep passwords that are:
        // Strings 
        // >= 8 characters 
        // have no spaces (!item.trim())
    // Then I Map to create a new array with the characters length

// Complete the function:

function passwordCleanup(passwords) {
    return passwords  
        .filter(password => typeof password === 'string' && !password.includes(' ') && password.length >= 8)
        .map(password => password = password.length)
}

