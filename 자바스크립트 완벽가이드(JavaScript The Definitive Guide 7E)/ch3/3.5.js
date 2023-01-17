let t = /^HTML/;
let text = "HTML is ...";
console.log(t.test(text)); //true

let a = /[1-9][0-9]*/;
let text1 = 00; //0이 아닌 숫자가 하나있어야하고, 그 뒤 숫자는 제한없음.
console.log(a.test(text1)); //false

let b = /\bjavascript\b/i;
let text2 = "JAVASCRIPT is ...";
console.log(b.test(text2)); //true
console.log(b.test(text)); //false

console.log(text.search(b)); //-1 : 없음
console.log(text.match(t));
console.log(text.replace(t, "*"));
console.log(text.split(/\D/));
