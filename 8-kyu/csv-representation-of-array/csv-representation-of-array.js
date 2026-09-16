// Params: An Array containing inner arrays
// Returns: Arrays returned as a string with line breaks '\n'
​
// Examples: 
// [
//   [ 0, 1, 2, 3, 45 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]
//   ] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');
​
// Pseudo: 
//   I will take the array and convert it into a string with line breaks
//   join method and break up the lines with '\n'
​
​
function toCsvText(array) {
   return array.join('\n')
}