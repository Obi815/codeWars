// //////// SORT METHOD

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

// const people = [
//     { name: "Spongebob", age: 30, gpa: 3.0 },
//     { name: "Patrick", age: 37, gpa: 1.5 },
//     { name: "SquidWard", age: 51, gpa: 2.5 },
//     { name: "Sandy", age: 27, gpa: 4.0 },
// ]

// people.sort((a, b) => a.age - b.age)

// sort name in lexicographic order
// people.sort((a, b) => a.name.localeCompare(b.name))

// console.table(people)

// /////// Filter METHOD

// let numbers = [1, 2, 3, 4, 5, 6, 7]
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd)

// console.log(oddNums)

// function isEven(elements) {
//     return elements % 2 === 0;
// }
// function isOdd(elements) {
//     return elements % 2 !== 0;
// }

// const ages = [16, 17, 18, 18, 19, 20, 60]

// const adults = ages.filter(isAdult)

// console.log(adults)

// function isAdult(elements) {
//     return elements >= 18;
// }

// MAP METHOD

// const numbers = [1, 2, 3, 4, 5]

// const squares = numbers.map(square)

// console.log(squares)

// function square(element) {
//     return Math.pow(element, 2)
// }

// REDUCE METHOD

// const prices = [5, 30, 10, 25, 15, 20]

// const total = prices.reduce(sum)

// console.log(`$${total.toFixed(2)}`)

// function sum(previousElemement, nextElement) {
//     // 
//     return previousElemement + nextElement
// }

