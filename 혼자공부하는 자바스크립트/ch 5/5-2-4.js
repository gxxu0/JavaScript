let number = [273, 52, 103, 32, 57];
number = number.map(function (value, index, array) {
  return value * value;
});
number.forEach(console.log);
