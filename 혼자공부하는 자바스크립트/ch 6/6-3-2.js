const Object = {
  name: "혼자 공부하는 파이썬",
  price: 18000,
  publisher: "한빛미디어",
};
Object.name = Object.name !== undefined ? Object.name : "제목 미정";
Object.author = Object.author !== undefined ? Object.author : "저자 미상";

console.log(JSON.stringify(Object, null, 2));
