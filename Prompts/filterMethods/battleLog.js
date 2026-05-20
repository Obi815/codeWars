// Clean the Battle Log

// A game server stores combat events in an array.
//
// Only successful attacks should remain in the final battle log.
//
// A successful attack:
// - must be a string
// - must contain the word "hit"
// - cannot contain the word "miss"
//
// After removing invalid entries, convert every remaining attack to uppercase.
//
// The original order must stay the same.


// Example

// Input:
// [
//   "dragon hit",
//   "arrow miss",
//   404,
//   "critical hit",
//   "system error",
//   "hit by troll"
// ]

// Output:
// [
//   "DRAGON HIT",
//   "CRITICAL HIT",
//   "HIT BY TROLL"
// ]

// Method
    // Filtering then Mapping 

// Approach
    // First I take the battle log 
    // Then I filter the logs to keep the strings and the strings with 'hit' included 
    // Then I map to change each log to all caps 

// Write a function:

function battleLog(events) {
    return events
        .filter(log => typeof log === 'string' && log.includes('hit') && !log.includes('miss'))
        .map(log => log.toUpperCase())

}