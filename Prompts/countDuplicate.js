// Counting Duplicates
// Write a function that takes a string and returns the count of distinct letters 
// and numbers that appear more than once in the string. The check should be case-insensitive.

// Examples:
// "abcde"        →  0   (no characters repeat)
// "aabbcde"      →  2   (a and b each appear twice)
// "aabBcde"      →  2   (a and b, case-insensitive)
// "indivisibility" →  1   (only 'i' repeats)
// "Indivisibility" →  1   (same, case-insensitive)

function duplicateCount(text) {
  text = text.toLowerCase();
  let freq = {};
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (freq[char] === undefined) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }

  for (let char in freq) {
    if (freq[char] > 1) {
      count++;
    }
  }

  return count;
}
