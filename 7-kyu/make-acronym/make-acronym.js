// input: a string 
// output: the string return as acronyms with the first letters capitalized 
​
​
function toAcronym(inp){
  let word = inp.split(' ').map(word => word.charAt(0))
  return word.join('').toUpperCase()
}