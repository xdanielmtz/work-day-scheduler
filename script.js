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
let currentHour = parseInt(moment().format('hh'));

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





  function mySave() {
    var myContent = document.getElementById("9").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  function mySave10() {
    var myContent = document.getElementById("10").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  function mySave11() {
    var myContent = document.getElementById("11").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  function mySave12() {
    var myContent = document.getElementById("12").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  function mySave1() {
    var myContent = document.getElementById("1").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  function mySave2() {
    var myContent = document.getElementById("2").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  function mySave3() {
    var myContent = document.getElementById("3").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  function mySave4() {
    var myContent = document.getElementById("4").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  function mySave5() {
    var myContent = document.getElementById("5").value;
    localStorage.getItem("myContent");
    localStorage.setItem("myContent", myContent);

  }

  
    

    // save the button - onclick - 
    // create 2 variables that grab content from the html 
    // 1. value - data : var value = $(this).siblings(".newRows").val()
    // var theValue = $(this).siblings("")
    // 2. time - time block : $(this).parent().attr(id)
    // save the information to the local storage localStorage.setItem(time, value);

    // theId pertains to the time block - i.e. myContent

    // When grabbing from the local storage -
// $("#myContent .time").val(localStorage.getItem("myContent"))
// $("#myContent .time").val(localStorage.getItem("myContent"))










  