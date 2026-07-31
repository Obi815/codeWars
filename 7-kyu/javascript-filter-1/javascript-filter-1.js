// Input: array of pairs of login in names and emails - [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
// Output: the login in pairs of login names ending "_"
​
// Method: Filter
​
// Approach: First I will take the pairs of login in names and emails.
//   Then I will filter through each pair then filter again through each index in pair
//   Then keep the pairs that have the "-" at the end of the login name
​
function searchNames( logins ){
  return logins.filter(pair => pair[0].endsWith('_'))
}