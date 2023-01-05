const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok");
  }, 3000);
});

// const pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("error..");
//   }, 3000);
// });

pr.then(
  function (resut) {
    console.log(resut + " 가지러가자");
  },
  function (err) {
    console.log("다시 주문해주세요..");
  }
);

pr.then(function (resut) {
  console.log(resut + " 가지러가자");
}).catch(function (err) {
  console.log("다시 주문해주세요..");
});

pr.then(function (resut) {
  console.log(resut + " 가지러가자");
})
  .catch(function (err) {
    console.log("다시 주문해주세요..");
  })
  .finally(function () {
    console.log("--- 주문 끝 ---");
  });
