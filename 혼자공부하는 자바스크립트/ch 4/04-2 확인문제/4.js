let output = "";
const size = 5;

for (let i = 1; i <= size; i++) {
  for (let j = 0; j < size - i; j++) {
    output += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);
