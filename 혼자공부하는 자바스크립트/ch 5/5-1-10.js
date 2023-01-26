function min(first, ...rests) {
  let output;
  let items;
  if (Array.isArray(first)) {
    output = first[0];
    items = first;
  } else if (typeof first === "number") {
    output = first;
    items = rests;
  }

  for (const item of items) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}
console.log(`min(배열): ${min([52, 272, 32, 103, 275, 24, 57])}`);
console.log(`min(숫자, ...): ${min(52, 272, 32, 103, 275, 24, 57)}`);
