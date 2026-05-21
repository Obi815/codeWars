// Drone Signal Decoder

// A drone system stores signal tags in an array.
//
// Only trusted signals should remain.
//
// A trusted signal:
// - must be a string
// - must start with "DRN-"
// - cannot contain the word "FAIL"
//
// After removing invalid signals, return a new array containing
// only the signal codes without the "DRN-" prefix.
//
// The original order must remain unchanged.


// Example

// Input:
// [
//   "DRN-884",
//   "FAIL-222",
//   "DRN-100",
//   404,
//   "DRN-FAIL-77",
//   "DRN-901"
// ]

// Output:
// [
//   "884",
//   "100",
//   "901"
// ]


// Task

// Complete the function:

function decodeSignals(signals) {
    return signals
        .filter(signal => typeof signal === 'string' && signal.startsWith('DRN-') && !signal.includes('FAIL'))
        .map(signal => signal.split('-')[1])
}