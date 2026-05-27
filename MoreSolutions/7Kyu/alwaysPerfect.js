// While surfing in web I found interesting math problem called "Always perfect". 
// That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. 
// For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, 
// since the result number is a perfect square the square root of 25 would be 5.

// So now lets write a function which takes numbers separated by commas in string format and returns 
// the number which is a perfect square and the square root of that number.

// If string contains other characters than number or it has more or 
// less than 4 numbers separated by comma function returns "incorrect input".

// If string contains 4 numbers but not consecutive it returns "not consecutive".

// What is it asking me to do? 
    // 1. take numbers separated by commas turn into numbers
    // 2. check if string has exactly 4 numbers  -  if not return 'incorrect input'
    // 3. check if string has a letters - Return 'incorrect input'
    // 3. check for consecutive numbers - if not return 'not consecutive'
    // 4. multiple the consecutive numbers and Square root it


const checkRoot = (str) => { // takes in a string 
  const nums = str.split(',').map(Number); //.split(',') -> ["1","2","3", "abc"]. 
  //                            .map is doing (.map(x => Number(x))) -> [1,2,3,NaN]
  
  if (nums.length !== 4 || nums.some(n => isNaN(n) || n === 0)) return 'incorrect input';  
  // do we have exactly 4 numbers or does at least one item match condition of 'isNan(n)' or does n = 0 if so return incorrect input

  if (nums.some((n, idx) => +n !== +nums[0] + idx)) return 'not consecutive';

  
  const product = nums.reduce((acc, cur) => acc * cur, 1);
  const square = product + 1;
  const squareRoot = Math.sqrt(square);
  
  return `${square}, ${squareRoot}`;
}

//.some stops when it finds one match 

function squareOdds(arr){
    let odds = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0 && arr[i] < 20){
            odds.push(arr[i] ** 2)
        }
    }
    return odds
}
