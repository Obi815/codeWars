//Params: given a number and a count 
//Return: the multiples of the number up to the count
​
//Examples: 
  //(1,5) -> [1,2,3,4,5]
  //(2,6) -> [2,4,6,8,10,12]
  //(7, 1) -> [7]
function countBy(x, n) {
  //create variable with empty array 
  //create a for loop that runs until it hits the count
  //get multiples and push them to empty array 
  let multi = []
  let sum = 0
  for(let i = 1; i <= n; i++){
    multi.push(sum += x)
  }
  return multi
}