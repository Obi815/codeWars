function pairs(array, count = 0) {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1)
      count += 1;
  return count;
}

// We iterate through the array two indexes at a time because
// the kata wants us to check pairs of numbers.
//
// For each pair, we find the difference between the two numbers.
// Math.abs() makes the result positive so both (1,2) and (2,1)
// will return 1.
//
// If the absolute difference is exactly 1, the numbers are
// consecutive and we increase our count.
//
// After checking each pair, the loop moves to the next pair.