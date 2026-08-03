// input: array of values and a multiplier number
// output: only the numbers increase by the multiplier
​
// Method: filter mapping
​
// Approach: Take the array of values and filter to find the numbers
//   Take filtered numbers and muiltiply them by the multiplier using .map
​
function multiplyAndFilter(array, multiplier){  
  return array
    .filter(num => typeof(num) === 'number')
    .map(num => num * multiplier)
  
}