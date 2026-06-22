function hydrate(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) > 0) {
      answer += +s[i];
    }
  }
  return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
}
​
​
// Set answer = 0 
// loop through every letter in the string 
// if (parseInt(s[i]) > 0) checks if index is a number and is greater than 0
// we then add the numbers to answer
// use ternary opp to generate the glasses of water needed 