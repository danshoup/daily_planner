// Use Moment.js to format today's date for the jumbotron
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Mo - YYYY"));

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
var text9am = document.querySelector("#text1");
var text10am = document.querySelector("#text2");
var text11am = document.querySelector("#text3");
var text12pm = document.querySelector("#text4");
var text1pm = document.querySelector("#text5");
var text2pm = document.querySelector("#text6");
var text3pm = document.querySelector("#text7");
var text4pm = document.querySelector("#text8");
var text5pm = document.querySelector("#text9");
// Variable for each save button.
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var button5 = document.querySelector("#btn5");
var button6 = document.querySelector("#btn6");
var button7 = document.querySelector("#btn7");
var button8 = document.querySelector("#btn8");
var button9 = document.querySelector("#btn9");

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

// Function to check the hour against the row hour
function backgroundColor() {
    // Variable to grab the current hour in 24hr format
    var currentHour = moment().format("ha");
    console.log(currentHour);
    var rowHour = document.querySelector(".hour").innerHTML;
    console.log(rowHour);

    if (currentHour = rowHour) {
        document.querySelector("textarea").classList.add("past");
    }
    // // If current hour is greater than the row hour, turn text area background grey
    // if (currentHour > rowHour) {
    //     document.querySelectorAll("textarea").classList.add("past");
    // // If current hour equals row hour, turn text are background red
    // } else if (currentHour === rowHour) {
    //     document.querySelectorAll("textarea").classList.add("present");
    // // Turn all other text area backgrounds green
    // } else {
    //     document.querySelectorAll("textarea").classList.add("future");
    // }
}

init();