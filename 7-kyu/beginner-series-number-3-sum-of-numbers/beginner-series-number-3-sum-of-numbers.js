//Params: Given two whole numbers 
//Return: The sum of whole numbers between each number 
​
//Example:
  //(2,5) = 2+3+4+5 = 14 
  //(7, 3) = 7+6+5+4+3 = 25
  //(6,6) = 6
function getSum(a, b) {
  //create empty var with toal set to 0
  //check if a & b are equal 
  //if a > b add numbers from a to be add total to empty array
  //else b to a
  //return total 
  let total = 0
  if (a === b) {
    return total + a
  }
  else if (a > b){
    for(let i = a;i >= b; i--){
      total += i
    }
  }
  else {
    for(let i = a; i <= b; i++){
      total += i
    }
  }
  return total
}