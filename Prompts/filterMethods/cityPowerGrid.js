// City Power Grid

// A city monitoring system stores power readings in an array.
//
// Some readings are invalid and should be removed.
//
// A valid reading:
// - must be a number
// - must be greater than or equal to 50
//
// After removing invalid readings, return a new array where each
// remaining reading is increased by 10%.


// Example

// Input:
// [42, 75, "ERROR", 120, 49, 60]

// Output:
// [82.5, 132, 66]


// Explanation
// 75  -> 82.5
// 120 -> 132
// 60  -> 66

// Method:
    // Filter Mapping

// Approach 
    // First I take the array of numbers
    // Then I filter the array to keep: 
        // Numbers 
        // Numbers >= 50
    // Then I map to change the array 
        // increase number by 10%
            // Equation : number * (percent / 100) + number


// Task

// Write a function:

function powerGrid(readings) {
    return readings
        .filter(reading => typeof reading === 'number' && reading >= 50)
        .map(number => number * (1 + 10 / 100))
}