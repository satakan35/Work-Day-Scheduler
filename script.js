// on ready
$(document).ready(function(){

// save button functionality

$(".saveBtn").on("click", function(){
    
    var time = $(this).parent().attr('id');
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time. value);
    
})

$(".btntime").on("click",function () {
    var d = new Date();
    console.log(d)
    d.getHours();
    
    document.getElementById("demo").innerHTML = d;
    

 });
// hour updater


// calling updater
function hourUpdater(){
    // gets the current number of hours
    var currentHour = 11;
    // moment().hours();

    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        // check to see if we have passed this time
        if(blockHour < currentHour){

        }
        else if(blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            
        }
    });
}
hourUpdater();
var internal = setInterval(hourUpdater, 15000);
// loading local storage saved
$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem("hour-10"));
$('#hour-11 .description').val(localStorage.getItem("hour-11"));
$('#hour-12 .description').val(localStorage.getItem("hour-12"));
$('#hour-13 .description').val(localStorage.getItem("hour-13"));
$('#hour-14 .description').val(localStorage.getItem("hour-14"));
$('#hour-15 .description').val(localStorage.getItem("hour-15"));
$('#hour-16 .description').val(localStorage.getItem("hour-16"));
$('#hour-17 .description').val(localStorage.getItem("hour-17"));

$("currentDay").text(moment().format("dddd, mmm Do"));


// displaying current day on the page


});