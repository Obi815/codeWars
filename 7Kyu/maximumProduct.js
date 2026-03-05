// Task
// Given an array of integers , 
// Find the maximum product obtained from multiplying 2 adjacent 
// numbers in the array. Note that the array size is at least 2 and consists a mixture 
// of positive, negative integers and also zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product 
// is obtained from multiplying 2 * 3 = 6

// [9, 5, 10, 2, 24, -1, -48] returns 50 
// because the maximum product is obtained from multiplying 
// 5 * 10 = 50

// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because 
// the maximum product is obtained from multiplying 
//  −2 * 7= −14

// What is it asking? 
    // go through array a multiply adjacent numbers 
        // For Loop Maybe?
        // How to create new array... map or something else?
    // Return Max Product 

function adjacentElementsProduct(array) {
    // create array to store multiplied products 
  let newArr = []
  
  //For loop to multiply every number to the adjacent numbers 
  for(i=0; i < array.length-1; i++){ // array.length - 1 to stop at second to last number 
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr) // Gets the max product 
}