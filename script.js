var m = moment();

// shows the current date
var newM = m.format("dddd MMM Mo YYYY");

// shows the current time in 12hr format 
var theCurrentTime = parseInt(moment().format("hh"));
console.log(theCurrentTime);

// sets current day below the title
var myCurrentDate = $("#currentDate").text(newM);

// styling the date
myCurrentDate.css("font-size", "20px");
myCurrentDate.css("font-weight", "bold");

var hourNine = $("hour9")




function comparingTime (){
  if 
}














// buttons no longer refresh the page upon click
$( ".saveBtn" ).click(function( event ) {
    event.preventDefault();
  });

