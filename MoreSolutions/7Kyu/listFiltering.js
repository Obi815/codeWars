// Description:
// In this kata you will create a function that takes a list of non-negative integers 
// and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
// Explanation:
// filter method creates a new array with all elements that pass the test inside the provided function.
// In this case, the test is checking if the type of each element v in the array l is "number". 
// If it is, it will be included in the new array that filter returns. 
// If it's not (i.e., if it's a string), it will be excluded from the new array. 
// The result is an array that contains only the non-negative integers from the original list.


function filter_list(l) {
 return l.filter(v => typeof v == "number")
//  return l.filter(v => typeof v != "string") --> also works
}

// Explanation:
// Filter method is used to create a new array with all elements that pass the test inside fo the function
// v => typeof v == "number" is an arrow function that checks if the type of v is "number".
// != checks if the type of v is not a string 







//  Input:
  // List of non-negative integers and strings 

// Output:
  // A new array that keeps only numbers 

function filtering(arr){
 return  arr.filter(item => typeof item === 'number')
}