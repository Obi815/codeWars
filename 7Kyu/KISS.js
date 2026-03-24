// KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.

// You are the boss of Joe.

// Joe is submitting words to you to publish to a blog. He likes to complicate things.

// Define a function that determines if Joe's work is simple or complex.

// Input will be non emtpy strings with no punctuation.

// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

// Otherwise it is complex.

// If complex:

// return "Keep It Simple Stupid"
// or if it was kept simple:

// return "Good work Joe!"
// Note: Random test are random and nonsensical. Here is a silly example of a random test:

// "jump always mostly is touchy dancing choice is pineapples mostly"

// Input: 
    // strings with no punctuation

// Output: 
    // 'Good work Joe!' if each word length is shorter than string length
    // 'Keep It Simple Stupid' if one word exceeds the length of string

// Technique:
    // comparing using .every()

// Approach: 
// First I take the string, then i compare each word to the length of string,
// if word exceeds the length of string KISS else good work 

function isKiss( words ){
  words = words.split(' ')
  for(let i = 0; i < words.length; i++){
    if(words[i].length > words.length){
        return 'Keep It Simple Stupid'
    }
  }
  return 'Good work Joe!'
}

// Another Solution:
function isKiss( words ){
    const arr = words.split(' ') //Splits the words by the spaces
    return arr.every(word => word.length > arr.length) ? 
        'Good work Joe!' : 'Keep It Simple Stupid'
}
