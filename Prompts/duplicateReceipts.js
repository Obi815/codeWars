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
    return receipts.filter(receipt =>
        receipts.filter(item => item === receipt).length === 1
    )
}

// How it works:
// It is a filter inside of a filter.
//
// The outer filter goes through each receipt one by one.
// For example:
// [101, 202, 101, 303, 404, 303]
//
// First receipt = 101
// Then receipt = 202
// Then receipt = 101 again
// etc.
//
// The inner filter searches the entire array for values equal to
// the current receipt.
//
// When receipt = 101, the inner filter returns:
// [101, 101]
//
// Then .length counts how many matching receipts were found.
//
// [101, 101].length === 2
//
// Since we only want receipts that appear exactly once,
// we check:
//
// matches.length === 1
//
// Because 2 === 1 is false, the outer filter removes 101.
//
// When receipt = 202, the inner filter returns:
// [202]
//
// [202].length === 1
//
// Because 1 === 1 is true, the outer filter keeps 202.