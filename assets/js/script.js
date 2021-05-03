// Use Moment.js to format today's date for the jumbotron
var today = moment();
$("currentDay").text(today.format("dddd, MMMM Mo - YYYY"));

function init() {
    renderStoredText();
    backgroundColor();
}

function renderStoredText() {
    text9am.textContent = localStorage.getItem("text9am");
    text10am.textContent = localStorage.getItem("text10am");
    text11am.textContent = localStorage.getItem("text11am");
    text12pm.textContent = localStorage.getItem("text12pm");
    text1pm.textContent = localStorage.getItem("text1pm");
    text2pm.textContent = localStorage.getItem("text2pm");
    text3pm.textContent = localStorage.getItem("text3pm");
    text4pm.textContent = localStorage.getItem("text4pm");
    text5pm.textContent = localStorage.getItem("text5pm");

}

// Individual text input boxes for each hour
var text9am = document.getElementById("09");
var text10am = document.getElementById("10");
var text11am = document.getElementById("11");
var text12pm = document.getElementById("12");
var text1pm = document.getElementById("13");
var text2pm = document.getElementById("14");
var text3pm = document.getElementById("15");
var text4pm = document.getElementById("16");
var text5pm = document.getElementById("17");
// Variable for each save button.
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var button5 = document.getElementById("btn5");
var button6 = document.getElementById("btn6");
var button7 = document.getElementById("btn7");
var button8 = document.getElementById("btn8");
var button9 = document.getElementById("btn9");

// Event listener for each save button
button1.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text9am", text9am.value);
});
button2.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text10am", text10am.value);
});
button3.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text11am", text11am.value);
});
button4.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text12pm", text12pm.value);
});
button5.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text1pm", text1pm.value);
});
button6.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text2pm", text2pm.value);
});
button7.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text3pm", text3pm.value);
});
button8.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text4pm", text4pm.value);
});
button9.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text5pm", text5pm.value);
});

// Function change background of textarea based on the hour
function backgroundColor() {
    // Variable to grab the current hour in 24hr format
    var currentHour = moment().format("H");
    console.log(currentHour);
    // Variable to get all textarea elements that have the class "text"
    var timeBlockText = document.querySelectorAll(".text");
    console.log(timeBlockText);

    for (var i = 0; i < timeBlockText.length; i++) {
        // Get IDs from the i variable string
        var textAreaID = timeBlockText[i].id;
        console.log(textAreaID);
        // Get element
        var workID = document.getElementById(timeBlockText[i].id)
        console.log(workID);
        // Change background color as per class in CSS
        if (textAreaID < currentHour) {
            $(workID).addClass("past");
        } else if (textAreaID == currentHour) {
            $(workID).addClass("present");
        } else {
            $(workID).addClass("future");
        }        
    }    
}

init();