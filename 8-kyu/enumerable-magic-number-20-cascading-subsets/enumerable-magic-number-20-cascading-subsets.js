// Params: Given an array and integer 
// Returns: cascading subsets of the array determined by the integer
​
// Examples: 
//   [1,2,3,4], 2 -> [[1,2], [2,3], [3,4]]
//   [1,2,3,4], 3 -> [[1,2,3],[2,3,4]]
​
// Pseudo: 
//   I will create an empty array
//   Then a for loop intialized at 0 and runs till i<= array.length -n 
//   Then push the numbers in cascading order using slice
​
function eachCons(array, n) {
  let cascadingSubset = [];
  for( i = 0; i <= array.length - n; i++){
    cascadingSubset.push(array.slice(i, i + n ));
  }
  return cascadingSubset;
}