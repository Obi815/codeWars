// The Suspicious Grocery List

// A grocery delivery app stores item names in an array.

// Some users accidentally submitted blank entries, spaces, numbers, and random values.

// Your task is to keep only valid grocery item names.


// Rules

// A valid grocery item:
// - must be a string
// - cannot be empty
// - cannot contain only spaces


// Example

// Input:
// ["milk", "", "bread", "   ", 42, "eggs"]

// Output:
// ["milk", "bread", "eggs"]


// Task

// Write a function:

function cleanGroceries(items) {
    return items.filter(item => typeof item === 'string' && item.trim())
    // trim is a truthy falsy method.
    // so something like "word", trim() treats it as truthy 
    //  and " " as falsy and does not pass the filter 
}


// Restriction:
// - Do not use loops.