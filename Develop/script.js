var day = moment().format("dddd") + ", " + moment().format("MMMM Do"); 
var eventIdTracker = 0;

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



