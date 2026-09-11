// Params: Two strings of different lengths 
// Returns: the strings combined together in this format short(string) + long(string) + short
​
// Examples: 
// ('45', '1'), '1451')
// ('Soon', 'Me'), 'MeSoonMe')
// ('U', 'False'), 'UFalseU')
​
//  * strings can be empty (zero length) *
​
// Pseudo:
//   Because it is two strings I can run a ternary checking the length of each string and comparing the two 
//   If first string is > second string the return in format (Str 2 + Str 1 + Str 2)
//   
function solution(a, b){
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}
​