var Body = {
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
};
var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a");
    var cnt = 0;
    while (cnt < alist.length) {
      alist[cnt].style.color = color;
      cnt += 1;
    }
  },
};

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";
    Links.setColor("white");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";
    Links.setColor("blue");
  }
}
