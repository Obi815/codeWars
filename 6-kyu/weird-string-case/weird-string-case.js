//Params: given a sentence
//Return: alternating case of letters - Hello -> HeLlO
​
//Examples: 
// toWeirdCase("String") → "StRiNg"
// toWeirdCase("Weird string case") → "WeIrD StRiNg CaSe"
// toWeirdCase("This is a test") → "ThIs Is A TeSt"
​
function toWeirdCase(string){
  //separate the string by spaces - .split(' ') -> ['word', 'word']
  //change each word by spliting their letters 
  //get alternating case 
  return string
    .split(' ') //'hello world' -> ['hello', 'world']
    .map(word => word.split('') // [['yes', 'no']] -> [['y','e','s']...]
        .map((char,i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join(''))
    .join(' ')
  
}