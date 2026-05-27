function sumEvenNumbers(input) {
  return input
    .filter(number => {
      if (number % 2 === 0 || number % 2 === 0.0){
        return number
      }
  })
    .reduce((a,b) => a + b, 0)
}
​