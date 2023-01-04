const mike = {
  name: "mike",
};
const tom = {
  name: "tom",
};
function showThisName() {
  console.log(this.name); //this는 window
}
showThisName(); //아무것도 안나옴. //this는 window
showThisName.call(mike); //this는 mike

////////////////////////////
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
update.call(mike, 2001, "singer");
console.log(mike);
