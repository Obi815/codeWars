// You are given a list of numbers.

// Return a new list where each value has been adjusted based on its position in the list.

// multiplyByIndex([5, 5, 5]) ➞ [0, 5, 10]

// multiplyByIndex([10, 20, 30, 40]) ➞ [0, 20, 60, 120]

// multiplyByIndex([7]) ➞ [0]

// What is input?
    // A list of numbers 

// What is output? 
    // A new array with the numbers adjusted (multiplied by their indexes) 

// Method: 
    // mapping

// Approach: 
    //  First I take a list of numbers
    // Then I multiply them by their index
    //  Then I return the new array 

function multiplyByIndex(arr) {
  return arr.map((number, index) => number * index)
}    