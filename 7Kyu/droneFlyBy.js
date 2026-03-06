// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, 
// each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T 
// (any better suggestion for character??) and its flight path up until this point =. 
// The drone always flies left to right, and always begins at the start of the row of lamps. 
// Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

// Examples
    // flyBy('xxxxxx', '====T'), 'ooooox')
    // flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx')
    // 'xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx')

// What is it asking?
    // Find out how far the drone has flown
    // if it has flown by a lamp change the string from 'x' to 'o'
    // 'T' is where the drown has stoped 

    function flyBy(lamps, drone){
        lamps = lamps.split('')
        drone = drone.split('')
        string = []

        // loop through the string
        for(let i = 0; i < lamps.length; i++){
            // compare the 'x' to the '=' or 'T'
            if(drone.indexOf(lamps[i]) === '=' || drone.indexOf(lam) === 'T'){
                string.push('o')
            }else{
                string.push('x')
            }
        }
        // return the string 
        return string.join('')

}