//Params: Given a string of words 
//Return: The length of the shortest word 
​
//Examples: 
  // 'bitcoin take over the world maybe who knows perhaps' -> 3
  // 'Let's travel abroad shall we' -> 2
  // 'turns out a random test case is easier' -> 1
function findShort(s){
  //Separate the words by spaces -> .split('(space)')
  //We want to get the length of each word -> .length()
  //return shortest word -> Maybe .sort, Math.min(word)
  let short = s.split(' ').map(word => word.length)
  return Math.min(...short)
}