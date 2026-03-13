// Description: 
// For this exercise you should create a JavaScript class called Animal. 
// Its constructor() takes in name and type parameters. It should have a toString() method 
// that returns a formatted string containing the name and type properties. 
// It should also allow the name property to be set.

// The following is an example of how the class could be used and what 
// the expected return values should be:

// const dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // 'dog'
// dog.name; // 'Max'
// dog.name = 'Lassie';
// dog.name; // 'Lassie'

// What is it asking me to do?
  // 1. Create a class call Animal 
  // 2. Animal has constructor with name and type parameters
  // 3. Create a toString method that returns the name and type 
  // 4. set the name property

// Solution:
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

// Explanation:
// We define a class called Animal with a constructor that takes in name and type parameters. 
// The constructor initializes the name and type properties of the instance. 
// The toString() method returns a formatted string that includes the name and type of the animal. 
// Since we want to allow the name property to be set, we can simply assign it in the constructor, 
//     and it will be accessible for modification after the instance is created.