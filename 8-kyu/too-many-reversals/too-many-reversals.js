// Params: A string of words
// Returns  Depending on who hit the last reversal return the name of the last person to hit a reversal
​
// Examples: 
// ("Devant hit a reversal to Kripa"), "Devant")
// ("Alpha hit a reversal to Bravo hit a reversal to Alpha"), "Bravo")
// ("Xenon hit a reversal to Yara hit a reversal to Xenon hit a reversal to Yara hit a reversal to Xenon"), "Yara")
​
// Pseudo:
//    I First will take the string and put the names in an array
//    using the split method and spliting at the ' hit a reversal to ' will give you the names only 
//    Then we want the second to last person so we call back the list using list[list.length - 2]
function whowon(s) {
  let list = s.split(' hit a reversal to ')
  return list[list.length - 2]
}