const user = {
  name: "mike",
  age: 23,
};

const showName = Symbol("show Name");
user[showName] = function () {
  console.log(this.name);
};

user[showName]();

//사용자가 접속하면 보는 메세지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
