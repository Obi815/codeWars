// Description:

// Imagine you are creating a game where the user has to guess the correct number. 
// But there is a limit of how many guesses the user can do.

// If the user tries to guess more than the limit, the function should throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.
// Can you finish the game so all the rules are met?

// Solution: 
class Guesser{
    constructor(number, lives){
        this.number = number
        this.lives = lives
    }

    guess(n) {
        if(!this.lives) throw 'No guesses left';
        if(n === this.number) return true
        this.lives --;
        return false
    }
}

// Explanation: 
// We create a class called Guesser
// we create a constructor that takes in two parameters, number and lives
// we assign the values of number and lives to the instance of the class using this keyword
// we create a method called guess that takes in one parameter called n
// if there are no lives left, we throw an error with the message 'No guesses left'
// if n is equal to the number, we return true
// if n is not equal to the number, we decrement the lives by 1 and return false