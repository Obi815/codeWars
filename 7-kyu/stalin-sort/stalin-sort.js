function stalinSort(array) {
  for(let item = 0; item <= array.length - 1; item++) {
    if (array[item + 1] < array[item]) {
      array.splice(item + 1, 1)
      item--
    }
  }
}