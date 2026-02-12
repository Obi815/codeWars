//Description:
// Write a class Block that creates a block (Duh..)

// Requirements
// The constructor should take an array as an argument, 
// this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`
// Examples
//     let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
    
//     b.getLength() // -> 4
    
//     b.getHeight() // -> 6
    
//     b.getVolume() // -> 48
    
//     b.getSurfaceArea() // -> 88

// Solution:
class Block{

  constructor(data){
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }
  
  getWidth() {
    return this.width
  }
  getLength() {
    return this.length
  }
  getHeight() {
    return this.height
  }
  getVolume() {
    return this.width * this.length * this.height
  }
  getSurfaceArea() {
    return 2 * (this.width * this.length + this.width * this.height + this.length * this.height)
  }
}

// Explanation:
// We define a class called Block with a constructor that takes in an array of three integers representing the width, length, and height of the block. 
// The constructor initializes the width, length, and height properties of the instance. 
// The getWidth(), getLength(), and getHeight() methods return the respective dimensions of the block. 
// The getVolume() method calculates and returns the volume of the block by multiplying its width, length, and height. 
// The getSurfaceArea() method calculates and returns the surface area of the block using the formula for the surface area of a rectangular prism.

// Same but different syntax:
class Block {
  constructor(data){
    [this.w, this.l, this.h] = data;
  }
  getWidth(){ return this.w }
  getLength(){ return this.l }
  getHeight(){ return this.h }
  getVolume(){
    let {l, w, h} = this;
    return w*l*h;
  }
  getSurfaceArea(){
    let {l, w, h} = this;
    return 2 * (l*w + l*h + w*h);
  }
}

// Explanation:
// In this version, we use array destructuring in the constructor to assign the width, length, and height properties more concisely. 
// The methods remain the same, but we use object destructuring to extract the properties when calculating the volume and surface area for cleaner code.
