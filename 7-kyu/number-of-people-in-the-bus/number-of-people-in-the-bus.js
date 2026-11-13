function number(busStops) {
  //Reduce to add all the items 
  //people as the accumulator 
  //[on, off] is the current and we can use it to take the values 
  //out each nested array. 
  return busStops.reduce((people, [on, off]) => people + on - off, 0)
}