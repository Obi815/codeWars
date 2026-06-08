function caffeineBuzz(n) {
  if (n % 3 === 0 && n % 4 === 0) {
    return n % 2 === 0 ? "CoffeeScript" : "Coffee";
  }
​
  if (n % 3 === 0) {
    return n % 2 === 0 ? "JavaScript" : "Java";
  }
​
  return "mocha_missing!";
}