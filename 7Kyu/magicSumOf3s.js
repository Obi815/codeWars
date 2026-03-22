// The magic sum of 3s is calculated on an array by summing 
// up odd numbers which include the digit 3.

// Complete the function which accepts an array of 
// integers and returns its magic sum of 3s.

// Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

// If there is no such number in the array, 0 should be returned.

function magicSum(numbers) {
  // Check for numbers in arrar
  if(numbers.length === 0){return 0}
  // find the odd numbers
  numbers = numbers.filter(num => 
    num % 2 !== 0 &&  // Check number is not even

    num.toString().includes('3')) // Check number has a 3 

  return numbers.reduce((acc, curr) => acc + curr, 0) // Add up numbers in array
}













// Input:
  // Two Numbers n and d

// Output:
  // The count of how many times D appears in squares 

function squares(n, d) {
  let count = 0
  for(let i = 0; i <= n; i++){
    let number = i ** 2
    if(String(number).includes(String(d))){
      count++
    }
  }
  return count
}