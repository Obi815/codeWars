// A movie theater keeps a list of seat numbers that were reserved online.

// Unfortunately, the system also collected some invalid entries from bots and broken forms.

// Your task is to keep only the valid seat numbers.

// Rules

// A valid seat number:

// * must be a number
// * must be greater than 0

// Example

// Input: [12, -3, "A7", 25, null, 0, 8]

// Output:[12, 25, 8]

// Write a function that returns only the valid seat numbers.

// Restriction:
// * Do not use loops.

// Psuedo Code 

// Input: 
    // Take a list of values

// Output: 
    // return a list of valid values
        // Only intergers that are greater than 0 are valid 

// Technique: 
    // Filtering 

// Approach: 
    // First I take a list of values 
    // Then I filter to keep only values that check the constraint
    // Then I return the list of values 

function validSeats(seats) {
    return seats.filter(value => typeof value === 'number' && value > 0)
}