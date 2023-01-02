let n = "name";
let a = "age";

const user = {
  [n]: "Mike", //name
  [a]: 30, //age
  [1 + 4]: 5,
};
console.log(user);
////////////////////////////////////////
function makeObj(key, val) {
  return {
    [key]: val, //어떤게 key가 될 지 모를 때 유용
  };
}
const obj = makeObj("나이", 23);
console.log(obj);
///////////////////////////////////////
const user2 = Object.assign({}, user);
user2.name = "gxxu0";
console.log(user);
console.log(user2);
//////////////////////////////////////
const result = Object.keys(user);
console.log(result);
const result1 = Object.values(user);
console.log(result1);
//////////////////////////////////////
const result2 = Object.entries(user);
console.log(result2);
//////////////////////////////////////
let arr = [
  ["mon", "월"],
  ["tue", "화"],
];
const result3 = Object.fromEntries(arr);
console.log(result3);
//////////////////////////////////////
