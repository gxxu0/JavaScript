const Object = {
  name: "혼자 공부하는 파이썬",
  price: 18000,
  publisher: "한빛미디어",
};
// if (Object.name !== undefined) {
//   console.log("name 속성이 있습니다.");
// } else {
//   console.log("name 속성이 없습니다.");
// }
// if (Object.author !== undefined) {
//   console.log("author 속성이 있습니다.");
// } else {
//   console.log("author 속성이 없습니다.");
// }

// if (Object.name) {
//   console.log("name 속성이 있습니다.");
// } else {
//   console.log("name 속성이 없습니다.");
// }
// if (Object.author) {
//   console.log("author 속성이 있습니다.");
// } else {
//   console.log("author 속성이 없습니다.");
// }

Object.name || console.log("name 속성이 없습니다.");
Object.author || console.log("author 속성이 없습니다.");
