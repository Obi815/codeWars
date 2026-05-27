// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' 
// based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), 
// set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' 
// appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// For instance:

// "a   **&  cZ"  =>  "10100000000000000000000001"
// "aaaaaaa79345675"  =>  "10000000000000000000000000"
// "&%#*"  =>  "00000000000000000000000000"


// What is it asking? 
    // 1. write a string that has 26 characters 
    // 2. for each index of the character look for their coresponding letter in given string
    // 3. if letter is there return '1' else '0'
    // 4. check for capitals 

function change(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arbString = []

  // for loop for each letter in alphabet 
  for(let i = 0; i < alphabet.length; i++){
    if (string.toLowerCase().includes(alphabet[i])){
        arbString.push("1")
    } else {
        arbString.push('0')
    }
  }
  // if the string contains those letters return '1' else '0' 
  return arbString.join('')
}


// Better Solution 
function change(string) {
  string = string.toLowerCase() // Sets string to lowercase
  return 'abcdefghijklmnopqrstuvwxyz'.split('').map(function (c) { // Splits string, creates new array, c is the parameter
    return string.indexOf(c) !== -1 ? 1 : 0; // if letter index is not found '(-1)' return 0 but if it is return 1
  }).join('');
}