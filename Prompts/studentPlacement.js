// A school is organizing students into two groups for a competition.

// You are given a list of student scores. Any invalid scores should be ignored.

// For the remaining students:

// * scores below 3 should be labeled "low"
// * scores of 3 or higher should be labeled "high"

// Return a new list containing only the labels in the original order.

// ⸻

// Constraints

// * The input will always be an array
// * Valid scores are numbers greater than or equal to 0
// * Any negative numbers should be ignored
// * Preserve the original order of valid scores

// Examples:
// categorizeScores([1, 2, 3, 4, 5]) ➞ ["low", "low", "high", "high", "high"]

// categorizeScores([0, 10, 2]) ➞ ["low", "high", "low"]

// categorizeScores([7, -1, 3]) ➞ ["high", "high"]


// input: 
    // A list of scores 

// Output: 
    // A new list with the labels in original order

// Method: 
    // Mapping

// Approach: 
    // First I take the list of student scores 
    // Then I check to see if the scores are greater or less than 3 
    // Return new list with scores changed to 'low' or 'high' 

function categorizeScores(scores) {
    return scores
            .filter(num => num >= 0)
            .map(number => {
                return number >= 3 ? "high" : "low"
            })
}