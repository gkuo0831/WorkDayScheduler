//Telling the js to run the html and then css:
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  //creating save button for calendar events
  $(".save").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".event").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  //creating localstorage for every hour:
  $("#9Am .event").val(localStorage.getItem("9Am"));
  $("#10Am .event").val(localStorage.getItem("10Am"));
  $("#11Am .event").val(localStorage.getItem("11Am"));
  $("#12Am .event").val(localStorage.getItem("12Am"));
  $("#1Pm .event").val(localStorage.getItem("1Pm"));
  $("#2Pm .event").val(localStorage.getItem("2Pm"));
  $("#3Pm .event").val(localStorage.getItem("3Pm"));
  $("#4Pm .event").val(localStorage.getItem("4Pm"));
  $("#5Pm .event").val(localStorage.getItem("5Pm"));

  //creating a past/present/future for time
  function tracker() {
    var current = moment().hour();

    $(".block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, current);
    });
  }
});
