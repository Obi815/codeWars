//Params: String of numbers and spaces 
//Returns: The Highest number a space and the lowest number
​
//Examples: 
  //('1 2 3 4 5 6') -> '6 1'
  // ('2 4 -3 8 -10') -> '-10 8'
  //('1 9 -5 20') -> '20 -5'
function highAndLow(numbers){
  //Take the sring of numbers and spaces
  //Split into a array 
  //find the highest and lowest numbers 
  //return the highest number a space and lowest number
  let highLow = numbers.split(' ').sort((a,b) => b - a)
  return `${highLow[0]} ${highLow[highLow.length - 1]}`
}