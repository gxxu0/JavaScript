function sumAll(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`);
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`);
