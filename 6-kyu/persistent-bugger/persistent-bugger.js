function persistence(num) {
  let count = 0
  while (num >= 10){
    let product = 1
    for(const digit of String(num)){
      product *= Number(digit)
    }
    num = product 
    count++
  }
  return count
}