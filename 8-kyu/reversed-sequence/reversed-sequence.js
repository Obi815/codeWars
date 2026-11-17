//Params: given a positive whole number
//Return: array with a count from n to 1 
​
//Examples: 
  //(2) -> [2, 1]
  //(5) -> [5,4,3,2,1]
  //(10) -> [10,9,8,7,6,5,4,3,2,1]
const reverseSeq = n => {
  //create and empty array out side of loop 
  //set i to equal given number
  // and run until i >= given number 
  let count = []
  for(let i = 0; i < n; i++){
    count.push(n - i)
  }
  return count
};