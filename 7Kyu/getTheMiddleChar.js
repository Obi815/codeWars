// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// What is it asking? 
    // Take a given string 
    // count the letters  
    // return the char in the middle

function getMiddle(s) {
    let evenLetter1 = Math.floor(s.length / 2)
    let evenLetter2 = Math.ceil(s.length / 2)
    let oddLetter = Math.round(s.length / 2)
    // Get string length 
    if(s.length % 2 === 0){
        return `${s[evenLetter1 - 1]}${s[evenLetter2]}`
    } else {
        return s[oddLetter - 1]
    }
    // Check for even or odd
    // return middle char for odd 
    // return 2 middle chars for even  
}

//  Shorted Solution: 
function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}