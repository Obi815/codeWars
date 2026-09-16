// Params: Given a mixed array of numbers as strings and integers
// Returns: The sum of all the numbers
​
// Examples: 
//    ([9, 3, '7', '3']), 22)
//    (['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
//    (['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)
​
// Pseudo: 
//   I will create a new array with only ints no strings - map method
//   Then I will use the reduce to get the sum
function sumMix(x){
  return x.map(num => Number(num)).reduce((acc, curr) => acc + curr,0)
}