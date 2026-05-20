// VIP Club Entry

// A nightclub is reviewing tonight’s guest list.

// Unfortunately, some fake entries were added to the system.
// Your task is to keep only valid VIP names.


// Rules

// A valid VIP guest:
// - must be a string
// - must be longer than 3 characters
// - cannot contain numbers


// Example

// Input:
// ["Mike", "Al", "J4mes", 42, "Sofia", "Li"]

// Output:
// ["Mike", "Sofia"]


//Approach 
    // First I take the list of names 
    // check each string to see if it contains a number 
    // then check if string is longer than 3characters 
    // return string

// Write a function:

function validGuests(guests) {
    return guests
            .filter(name => typeof name === 'string' && name.length > 3 && isNaN(name))
        // .filter(name => name.length > 3 && isNaN(name))
}


// Restriction:
// - Do not use loops.