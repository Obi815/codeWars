function tribonacci(signature, n) {
  const arr = signature.slice(0, n);
  for (let i = 3; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}