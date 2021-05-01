// Use Moment.js to format today's date for the jumbotron
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Mo - YYYY"));