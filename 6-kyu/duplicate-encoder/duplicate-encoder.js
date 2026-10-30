//Params: given a string 
//Returns: '(' if letter appears only once and ')' if it appears multiple times
​
function duplicateEncode(word){
  //separate the string 
  //check each letters times it appears
  //return commas based on their times it appears
  const w = word.toLowerCase()
  return w.split('').map(c => w.indexOf(c) === w.lastIndexOf(c) ? '(' : ")").join('')
}