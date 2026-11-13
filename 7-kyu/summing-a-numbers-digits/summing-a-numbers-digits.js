function sumDigits(number) {
  const num = Math.abs(number)
  return String(num).split('').map(Number).reduce((a,c) => a + c)
}