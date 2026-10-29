//Params: Given a string w/ or w/o spaces 
//Return: The characters in each word reversed 
  //but order of words the same including duoble spaces 
​
//Example:
  //"this is it" -> 'siht si ti'
  //"apple" -> 'elppa'
  //'a b c d' -> 'a b c d'
function reverseWords(str) {
  //create variable to split up string by spaces 
  //select each word so we can change its order - map
  //split each word then reverse it and join it 
  //join it again out side of map with space 
  const string = str.split(' ')
  return string.map(word => word.split('').reverse().join('')).join(' ')
}