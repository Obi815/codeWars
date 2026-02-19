//Description:  
// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here is an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function that converts a linked list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

// Solution:
function listToArray(list) {
    let array = []
    for (let node = list; node !== null; node = node.next) {
        array.push(node.value)
    }
    return array        
}

// Explanation:
// The function listToArray takes a linked list as input and initializes an empty array called array to store the values from the linked list.
// It uses a for loop to traverse the linked list, starting with the initial node (list) and continues until it reaches the end of the list (when node is null).
// Inside the loop, it pushes the value of the current node (node.value) into the array.
// After the loop completes, it returns the array containing all the values from the linked list.