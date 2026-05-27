// Input: a function with two params (a sequence & a function)
// Output: true or false if the funtion in params returns exactly 1 
//  Method: Filtering - .lenght check
//  Approach: 
// First I will filter the array to keep: 
//  - whatever inside the function param wants 
//Then I will check the length of the filtered array and return true or false based on the count
​
function one(arr, fun){
  return arr.filter(item => fun(item)).length === 1
}