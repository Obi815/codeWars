function positiveSum(arr) {
  return arr.length > 0 ? arr.filter(num => num > 0).reduce((a,c) => a + c, 0) : 0
}