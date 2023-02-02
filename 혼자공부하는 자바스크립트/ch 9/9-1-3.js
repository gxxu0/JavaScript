const students = [];
students.push({ name: "구름", kor: 87, eng: 98, math: 88, sci: 90 });
students.push({ name: "별이", kor: 92, eng: 98, math: 96, sci: 88 });
students.push({ name: "겨울", kor: 76, eng: 96, math: 94, sci: 86 });
students.push({ name: "바다", kor: 98, eng: 52, math: 98, sci: 92 });

function getSumOf(students) {
  return students.kor + students.eng + students.math + students.sci;
}
function getAverageOf(students) {
  return getSumOf(students) / 4;
}
let output = "이름\t총점\t평균\n";
for (const s of students) {
  output += `${s.name}\t${getSumOf(s)}점\t${getAverageOf(s)}점\n`;
}
console.log(output);
