var timeblocksContainer = $(".timeblocks-container");
var now = dayjs().format("HH");
var saveBtn = $(".saveBtn");


//display current date and time

$(document).ready(function () {
    var today = dayjs();
    $("#date-time").text("Date: " + today.format("ddd D MMM YYYY, HH:mm"));


    //console.log(userInput);
});



for (var i = 0; i < myWorkDay.length; i++) {
    var timeBlock = myWorkDay[i];
};

// add timeblock container to html
myWorkDay.forEach(function (timeBlock) {
    var timeLabel = timeBlock.hour;
    var blockColor = colorRow(timeLabel);

    var row = `
        <div class="time-block container" id="${timeBlock.id}">
            <div class="row no-gutters input-group">
                <div class="col-md-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">
                    ${timeLabel}
                </div>
                <textarea class="col-md-10 form-control time-block ${blockColor}" id="${timeBlock.hour}">${timeBlock.reminder}</textarea>
                <button class="col-md-1 saveBtn btn-block" type="submit">
                    <i class="fas fa-save"></i>
                </button>
            </div>
        </div>`;

    /* Adding rows to container div */
    timeblocksContainer.append(row);
});
function retrievePreviousReminders() {
    // Display local storage in reminder
    $(".hour").each(function () {
        var hourNotes = $(this).text();
        var previousEntry = localStorage.getItem(hourNotes); // Use hourNotes as the key, not userInput
        if (hourNotes !== null) {
            $(this).siblings(".time-block").val(previousEntry); // Update the value of the textarea directly
        };
    });
};

retrievePreviousReminders();

function colorRow(time) {
    var planNow = now;
    var planEntry = time;

    if (planNow < (planEntry)) {
        return "future";
    } else if (planNow > (planEntry)) {
        return "past";
    } else {
        return "present";
    }
}
// save schedule

$(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".time-block").val();
    var hourSpan = $(this).siblings(".hour").text();
    localStorage.setItem(hourSpan, userInput);
});

// clear schedule

$("#clear-cal").on("click", function () {
    localStorage.clear();
    location.reload();
});