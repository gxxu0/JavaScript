const car = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
};
const bmw = {
  color: "red",
  navigator: 1,
};
const benz = {
  color: "black",
};
const audi = {
  color: "blue",
};
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

////////////////////////
// const x5 = {
//   color: "white",
//   name: "x5",
// };
// x5.__proto__ = bmw;

/////////////////////////
// const car1 = {
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log("drive..");
};
const x5 = new Bmw("red");
const z4 = new Bmw("blue");

// x5.__proto__ = car1;
// z4.__proto__ = car1;

//////////////////////////
const BmwEx = function (color) {
  this.color = color;
};

// BmwEx.prototype.wheels = 4;
// BmwEx.prototype.drive = function () {
//   console.log("drive..");
// };
// BmwEx.prototype.navigator = 1;
// BmwEx.prototype.stop = function () {
//   console.log("STOP");
// };

// BmwEx.prototype = {
//   wheels: 4,
//   drive: function () {
//     console.log("drive..");
//   },
//   navigator: 1,
//   stop: function () {
//     console.log("STOP");
//   },
// };

BmwEx.prototype = {
  constructor: BmwEx,
  wheels: 4,
  drive: function () {
    console.log("drive..");
  },
  navigator: 1,
  stop: function () {
    console.log("STOP");
  },
};
const ex1 = new BmwEx("red");
const ex2 = new BmwEx("blue");

////////////////////////////////
const BmwEx2 = function (color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};
const ex3 = new BmwEx2("red");
