$(document).ready(function() {

var m = moment();

// shows the current date
var newM = m.format("dddd MMM Mo YYYY");

// shows the current time in 12hr format, assigned to a var.
var theCurrentTime = parseInt(moment().format("hh"));
console.log(theCurrentTime);

// sets current day below the title
var myCurrentDate = $("#currentDate").text(newM);

// styling the date
myCurrentDate.css("font-size", "20px");
myCurrentDate.css("font-weight", "bold");
const rows = document.getElementsByClassName("newRows");
let currentHour = parseInt(moment().format('H'));

//used for each method to compare the current time with my id's of each text area tag in the html.
Array.from(rows).forEach(textarea => {
  let
    theTaIdString = textarea.id,
    theTaHour;
  if (theTaIdString) {
    theTaHour = parseInt(theTaIdString);
  }
  if (theTaHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === theTaHour) {
      setColor(textarea, "red");
    } else if ((currentHour < theTaHour) && (currentHour > theTaHour - 6)) {
      setColor(textarea, "green");
    } else if ((currentHour > theTaHour) && (currentHour < theTaHour + 6)) {
      setColor(textarea, "lightgrey");
    } else {
      setColor(textarea, "lightgrey");
    }
  }
});

//created this function to input the parameters of an element and color in the above section.
function setColor(element, color) {
  element.style.backgroundColor = color;
}

});

// buttons no longer refresh the page upon click
$( ".saveBtn" ).click(function( event ) {
    event.preventDefault();
  });

