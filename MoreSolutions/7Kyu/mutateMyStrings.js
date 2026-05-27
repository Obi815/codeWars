// I will give you two strings. 
// I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

// What is it asking me to do? 
    // 1. Take two strings 
    // 2. Change first string letter by letter until it is the same as string 2

// Potential Solution:
    // While stringOne !== stringTwo?
    // Split each letter then splice?
    // For loop to change each letter?


function mutateMyStrings(stringOne, stringTwo){
    var arr1 = stringOne.split(''); // Spliting each string
    var arr2 = stringTwo.split('');// Spliting each string
  var answerString = [arr1.join('')]; // Joining stringOne together again
  
  for(let i = 0; i < arr1.length; i++) { // for loop
   if(arr1[i] !== arr2[i]) { // if arr1 (AKA stringOne) does not equal arr2 (AKA stirngTwo)
      arr1[i] = arr2[i]; //arr at that specific index equals arr2 and that specific index
      answerString.push(arr1.join('')); //join answerString togeth
    }
  }
  return answerString.join('\n') + '\n'; 
}