//Params: List of applicants with a pair - [age,handicap] - [40,10]
//Returns: 'Open' or 'Senior'
​
//Examples:
  //[55, 8] -> ["Senior"]
  //[54, 7] -> ["Open"] 
  //[[60, 7], [40, 5], [56, 8]] -> ['Open', 'Open', 'Senior']
function openOrSenior(data){
  //Create a new array - map 
  //Use ternary to return senior or open 
  //use [age, handicap] as arguments because its a nested array
  return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open' )
}