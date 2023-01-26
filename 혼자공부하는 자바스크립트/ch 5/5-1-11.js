function sample(...items) {
  console.log(items);
}
const array = [1, 2, 3, 4];
console.log("#전개연산자 사용 X");
sample(array);
console.log("#전개연산자 사용 O");
sample(...array);
