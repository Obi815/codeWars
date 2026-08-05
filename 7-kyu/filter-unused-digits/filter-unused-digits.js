function unusedDigits(...args) {
  let arr = args.join()
  
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter(num => !arr.includes(num))
    .join("")
}