// Load DayJS advanced format plugin.
dayjs.extend(window.dayjs_plugin_advancedFormat)

// 01. Display current day at the top of the calender when a user opens the planner.
var currentDay = dayjs();
$("#currentDay").text(currentDay.format("dddd, MMM Do YYYY"));

// 02. Present timeblocks for standard business hours when the user scrolls down.
var businessHours = [
    {
        timeblock: "8:00 AM",
        task: "",
    },
    {
        timeblock: "9:00 AM",
        task: "",
    },
    {
        timeblock: "10:00 AM",
        task: "",
    },
    {
        timeblock: "11:00 AM",
        task: "",
    },
    {
        timeblock: "12:00 PM",
        task: "",
    },
    {
        timeblock: "13:00 PM",
        task: "",
    },
    {
        timeblock: "14:00 PM",
        task: "",
    },
    {
        timeblock: "15:00 PM",
        task: "",
    },
    {
        timeblock: "16:00 PM",
        task: "",
    }
];

function workTimeblocks() {
    for (var i = 0; i < businessHours.length; i++) {
        // make a <div> for each timeblock and append to container <div>
        var timeblockRow = $("<div></div>");
        $('#container').append(timeblockRow); 
    }
}
// 03. Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// 04. Allow a user to enter an event when they click a timeblock.

// 05. Save event in local storage when the save button is clicked in that timeblock.

// 06. Persist events between refreshes of a page.