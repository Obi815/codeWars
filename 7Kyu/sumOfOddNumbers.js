// Description:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// Solution:
function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}

// Explanation:
// We call a function called rowSumOddNumbers
// we return the value of n to the power of 3 using Math.pow() method
// this is because the sum of the numbers in the nth row of this triangle is equal to n to the power of 3
// for example, the sum of the numbers in the 2nd row is equal to 2 to the power of 3 which is 8
// the sum of the numbers in the 3rd row is equal to 3 to the power of 3 which is 27 and so on...
