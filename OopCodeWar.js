// Grasshopper - Terminal Game #1 
// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0

// Solution 1: 
// class Hero {
// 	constructor(name = 'Hero') {
//   	this.name = name;
//     this.position = '00';
//     this.health = 100;
//     this.damage = 5;
//     this.experience = 0;
//   }
// }

// Explanation:
// 1. We define a class named `Hero
// 2. The constructor takes an optional parameter `name`, which defaults to 'Hero' if not provided.
// 3. inside the constructor, we set the attributes using the 'this' keyword to refer to the instance being created.
// 4. The attributes are initialized with the specified default values.
// 5. When a new instance of the Hero class is created, it will have the defined attributes with their respective values.


// Solution 2:
// function Hero (name) {
//   this.name = name || 'Hero';
//   this.position = '00';
//   this.health = 100;
//   this.damage = 5;
//   this.experience = 0;
// }

// Explanation:
// 1. We define a function named `Hero` that acts as a constructor for creating hero objects.
// 2. The function takes a parameter `name`. If no name is provided, it defaults to 'Hero' using the logical OR operator (`||`).
// 3. Inside the function, we use the `this` keyword to set the attributes of the hero object being created.
// 4. Each attribute is initialized with the specified default values.
// 5. When a new instance of the Hero function is created using the `new` keyword, it will have the defined attributes with their respective values.
