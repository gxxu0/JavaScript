//arr1을 [4,5,6,1,2,3] 으로
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1 = [...arr2, ...arr1];
//또는
// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
//   });
//   console.log(arr1);
console.log(arr1);

//////////////////////////////
let user = { name: "Tom" };
let info = { age: 39 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = Object.assign({}, user, info, { skills: [] });
user.skills = [...fe, ...lang];
//또는
// fe.forEach((item) => {
//     user.skills.push(item);
// })
// lang.forEach((item) => {
//     user.skills.push(item);
// })

//정리하면
// user = {
//     ...user,
//     ...info,
//     skills:[...fe,...lang],
// }; //이렇게 하면 됨!
console.log(user);
