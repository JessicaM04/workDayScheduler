var day = moment().format("dddd") + ", " + moment().format("MMMM Do"); 
var time = moment().hour();
var eventIdTracker = 0;
var input = document.querySelectorAll("input");
var events = [];

var storedEvents = window.localStorage.getItem("events");
var storedEventsJSON = JSON.parse(storedEvents);

for (var i = 0; i < input.length; i++) {
  if (time == input[i].id) {
    input[i].classList.add("present");
  }
  
  if (time > input[i].id) {
    input[i].classList.add("past");
  }
  
  if (time < input[i].id) {
    input[i].classList.add("future");  
  }
  if(storedEventsJSON) {
    storedEventsJSON.some(element => {
      if (element.id === input[i].id) {
        input[i].value = element.value;
      }
    })
  }
}; 

function showCurrentDate() {
  var currentDayP = document.getElementById("currentDay");
  currentDayP.innerHTML = day;
}

function saveEvent() {
  for (var i = 0; i < input.length; i++) {
    if (input[i].value.length > 0) {
      // then we will add this to event object and store it
      var eventObj = {};
      eventObj.id = input[i].id;
      eventObj.value = input[i].value;
    
      //check if the event object already exists in the events array
      var doesExist = events.some(element => {
        if (element.id === eventObj.id) {
          return true;
        } else {
          return false;
        }
      })

      //if the object does not exist, add it
      if(!doesExist) {
        events.push(eventObj);
      }

      window.localStorage.setItem("events", JSON.stringify(events));
    }
  }
 }

showCurrentDate();