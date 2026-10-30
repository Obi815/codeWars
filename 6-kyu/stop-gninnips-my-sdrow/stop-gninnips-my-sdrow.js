//Params: Giving us string of words 
//Returns: words >= 5 reversed and words < 5 stay the same 
  //separated by single spaces 
​
//Examples: 
  //"Lizzy is not paying attention" -> "yzziL is not gniyap noitnetta"
  //"Hello You" -> "olleH You"
  //"Watching New Girl" -> "gnihctaW New Girl"
function spinWords(string){
  //Separate the words by the space .split('(space)')
  //Target each word in array and get length - .map() & .length
  //Check if length is >= 5 if so reverse the word - .split('') - .reverse() - .join('')
  //join the array together - join('(space)')
  return string
    .split(' ')
    .map(word => word.length >= 5 ? word.split('').reverse().join('') : word )
    .join(' ')
}