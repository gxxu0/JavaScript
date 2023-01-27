let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];
//1. 홀수만 추출
//2. 100이하의 수만 추출
//3. 5로 나눈 나머지가 0인 수만 추출

numbers = numbers.filter((value) => {
  return value % 2 !== 0 && value <= 100 && value % 5 === 0;
});

console.log(numbers);
