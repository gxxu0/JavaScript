const number = [273, 52, 103, 32, 57, 9];
number.forEach((value) => console.log(value * value));
number.map((value, index) => console.log(`${index + 1}번째 요소: ${value}`));
number.filter((value, index) =>
  console.log(`${index + 1}번째 요소: ${value % 2 === 0}`)
);
