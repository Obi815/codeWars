//Params: array with whole numbers as 'strings' & numbers
//Return: the sum of all numbers 
​
//Examples:
  //[1,'2','3', 4] -> 10
  //['2','2','2'] -> 6
  //['10', 2, 2, 2, 2, '10'] -> 28
​
function sumMix(x) {
  //convert the string numbers to numbers
  //reduce the array 
  return x.map(num => parseInt(num)).reduce((a,c) => a + c, 0)
  //.map changes stringed numbers to numbers 
}