//Params: Given a whole number
//Return: a total of every number add up from 1 to given number 
​
//Examples:
  // (1) -> 1
  // (3) -> 6
  // (5) -> 15 
function summation(num) {
  //crete a variable set it equal to zero
  //create a for loop that runs n number of times 
  // every run it adds to the empty variable 
  //return variable
  let sum = 0
  for(let i = 0; i <= num; i++){
    sum += i
  }
  return sum
}