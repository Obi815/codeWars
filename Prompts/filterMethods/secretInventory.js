// Secret Inventory Codes

// A warehouse stores inventory labels in an array.
//
// Some labels are invalid and should be ignored.
//
// A valid label:
// - must be a string
// - must begin with "INV-"
// - must contain exactly 3 digits after the dash
//
// After removing invalid labels, return a new array containing only
// the 3-digit inventory codes as numbers.


// Example

// Input:
// [
//   "INV-123",
//   "INV-99",
//   "INV-456",
//   404,
//   "ITEM-777",
//   "INV-ABC"
// ]

// Output:
// [123, 456]
// Notes

// "INV-99" is invalid because it contains only 2 digits.
// "INV-ABC" is invalid because the code is not numeric.


// Method: 
    // Filter Mapping

// Approach: 
    // First I take the labels
    // Filter to only keep:
        // Strings
        // Strings that start with 'INV-'
        // Strings w/ 3 digits after '-'
    // Map the labels to only show the digits
    

// Task

// Complete the function:

function inventoryCodes(labels) {
    return labels
        .filter(label => {
            if (typeof label !== 'string') return false
            if (!label.startsWith('INV-')) return false

            const code = label.split('-')[1]

            return code.length === 3 && !isNaN(code)
        })
        .map(label => Number(label.split('-')[1]))
}