const student = {};
student.name = "jinny";
student.dept = "computer";
student.age = 23;
console.log(JSON.stringify(student, null, 2));

delete student.age;
console.log(JSON.stringify(student, null, 2));
