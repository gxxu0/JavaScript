function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => {
    //배열의 메소드 사용
    result += num;
  });
  console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/////////////////////////////////////
function add(...numbers) {
  let result = numbers.reduce((prev, cur) => prev + cur);
  console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/////////////////////////////////////

//user객체를 만들어주는 생성자 함수 만들기
function User(name, age, ...skill) {
  this.name = name;
  this.age = age;
  this.skill = skill;
}
const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 14, "English");

console.log(user1);
console.log(user2);
console.log(user3);
