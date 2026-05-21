// Remove the Noise

// A radio station stores incoming messages in an array.
//
// Some messages are considered "noise" and should be removed.
//
// A valid message:
// - must be a string
// - must contain at least 3 characters
// - cannot contain the word "STATIC"
//
// After removing invalid messages, return a new array where each
// remaining message is converted to lowercase.


// Example

// Input:
// [
//   "HELLO",
//   "OK",
//   "STATIC SIGNAL",
//   404,
//   "GOODBYE"
// ]

// Output:
// [
//   "hello",
//   "goodbye"
// ]

// Method: 
    // Filter Mapping 

// Approach: 
    // First I take messages from the array 
    // Filter to keep messages that are: 
        // Strings
        // 3 or more characters 
        // does not include "STATIC"
    // Then I map to change the array and lowercase messages 

// Task

// Complete the function:

function clearSignal(messages) {
    return messages
        .filter(message => typeof message === 'string' && message.length >= 3 && !message.includes('STATIC'))
        .map(messages => messages.toLowerCase())
}