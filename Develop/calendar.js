//Telling the js to run the html and then css:
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  var now = moment();

  console.log(now);
});
