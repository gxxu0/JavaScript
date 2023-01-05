function* fn() {
  try {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
  } catch (e) {
    console.log(e);
  }
}

const a = fn();
////////////////////////////////////
function* fn() {
  yield 4;
  yield 5;
  yield 6;
}
const b = fn();
////////////////////////////////////

function* fn() {
  const num1 = yield "첫번째 숫자를 입력하세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력하세요";
  console.log(num2);

  return num1 + num2;
}
const c = fn();

///////////////////////////////////////

function* fn() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const d = fn();
///////////////////////////////////////

function* gen1() {
  yield "W";
  yield "O";
  yield "R";
  yield "L";
  yield "D";
}
function* gen2() {
  yield "Hello, ";
  yield* gen1();
  yield "!";
}
