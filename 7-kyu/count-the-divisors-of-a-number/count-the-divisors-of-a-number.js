//Params: Given a whole number n
//Return: a count of how many number divided into n evenly 
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++;              // counts i
      if (i !== n / i) {
        count++;            // counts the partner n / i
      }
    }
  }
  return count;
}