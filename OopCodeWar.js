// Grasshopper - Terminal Game #1 
// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0

// Solution 1: 
class Hero {
	constructor(name = 'Hero') {
  	this.name = name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

// Explanation:
// 1. We define a class named `Hero
// 2. The constructor takes an optional parameter `name`, which defaults to 'Hero' if not provided.
// 3. inside the constructor, we set the attributes using the 'this' keyword to refer to the instance being created.
// 4. The attributes are initialized with the specified default values.
// 5. When a new instance of the Hero class is created, it will have the defined attributes with their respective values.


// Solution 2:
function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

// Explanation:
// 1. We define a function named `Hero` that acts as a constructor for creating hero objects.
// 2. The function takes a parameter `name`. If no name is provided, it defaults to 'Hero' using the logical OR operator (`||`).
// 3. Inside the function, we use the `this` keyword to set the attributes of the hero object being created.
// 4. Each attribute is initialized with the specified default values.
// 5. When a new instance of the Hero function is created using the `new` keyword, it will have the defined attributes with their respective values.






//Classy Extentions 
// The goal of this kata is to train the basic OOP concepts of inheritance and method overriding.

// You will be preloaded with the Animal class, so you should only edit the Cat class.

// Task
// Your task is to complete the Cat class which extends 
// Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

// The name attribute is accessible in the class with this.name.

// Solution 1:
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

// Explanation:
// 1. We define a class named `Cat` that extends the `Animal` class, inheriting its properties and methods.
// 2. Inside the `Cat` class, we override the `speak` method to provide a specific implementation for cats.
// 3. The `speak` method returns a string that combines the cat's name (accessed via `this.name`) with the word "meows."
// 4. When the `speak` method is called on an instance of the `Cat` class, it will return the desired output format.

// Solution 2:
// function Cat(name) {
//   Animal.call(this, name); // Call the parent constructor
// }

// Explanation:
// 1. We define a constructor function named `Cat` that takes a `name` parameter.
// 2. Inside the `Cat` constructor, we call the parent `Animal` constructor using `Animal.call(this, name)`, which initializes the inherited properties.
// 3. This sets up the `Cat` object with the same properties as an `Animal`, including the `name` attribute.
// 4. To override the `speak` method, we would typically add it to the prototype of `Cat`, but this part is not shown in this snippet.


//OOP: OBject Oriented Piracy
// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. 
// With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

// You begin with writing a generic Ship class / struct:

// class Ship {
//   constructor(draft, crew) {
//     this.draft = draft
//     this.crew = crew
//   }
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// const titanic = new Ship(15, 10);
// Task
// You have access to the ship "draft" and "crew". 
// "Draft" is the total ship weight and "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft. 
// If after removing the weight of the crew, the draft is still more than 20, 
// then the ship is worth looting. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// Good luck and may you find GOOOLD!

// Solution 1:
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    return (this.draft - this.crew * 1.5) > 20;
  }
}

// Explanation:
// 1. We define a class named `Ship` with a constructor that takes `draft` and `crew` as parameters.
// 2. Inside the constructor, we initialize the `draft` and `crew` attributes of the ship instance.
// 3. We add a method named `isWorthIt` to the `Ship` class.
// 4. The `isWorthIt` method calculates the effective draft by subtracting 
// the weight contributed by the crew (1.5 units per crew member) from the total draft.
// 5. It then checks if the resulting draft is greater than 20 and returns `true` if it is, 
// indicating that the ship is worth looting; otherwise, it returns `false`.







// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. 
// You must fill in the Constructor method to accept a name as string and an age as number, 
// complete the get Info property and getInfo method/Info getter which should return johns age is 34

//Solution 1:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

// Explanation:
// 1. We define a class named `Person` with a constructor that takes `name` and `age` as parameters.
// 2. Inside the constructor, we set parameters to the instance using the `this` keyword.
// 3. We define a getter method named `info` that returns a formatted string containing the person's name and age.
// 4. The `info` getter can be accessed as a property, providing a convenient way to retrieve the person's information in the specified format.
