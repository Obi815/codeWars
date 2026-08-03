// Input: a sentence and a number
// output: words in the sentence that are longer than number
​
// Method: filter
​
// Approach: Take the sentence and split(' ')
//   Then compare the length of word to the number  
//   Keep only the words longer than the number
​
function filterLongWords(sentence, n) {
  return sentence
    .split(' ')
    .filter(word => word.length > n)
}