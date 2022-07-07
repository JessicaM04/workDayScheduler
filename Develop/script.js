var day = moment().format("dddd") + ", " + moment().format("MMMM Do"); 
var time = moment().hour();
var eventIdTracker = 0;
var input = document.querySelectorAll("input");

for (var i = 0; i < input.length; i++) {
  console.log(input[i]);
  console.log(input[i].id);
  if (time == input[i].id) {
    input[i].classList.add("present");
  }
  
  if (time > input[i].id) {
    input[i].classList.add("past");
  }
  
  if (time < input[i].id) {
    input[i].classList.add("future");  
}
};  

function showCurrentDate() {
  var currentDayP = document.getElementById("currentDay");
  currentDayP.innerHTML = day;
}

function saveEvent() {
  var inputEvent = document.getElementById("inputEvent").value;
  localStorage.setItem("inputEvent", inputEvent);
  console.log(inputEvent);
 };

 function setInputColors() {
  var timeDiv = document.querySelector("div").value;
  console.log(timeDiv);
 }






showCurrentDate();
setInputColors();



