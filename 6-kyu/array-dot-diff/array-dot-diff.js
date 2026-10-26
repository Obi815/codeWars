//Params: Two arrays with numbers 
//Returns: An array with items from array a removed if they appear in array b
​
//Examples: 
  //[1,2], [1] - [2]
  //([1,2,2], [1]) -> [2,2]
function arrayDiff(a, b) {
  //Take the array 
  //filter the array to keep unique numbers not include in second array 
  //map a new array 
  return a.filter(number => !b.includes(number))
}