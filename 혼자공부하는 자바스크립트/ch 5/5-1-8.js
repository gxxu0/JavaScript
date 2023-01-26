function minMax(...array) {
  let output = array[0];
  for (const item of array) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}
console.log("min(52, 272, 32, 103, 275, 24, 57)");
console.log(` = ${minMax(52, 272, 32, 103, 275, 24, 57)}`);
