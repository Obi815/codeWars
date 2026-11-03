//Params: given an odd length array of numbers excepts one
//Return: the one different number 
​
//Examples: 
  //[1,1,1,3] - 3
  //[2,2,2,5] - 5
  //[17,17,17,17,9] - 9
function stray(numbers) {
  //convert numbers to string
  //filter to find the odd index
  let nums = numbers.toString()
  let n = nums
    .split(',')
    .filter(numb => nums.indexOf(numb) === nums.lastIndexOf(numb))
    .map(n => Number(n))
  return n[0]
}