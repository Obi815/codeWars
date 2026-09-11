// Params: A string (will always be a string)
// Returns: If it ends with a "!" the string without the "!"
​
// Examples: 
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
​
// Psuedo:
//   First check what the string ends with using endsWith method
//   If so then return the string without the last "!" using the slice method
//   Instead of using a else statement just return the string if it doesnt end in a "!"
//  Extra: Use an If/else code block or Ternary 
​
function remove (string) {
  return string.endsWith('!') ? string.slice(0, -1) : string
}