function XO(str) {
  str = str.toLowerCase().split('')
  return str.filter(x => x === 'x').length === str.filter(o => o === 'o').length
}