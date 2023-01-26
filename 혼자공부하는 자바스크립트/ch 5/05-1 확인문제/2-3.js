const max = function max(array, ...rests) {
  let output;
  let items;
  if (Array.isArray(array)) {
    output = array[0];
    items = array;
  } else if (typeof array === "number") {
    output = array;
    items = rests;
  }
  for (const item of items) {
    if (output < item) {
      output = item;
    }
  }
  return output;
};
console.log(`max(배열): ${max([1, 2, 3, 4])}`);
console.log(`max(숫자, ...): ${max(1, 2, 3, 4)}`);
