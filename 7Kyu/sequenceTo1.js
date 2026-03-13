// Get the number n to return the sequence from n to 1. 
// The number n can be negative and also large number. (See the range as the following)

// Example : 
// n=5  >> [5,4,3,2,1]
// n=-1 >> [-1,0,1]

// Range :
// Python     -9999 < n < 9999
// Javascript -9999 < n < 9999
// c++        -9999 < n < 9999
// Crystal    -9999 < n < 9999
// Ruby       -9999 < n < 9999

// What is it asking me to do? 
    // 1. Take given number and return an array starting with number 
    //     given and all the numbers leading to number 1


function seqToOne(n){
    let sequence = []

    // Compare the numbers to 1
    while(n !== 1){
        sequence.push(n) // Pushes the current number to sequence

        if(n > 1){ // check whether to add or subtrack
            n--
        }else{
            n++
        }
    }
    sequence.push(1) // push 1 after running a while loop
    return sequence
}

// Shorter Code:
const seqToOne = n => {
  const result = [n];
  while (n !== 1)
    result.push(n < 1 ? ++n : --n);
  return result;
};