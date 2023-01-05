// async function getName() {
//   //   return Promise.resolve("Tom");
//   throw new Error("err..");
// }

// getName().catch((err) => {
//   console.log(err);
// });
///////////////////////////////
// async function getName(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(name);
//     }, 1000);
//   });
// }
// async function showName() {
//   const resut = await getName("Mike"); //await키워드는 async 내부에서만 사용 가능
//   console.log(resut);
// }
// console.log("시작");
// showName();
// //////////////////////////////////
// //promise코드를 async, await으로 바꾸기.
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
// async function order() {
//   try {
//     const result1 = await f1();
//     const result2 = await f2(result1);
//     const result3 = await f3(result2);
//     console.log(result3);
//   } catch (e) {
//     console.log(e);
//   }

//   console.log("종료");
// }
// order();
///////////////////////////////////

async function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}
async function showName() {
  const resut = await getName("Mike"); //await키워드는 async 내부에서만 사용 가능
  console.log(resut);
}
console.log("시작");
showName();
//////////////////////////////////
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
async function order() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }

  console.log("종료");
}
order();
