"use strict";

const array = ["사과", "배", "귤", "바나나"];
console.log("# for in 반복문");
array.forEach((index) => {
  console.log(`${index}`);
});

console.log("# for of 반복문");
array.forEach((value) => {
  console.log(`${value}`);
});
