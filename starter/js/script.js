// Load DayJS advanced format plugin.
dayjs.extend(window.dayjs_plugin_advancedFormat)

// 01. Display current day at the top of the calender when a user opens the planner.
var currentDay = dayjs();
$("#currentDay").text(currentDay.format("dddd, MMM Do YYYY"));

// 03. Color-code each timeblock based on past, present (red), and future (green) when the timeblock is viewed.
function colourCode() {
    // Assign current hour to variable
    var currentHour = dayjs();
    
    $(".time-block").each(function() {
        var timeSlot = parseInt($(this).attr("id").split(".hour")[1]);

        // If timeSlot is less than currentHour remove previous classes and add .past
        if (timeSlot < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

        // If timeSlot is same as currentHour remove previous classes and add .present
        else if (timeSlot === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }

        // Else add .future
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
}

// 04. Allow a user to enter an event when they click a timeblock.

// 05. Save event in local storage when the save button is clicked in that timeblock.

// 06. Persist events between refreshes of a page.


colourCode();