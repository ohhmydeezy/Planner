var timeblocksContainer = $("#time-blocks")
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
    <div>
        <div class="row no-gutters input-group">
            <div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">
                ${timeLabel}
            </div>
            <textarea class="form-control time-block">
                ${blockColor}
                ${timeBlock.reminder} 
            </textarea>
            <button class="saveBtn btn-block" type="submit">
                <i class="fas fa-save"></i>
            </button>
        </div>
    </div>;
`
    /* Adding rows to container div */
    $(".container").append(row);


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
});
// clear schedule
function clearScreen() {
    // Clear the options
    scheduleInput.textContent = "";
}

$("#clearBtn").on("click", function () {
    window.localStorage.clear();
    clearScreen();
});