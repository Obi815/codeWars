//Params: Given a whole number 
//Returns: Replace each digit with itself squared and joined back together
​
//Examples: 
  // (33) -> 99
  //(9119) -> 811181
  //(2549) -> 4251681
function squareDigits(num) {
  //Separate the numbers - split method
  //change string digits back to number digits - map and Number()
  //join the numbers back together 
  //change it back to number again 
      let n = num.toString().split('')
      .map(n => Math.pow(Number(n), 2))
      .join('')
      
      return Number(n)
}