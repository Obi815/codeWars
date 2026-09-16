// Params: Given an array of numbers and a unknown function
// Return: Depending on the function check return true or false 
​
// Example:
//   all((1, 2, 3, 4, 5), greater_than_9) -> false
//   all((1, 2, 3, 4, 5), less_than_9)    -> True
​
// Pseudo: 
//   Because we do not know the function we can just pass it in as a param
//   We want every item in array to pass so we use the 'every' method to check it will return 
//   true or false
​
​
function all(arr, fun) {
    return arr.every(fun)
}