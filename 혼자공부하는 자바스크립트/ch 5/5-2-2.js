function callThreeTimes(callback) {
  for (let i = 0; i < 3; i++) {
    callback(i);
  }
}
callThreeTimes(function (i) {
  console.log(`${i}번쨰 함수 호출`);
});
