// Input: A number that represents your budget
​
// Output: A string of coffee prices you can afford
//   Prices are in accending order 
​
// Method: Filter 
​
// Approach: First I will take the input number and compare it to every number and keep only
//   the numbers within my budget 
​
function search(budget, prices) {
  return prices
    .filter(number => number <= budget)
    .sort((a,b) => a - b)
    .toString()
}