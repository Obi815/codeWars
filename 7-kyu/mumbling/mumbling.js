//Params: Given a string of letters
//Returns: repeat of each letter as many times as its position 
​
//Example: 
  //'abcd' -> A-Bb-Ccc-Dddd
  //'Return' -> R-Ee-Ttt-Uuuu-Rrrrr-Nnnnnn
  //'CwAt' -> C-Ww-Aaa-Tttt
function accum(s) {
  //Split the string into individual indexes - .split
  //change the array using .map
  //First letter always capitalized 
  //Following letters are lowercase 
  // repeat letter by index number
  return s
      .split('')
      .map((string, i) => string.toUpperCase() + string.toLowerCase().repeat(i))
      .join('-')
}