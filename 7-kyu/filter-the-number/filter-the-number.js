// input: A string containing numbers
// output: the numbers in the string
​
// Method: filter
​
// Approach: First take the string and separate each letter using .split()
//   Then check if each character is a number with Number() or isNaN()
//   Then join numbers and and return 
​
function filterString(value) {
  return Number(value
                .split('')
                .filter(char => !isNaN(Number(char)))
                .join(''))  
}