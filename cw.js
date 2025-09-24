//                                  //////////////////////////////////////////////////// NUMBER 1 /////////////////////////////
// Sum of Multiples
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers(positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7) ==> "INVALID"


// find all numbers divisible x up to y
// add all those numbers up excluding y
// return value

// function sumMul(n, m) {
//     let sum = 0

//     if ((n == 0 && m == 0) || (m < 0)) {
//         return "INVALID"
//     } else {
//         for (let i = n; i < m; i++) {
//             if (i % n === 0) {
//                 sum += i
//             }
//         }
//     }
//     return sum
// }

//                                                              Simpler Way to do it ////////////

// function sumMul(n, m) {
//     if (n >= m) return "INVALID";

//     var sum = 0;
//     for (var i = n; i < m; i += n) {
//         sum += i;
//     }
//     return sum;
// }
//////////////////////      COMPLETED //////////////////////////

////////////////////////                NUMBER 2 ////////////////////


// Given a random non-negative number, 
// you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
// }

// console.log(digitize([2345960]))

//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(fightJump, fightCrouch, fightKick, fightPunch) {
    this.jump = fightJump
    this.crouch = fightCrouch
    this.kick = fightKick
    this.punch = fightPunch
    this.slogan = function () {
        console.log(`You can't handle my ${this.punch}`)
    }
    this.wind = function () {
        alert('Haha')
    }

    this.dash = function () {
        console.log('Whoop Missed Me!')
    }
}

let ryu = new StreetFighter('high', 'low', 'body', 'haddduuuken')

