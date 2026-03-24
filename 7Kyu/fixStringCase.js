// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters 
// and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// Input:
    // a stirng with possible upper or lowercase letters

// Output:
    // The same string, upper or lowercased depending on what is easier

// Techninque:
    // Counting 

// Approach:
    // First I take the string, then I create a variable to count the uppercased letters
    // Then create a varible to count lowercase letters then compare 
    // then and print out string depending on if its majority upper or lowercase

function solve(str){
    let upperCount = 0
    let lowerCount = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            upperCount++
        }else {
            lowerCount++
        }
    }
    return lowerCount >= upperCount ? str.toLowerCase() : str.toUpperCase()
}