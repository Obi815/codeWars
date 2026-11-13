//Params: Takes a string 
//Return: the string without the vowels
​
//Examples: 
  //'This String' -> 'Ths Strng'
  // 'Hello / World/' -> 'Hll / Wrld/'
  //'Big fans 453' -> 'Bg fns 453'
function disemvowel(str) {
  //create vowel variable
  const vowels = 'AEIOUaeiou'
  //split string by spaces
  //split each word creating nested arrays 
  //check each letter for vowels 
  return str
    .split(' ') //'This World' -> ['This', 'World']
    .map(word => word
         .split('') //"Word" -> ["W", "o", "r", "d"]
         .filter(char => !vowels.includes(char)) //'This' -> 'Ths'
         .join(''))
    .join(' ')
}