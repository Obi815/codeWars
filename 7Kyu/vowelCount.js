// Description:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//Solution 1;
function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
// Explanation:
// getCount is the function name
// str is the parameter representing the input string
// split('') splits the string into an array of individual characters
// filter(c => "aeiouAUEIOU" fileters the array to include only vowels (both lowercase and uppercase
// "aeiouAEIOU " is a string containing all the vowels
// .includes(c) checks if the current character is a vowel
// .length counts the number of vowels found in the string

//Solution 2:
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
// Explanation:
// getCount is the function name
// str is the parameter representing the input string
// match(/[aeiou]/ig) uses a regular expression to find all vowels in the string, ignoring case
// || [] ensures that if no vowels are found, an empty array is returned to avoid errors
// .length counts the number of vowels found in the string
