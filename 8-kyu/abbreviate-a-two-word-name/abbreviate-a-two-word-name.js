// Params: A string containing two names 
// Returns: a string with the names abbrieviated to the initials 
​
// Examples: 
//  ("Sam Harris"), "S.H")
//  ("Patrick Feenan"), "P.F")
//  ("Evan Cole"), "E.C")
​
// Pseudo: 
//  I will split the names into an array using the split method
//  Then I will will use the map method create a new array with just the intials 
//  Then I will return a template literal to join the letters together 
function abbrevName(name){
  let initials = name.split(' ').map(n => n[0].toUpperCase())
  return `${initials[0]}.${initials[1]}`
}