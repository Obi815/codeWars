function unique(arr) {
  return arr.filter((num, i) => arr.indexOf(num) === i)
}
​
// We use the value and index
// then we filter to keep the unique values 
// indexOf(num) always returns the first index of i 
// we keep the checks that return true 