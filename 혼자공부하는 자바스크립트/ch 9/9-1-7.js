class Student {
  constructor(name, kor, eng, math, sci) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    this.sci = sci;
  }
}

const students = [];
students.push(new Student("구름", 87, 98, 88, 90));
students.push(new Student("별이", 92, 98, 96, 88));
students.push(new Student("겨울", 76, 96, 88, 86));
students.push(new Student("바다", 98, 52, 98, 92));
console.log(students);
