//Params: Given a sequence - String or array 
//Return: remove the immediate duplicates 
​
// Examples:
//  "AAABbBB" - ["A", "A", "A", "B", "b", "B"]
//  [1, 2, 2, 3, 3] - [1,2,3]  
//  "ABBCcAD" - ["A", "B", "C", "c", "A", "D"]
var uniqueInOrder=function(iterable){
//use spread opperator bc its a sequence. 
//filter to keep items that dont imediately repeat
  return [...iterable] //puts into array - "Hello" -> ["H","e", "l", "l", "0"]
    .filter((item, i, array) => item !== array[i - 1]) 
//     checks the current item does not equal previous item in array 
}