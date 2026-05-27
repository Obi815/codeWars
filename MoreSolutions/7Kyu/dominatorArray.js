// A zero-indexed array arr consisting of n integers is given. 
// The dominator of array arr is the value that occurs in more than half of the elements of arr.

// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr 
// consisting of n integers, returns the dominator of arr. 
// The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// What is it asking you to do? 
    // 1. Take an array with random numbers and count the duplicates 
    // 2. return the number that is the dominator
    // 2. if no dominator return -1 

function dominator(arr) {
   // Find the arr.length / 2 number 
   let middleArr = arr.lenght / 2
   // count the duplicates in arr

   // compare to the half point
   // return dominator or -1 
}

const dominator = function( arr ) {
  const dic = arr.reduce( (a, i)=> (a[i] = a[i] + 1 || 1, a), {})
  for ( const i in dic ){
    if ( dic[i] > arr.length / 2 ){
      return Number(i)
    }
  }
  return -1
}