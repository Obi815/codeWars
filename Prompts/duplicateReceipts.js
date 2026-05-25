// Duplicate Receipts

// A store keeps a list of receipt IDs.
//
// Due to a bug, some receipts appear more than once.
//
// Return a new array containing only the receipt IDs that appear
// exactly once in the original array.
//
// The order of the remaining receipts should stay the same.


// Examples

// [101, 202, 101, 303, 404, 303]
// => [202, 404]

// [1, 2, 3, 2, 4, 5, 5]
// => [1, 3, 4]

// [7, 7, 7]
// => []


// Task

// Complete the function:

function uniqueReceipts(receipts) {
    return receipt = [...new Set(receipts)]
}