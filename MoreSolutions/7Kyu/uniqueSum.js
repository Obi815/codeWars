//Description: 
// Given a list of integers values, your job is to return the sum of the values; however, 
// if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null

// My Solution:
function uniqueSum(lst){
  if(lst.length < 1){return null}
  
  let sumNums = [...new Set(lst)]
  return sumNums.reduce((acc, curr) => acc + curr, 0)
  
}

// Explanation:
// We first check if the input list is empty. If it is, we return null as specified in the problem statement. 
// We then create a new array called sumNums that contains only the unique values from the input list using the Set object. 
// Finally, we use the reduce() method to calculate the sum of the unique values in sumNums and return the result.

// Better Solution:
function uniqueSum(lst){
  return [...new Set(lst)].reduce((a,b)=>a+b,null);
}

// Explanation:
// Call uniqueSum with parameter lst, which is an array of integers.
// [...new Set(lst)] creates a new array that only stores unique values from lst.
//      Example: if lst is [1, 3, 8, 1, 8], then [...new Set(lst)] will be [1, 3, 8].
// reduce is then called on the array of unique values to calculate the sum.
// null is passed as the initial value for the accumulator in reduce, 
//      which means that if the array of unique values is empty, the result will be null.

// easier to read:
function uniqueSum(lst){
  return lst.length > 0 ? [...new Set(lst)].reduce((s,n)=> s + n, 0) : null
}