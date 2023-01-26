function minMax(array) {
  let output = array[0];
  for (const item of array) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}
const array = [52, 272, 32, 103, 275, 24, 57];
console.log(`${array} 중에서 최솟값 = ${minMax(array)}`);
