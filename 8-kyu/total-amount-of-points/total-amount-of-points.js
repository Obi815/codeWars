function points(games) {
  //want to count up all points - reduce
  return games.reduce((total, game) => {
    //split the games by colon : then convert to number
    const [x, y] = game.split(':').map(Number);
    //add the points using a ternary to get the correct score 
    return total + (x > y ? 3 : x === y ? 1 : 0)
  },0)
}