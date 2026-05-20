// Packet Inspection

// A network system stores incoming packets in an array.
//
// Only valid packets should remain.
//
// A valid packet:
// - must be a string
// - must start with "PKT"
// - cannot contain the word "ERROR"
//
// After removing invalid packets, return a new array containing
// only the packet IDs without the "PKT-" prefix.
//
// The order must remain the same.


// Example

// Input:
// [
//   "PKT-993",
//   "ERROR-404",
//   "PKT-155",
//   404,
//   "PKT-ERROR-88",
//   "PKT-777"
// ]

// Output:
// [
//   "993",
//   "155",
//   "777"
// ]


// Method
    // Filter and Mapping

// Approach
    // First I take the array of packets 
    // Then I check if they are a string, if they have the PKT or ERROR 
    // keep the valid packets (Stings that include PKT)
    // Map the array to return only the numbers 

// Write a function:

function inspectPackets(packets) {
    return packets
        .filter(packet => typeof packet === 'string' && packet.includes('PKT') && !packet.includes('ERROR'))
        .map(packet => packet.split('PKT-')[1])
}