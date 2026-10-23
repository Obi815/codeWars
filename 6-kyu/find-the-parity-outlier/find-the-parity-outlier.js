//Params: An array of all even nums except one or all odd numbers except one
//Returns: the outlier 
​
//Example:
  //[1,3,5,7,8,9] -> 8
  //[2,4,6,8,9,10] -> 9
  //[10,12,14,13] -> 13
function findOutlier(integers) {
  let evens = integers.filter(number => number % 2 === 0 || number % -2 === 0)
  let odds = integers.filter(number => number % 2 === 1 || number % -2 === -1)
  return evens.length === 1 ? evens[0] : odds[0] 
}