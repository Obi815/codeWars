// Params: random number 
​
// Return: based on number return 
// 1."I love you"
// 2."a little"
// 3."a lot"
// 4."passionately"
// 5."madly"
// 6."not at all"
​
// 7."I love you" .... 8.
​
// Examples: Input 8 -> output 'a little'
// Pseudo: Take the inputed number and divide it by 6
// Take the remainder and run a check to match the correct string
​
function howMuchILoveYou(nbPetals) {
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}
​