var timeblocksContainer = $("#time-block")
var timeblocksContainer = document.querySelector(".container")
var now = dayjs().format("HH");
var saveBtn = $(".saveBtn");


//display current date and time

var dateTime = $(document).ready(function () {
    var today = dayjs();
    $("#date-time").text("Date: " + today.format("ddd D MMM YYYY, HH:mm"));
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
    $(".timeblocks-container").append(row);
});

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
    window.localStorage.setItem(hourSpan, userInput);

    // Display local storage in reminder
    $(".time-block").each(function () {
        var timeRow = $(this).attr("id");
        var userEntry = window.localStorage.getItem(timeRow); // Use timeRow as the key, not userInput
        if (userEntry !== null) {
            $(this).val(userEntry); // Update the value of the textarea directly
        };
    });
    console.log(userInput);
});

// clear schedule


$("#clear-cal").on("click", function () {
    window.localStorage.clear();
});