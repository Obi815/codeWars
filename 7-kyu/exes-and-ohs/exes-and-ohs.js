//Params: given a string 
//Return: true (equal Xs & Os) false other wise
​
//Examples: 
  //"XOXO" -> true
  //"Xox" -> false
  //'XOXOzzz' -> true
  //"XzOZX" -> false
function XO(str) {
  //create empty variables x & o
  //separate letters and covert them to lowercase 
  //check for x and o and add them to variables 
  let x = []
  let o = []
  const string = str.toLowerCase().split('')
  for(let i = 0; i < string.length; i++){
    if(string[i] === 'x'){
      x.push(i)
    }
    else if(string[i] === 'o'){
      o.push(i)
    }
  }
  return x.length === o.length ? true : false 
}