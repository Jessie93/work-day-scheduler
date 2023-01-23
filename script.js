// Note: normally this symbol $ represents that jquary is being used


// Code below shows the date | dddd Do MMMM = day, date and month 
// currentDay id was given in pre code
$("#currentDay").text(moment().format('dddd Do MMMM'));


// shows the current time
var currentTime = moment().format('HH:mm:ss');
console.log(currentTime);

// Function to add colours to the calendar 
function colour() {
    // this code gets the current hour using moment
    var hour = moment().hours();
// function for all Element with the class time-block
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
//  code below checks if the time is in the future, present or past and gives it a colour in the CSS. Ive used a switch statement as i like them more but you could use an If statement. ive also had to ass come class's to make this section of code to work
        switch (true) {
            case currentHour > hour:
                $(this).addClass("future");
                break;
            case currentHour === hour:
                $(this).addClass("present");
                break;
            default:
                $(this).addClass("past");
                break;
        }
    });
};

// Function for the save button
function saveTask() {
    // added a click event listener. when the button is clicked the following happens
    $(".saveBtn").on("click", function() {
        // get the text of the hour element and the value of the task input
        var time = $(this).siblings(".hour").text();
        var task = $(this).siblings(".task").val();

        // save the calendar task to local storage
        localStorage.setItem(time, task);
    });
}

// This saves the task
    saveTask();


// function that saves info when the page is refreshed
function oldTask() {
    // get all elements with the class "task"
    var taskEl = $(".task");
    // code loops through task elements gets the item from local storage
    taskEl.each(function() {
        var time = $(this).siblings(".hour").text();
        var task = localStorage.getItem(time);
        $(this).val(task);
    });
}


// Need to call both these functions so that they appear when the page is refreshed. 
//They need to be together and last so that they correctly display the hour and tasks
colour();
oldTask();
