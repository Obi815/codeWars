// //////// SORT Functions 

// SORTING STRINGS
// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"]
// sorts with lexicographic order 
// apple, banana, coconut, orange, pineapple

// fruits.sort();

// console.log(fruits)

// SORTING NUMBERS
// let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]
// sorts with lexicographic order 

// numbers.sort((a, b) => a - b);

// console.log(numbers)

// SORTING OBJECTS 

const people = [
    { name: "Spongebob", age: 30, gpa: 3.0 },
    { name: "Patrick", age: 37, gpa: 1.5 },
    { name: "SquidWard", age: 51, gpa: 2.5 },
    { name: "Sandy", age: 27, gpa: 4.0 },
]

// people.sort((a, b) => a.age - b.age)

// sort name in lexicographic order
people.sort((a, b) => a.name.localeCompare(b.name))

console.table(people)