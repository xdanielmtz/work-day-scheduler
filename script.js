var m = moment();
var newM = m.format("dddd MMM Mo YYYY");

// sets current day bolow the title
var myCurrentDate = $("#currentDate").text(newM);
// styling the date
myCurrentDate.css("font-size", "20px");
myCurrentDate.css("font-weight", "bold");