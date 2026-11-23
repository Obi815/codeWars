// Params: given a whole string and partial string
// Return: true or false if whole strings ends with partials string 
​
// Examples: 
//   'abc', 'bc' -> true
//   'String', 'ing' -> true
//   'abcde', 'def' -> false
//   'abc', '' -> false
function solution(str, ending){
//want a boolean so return a simple function check 
//use endsWith method to run a check that returns true of false
  return str.endsWith(ending)
}