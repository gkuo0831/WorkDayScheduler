//Telling the js to run the html and then css:
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  //creating save button for calendar events
  $(".save").on("click", function () {
    localStorage.setItem(time, text);
  });
});
