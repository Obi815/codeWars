// Loud and Clear

// Given an array of words, return a new array containing only words
// that have more than 4 characters.
//
// After filtering the words, convert each remaining word to uppercase.
//
// The original array should not be changed.


// Example

// Input:
// ["cat", "banana", "tree", "computer", "sun"]

// Output:
// ["BANANA", "COMPUTER"]


// Method 
    // Filter and Map

// Approach 
    //  First I take the array of words
    //  Then I filter the words to keep words with more than 4 characters
    // Then I map to create a new array and change them to upper case
    // Then i return 

// Write a function:

function loudWords(words) {
    return words
        .filter(word => word.length > 4)
        .map(word => word.toUpperCase())
}