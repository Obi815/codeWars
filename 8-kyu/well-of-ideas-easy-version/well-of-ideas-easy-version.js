// Params: Array of words -> 'good' or 'bad'
// Returns: 1 or 2 'good' -> 'Publish'
//          3 or more 'good' -> 'I smell a series!'
//          no 'good' in array -> 'Fail!'
​
// Examples: ['bad', 'bad', 'bad'] -> 'Fail!'
//           ['good', 'bad', 'bad', 'bad', 'bad'] -> 'Publish!'
//           ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'] -> 'I smell a series!'
​
// Pseudo: First I will check if every index is a 'bad' and return fail if so
//         Then check the how many 'good' there are and return 'i smell a series' if > 2
//         then return 'publish' if first 2 conditions are not met.
function well(x){
  return x.every(idea => idea === "bad") ? 'Fail!' : 
  x.filter(idea => idea === 'good').length > 2 ? 'I smell a series!' : 'Publish!'
}
​