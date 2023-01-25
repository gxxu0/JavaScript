let output = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    output += i;
  } else {
    continue;
  }
}
console.log(output);
