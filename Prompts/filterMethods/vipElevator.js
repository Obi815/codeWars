// VIP Elevator

// A hotel elevator system stores guest floor requests in an array.
//
// Only VIP requests should remain.
//
// A VIP request:
// - must be a number
// - must be an even number
// - must be greater than 10
//
// After removing invalid requests, return a new array where each
// remaining floor number is multiplied by 2.


// Example

// Input:
// [4, 12, "VIP", 15, 20, 9, 18]

// Output:
// [24, 40, 36]


// Task

// Complete the function:

function vipElevator(requests) {
    return requests
        .filter(request => typeof request === 'number' && request % 2 === 0 && request > 10)
        .map(num => num * 2)

}