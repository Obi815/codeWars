//Params: Given an array of numbers 1 to n
//Return: "Fizz" - multiples of 3, "Buzz" - mulitples of 5, 
    //"FizzBuzz" - multiples of 3 & %
​
//Examples: 
  // [1,2,3,4,5] - [1, 2, "Fizz", 4, "Buzz"]
  // [...12, 13, 14, 15] - [... 'Fizz', 13, 14, 'FizzBuzz']
function fizzbuzz(n) {
  //create empty array 
  //create a loop that starts at 1 & runs till n
  //check if every number is a multiple of 3 & 5 or 5 or 3 
  //return array 
  let fizzBuzz = []
  for (let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){ 
      fizzBuzz.push('FizzBuzz') }
    else if(i % 5 === 0){ 
      fizzBuzz.push('Buzz')}
    else if(i % 3 === 0){ 
      fizzBuzz.push('Fizz')}
    else{
     fizzBuzz.push(i) 
    }
  }
  return fizzBuzz
}
​