function points(games) {
  return games.reduce((total, game) => {
    const [x, y] = game.split(':').map(Number)
    return total + (x > y ? 3 : x === y ? 1 : 0)
  }, 0)
}