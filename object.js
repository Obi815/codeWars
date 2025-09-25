/////////////////////////////       Object Literal ///////////////
// const circle = { // <---- Object   : This is Object literal 
//     radius: 1, // <--- properties           
//     location: { // <--- properties                      
//         x: 1,
//         y: 1
//     },
//     draw: function () { // <--- Method
//         console.log('draw');
//     }
// };

// circle.draw();


//                              Factory Function 
// function createCircle(radius) {
//     return { // <---- Object   : This is Object literal 
//         radius, // <--- properties           
//         draw: function () { // <--- Method
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw()


//                      Constructor Function 

// function Circle(radius) {  // Circle with capital "C" to let us know it is a Constructor Function
//     this.radius = radius
//     this.draw = function () {
//         console.log('draw')
//     }
// }

// Circle.call({}, 1); //Different way to call the function
// Circle.apply({}, [1, 2, 3]); // if you wanted to add an array as a parameter


// const another = new Circle(1);
// // 'new' operator creates and empty object
// // then will set 'this' to point to that object


////////// Primitive and ??? 
// let obj = { value: 10 }
// function increase(obj) {
//     obj.value++;
// }

// increase(obj)
// console.log(obj)

function Circle(radius) {  // Circle with capital "C" to let us know it is a Constructor Function
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

const circle = new Circle(10)