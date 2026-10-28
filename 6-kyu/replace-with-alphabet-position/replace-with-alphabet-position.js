//Params: Given a sentence - string 
//Returns: return each letter in 
  //string its position in alphabet in a string with spaces 
  //anything that isnt a letter gets dropped
​
//Examples:
  //'Hi' -> "8 9"
  //'A' -> 1 
function alphabetPosition(text) {
  //Create our alphabet array
  //Filter out anything that isnt a letter 
  //Separate our given string - .split
  //check alphabet array indexOf(string given)
  //join them back together 
  const alp = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let string = text.split('').filter(letter => alp.includes(letter.toLowerCase()))
  return string.map(letter => alp.indexOf(letter.toLowerCase()) +1 ).join(' ')
}