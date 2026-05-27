// Description
// Hey Codewarrior!

// In the previous kata, you have implemented a Cube class, but now we need your help again! 
// I'm talking about constructors. We don't have one. 
// Let's code one (or more) such that one can instantiate an object via it, handling either no arguments or a single integer.

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.

// Solution:
class Cube {
  constructor(side) {
    this.setSide(side)
  }

  getSide() {
    return this.side
  }
  
  setSide(side = 0) {
    this.side = Math.abs(side)
  }
}

// Explanation:
// We create a class called Cube
// because we did not have a constructor, we create one that takes in one parameter called side
// we call a method called setSide and pass in the value of side to it
// we create a method called getSide that returns the value of side
// we create a method called setSide that takes in one parameter called side and assigns the absolute value of side to this.side using Math.abs() method
// this is because we want to switch negative values to positive values
// we also set the default value of side to 0 in case no arguments are passed in when instantiating the object