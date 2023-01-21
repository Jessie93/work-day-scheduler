// Note: normally this symbol $ represents that jquary is being used


// Code below shows the date | dddd Do MMMM = day, date and month 
// currentDay id was given in pre code
$("#currentDay").text(moment().format('dddd Do MMMM'));


// shows the current time
var currentTime = moment().format('HH:mm:ss');
console.log(currentTime);

