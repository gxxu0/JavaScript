function multiplyAll(x, y) {
  let sum = 1;
  for (let i = x; i <= y; i++) {
    sum *= i;
  }
  return sum;
}
console.log(multiplyAll(1, 2));
console.log(multiplyAll(1, 3));
