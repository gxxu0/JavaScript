var Body = {
  setBackgroundColor: function (color) {
    $("body").css("backgroundColor", color);
  },
  setColor: function (color) {
    $("body").css("color", color);
  },
};
var Links = {
  setColor: function (color) {
    $("a").css("color", color);
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
