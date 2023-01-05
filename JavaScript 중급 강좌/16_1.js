// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("OK");
//     reject(new Error("err...."));
//   }, 1000);
// });
// console.log("시작");
// pr.then((result) => {
//   console.log(result);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("끝!");
//   });
///////////////////////////////////
//콜백지옥
// const f1 = (callback) => {
//   setTimeout(function () {
//     console.log("1번 주문 완료");
//     callback();
//   }, 1000);
// };
// const f2 = (callback) => {
//   setTimeout(function () {
//     console.log("2번 주문 완료");
//     callback();
//   }, 3000);
// };
// const f3 = (callback) => {
//   setTimeout(function () {
//     console.log("3번 주문 완료");
//     callback();
//   }, 2000);
// };

// console.log("시작");
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("끝!");
//     });
//   });
// });

//프로미스 체이닝
// const f1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1번 주문 완료");
//     }, 1000);
//   });
// };
// const f2 = (message) => {
//   console.log(message);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2번 주문 완료");
//     }, 3000);
//   });
// };
// const f3 = (message) => {
//   console.log(message);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3번 주문 완료");
//     }, 2000);
//   });
// };

// console.log("시작");
// f1()
//   .then((resolve) => f2(resolve))
//   .then((resolve) => f3(resolve))
//   .then((resolve) => console.log(resolve))
//   .catch(console.log())
//   .finally(() => {
//     console.log("끝");
//   });

// const f1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1번 주문 완료");
//     }, 1000);
//   });
// };
// const f2 = (message) => {
//   console.log(message);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("2번 주문 실패");
//     }, 3000);
//   });
// };
// const f3 = (message) => {
//   console.log(message);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3번 주문 완료");
//     }, 2000);
//   });
// };

// console.log("시작");
// f1()
//   .then((resolve) => f2(resolve))
//   .then((resolve) => f3(resolve))
//   .then((resolve) => console.log(resolve))
//   .catch(console.log())
//   .finally(() => {
//     console.log("끝");
//   });

// //프로미스 all
// const f1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve("1번 주문 완료");
//       reject(new Error("xx"));
//     }, 1000);
//   });
// };
// const f2 = (message) => {
//   console.log(message);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2번 주문 완료");
//     }, 3000);
//   });
// };
// const f3 = (message) => {
//   console.log(message);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3번 주문 완료");
//     }, 2000);
//   });
// };

// console.log("시작");
// console.time("x");
// Promise.all([f1(), f2(), f3()]).then((resolve) => {
//   console.log(resolve);
//   console.timeEnd("x");
// });

//프로미스.race
const f1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1번 주문 완료");
    }, 1000);
  });
};
const f2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2번 주문 완료");
    }, 3000);
  });
};
const f3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3번 주문 완료");
    }, 2000);
  });
};

console.log("시작");
// console.time("x");
Promise.race([f1(), f2(), f3()]).then((resolve) => {
  console.log(resolve);
  //   console.timeEnd("x");
});
