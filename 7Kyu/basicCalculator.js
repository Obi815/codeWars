// Write a function called that takes 3 values. The first and third values are numbers. The second value is a character.

// If the character is "+" , "-", "*", or "/", the function will return the result of the 
// corresponding mathematical function on the two numbers.
// If the string is not one of the specified characters, 
// the function should return null (throw an ArgumentException in C#).
// Keep in mind, you cannot divide by zero. 
// If an attempt to divide by zero is made, return null / None (Python) / throw an ArgumentException (C#).

// (2,"+", 4) --> 6
// (6,"-", 1.5) --> 4.5
// (-4,"*", 8) --> -32
// (49,"/", -7) --> -7
// (8,"m", 2) --> null
// (4,"/",0) --> null

// What is this asking? 
    // Take 3 values with two of them being numbers and return a outcome based on the math opperation
    // the output will be the two numbers sum,difference,product,fraction depending on the opperator
    // return 'null' if 2nd value is not one of the opperators or if divided by 0

function calculate(a, operator, b) {
    //Check for opperator 
    let equations = '+-*/'
    if(!operator.includes(equations)){
        return null 
    } else if (operator === '/' && b === 0){
        return null 
    } else{
        return eval(a + operator + b )
    }
    // decide which opperator to use 
    // do the equation
    // return outcome
}