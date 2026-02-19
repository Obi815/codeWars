// Implement a function that takes two numbers m and n and returns an array of 
// the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// (3, 5.0) --> [5.0, 10.0, 15.0]

// My Solution:
function multiples(m, n){
  let multiples=[];
  for(let i=1;i<=m;i++){
    multiples.push(i*n)
  }
  return multiples;
}

// Explanation:
// The function multiples takes two parameters: m (the number of multiples to generate) and n (the real number for which we want to find the multiples).
// It initializes an empty array called multiples to store the results.
// A for loop is used to iterate from 1 to m (inclusive). In each iteration, it calculates the multiple by multiplying i (the current iteration number) with n and pushes the result into the multiples array.
// After the loop completes, it returns the multiples array containing the first m multiples of n.

// Alternative Solution:
function multiples(m, n){
	return Array.from(Array(m), (_v, i) => (i + 1) * n);
}

// Explanation:
// This alternative solution uses the Array.from method to create an array of length m. 
// The second argument is a mapping function that takes the index i and returns the multiple (i + 1) * n. 
// The resulting array will contain the first m multiples of n, which is returned at the end.