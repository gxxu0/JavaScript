// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.showName = function () {
//     console.log(this.name);
//   };
// };
// const mike = new User("Mike", 30);

// class User2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//     console.log(this.name);
//   }
// }
// const tom = new User2("Tom", 19);

//위 함수(생성자 함수)를 class함수와 동일하도록 만들기
const User = function (name, age) {
  this.name = name;
  this.age = age;
  //   this.showName = function () {
  //     console.log(this.name);
  //   };
};

User.prototype.showName = function () {
  console.log(this.name);
};
const mike = new User("Mike", 30);

class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}
const tom = new User2("Tom", 19);
