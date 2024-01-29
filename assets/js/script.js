
var timeblocksContainer = $("#time-blocks")
var timeblocksContainer = document.querySelector(".container")
var now = dayjs().format("HH");
var saveBtn = $(".saveBtn")

//display current date and time

var dateTime = $(document).ready(function () {
    var today = dayjs();
    $("#date-time").text("Date: " + today.format("ddd D MMM YYYY, HH:mm"));
});

// create timeblocks

var myWorkDay = [
    {
        id: "0",
        hour: "9",
        ampm: " am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        ampm: " am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        ampm: " am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        ampm: " pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "1",
        ampm: " pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "2",
        ampm: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "3",
        ampm: " pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "4",
        ampm: " pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "5",
        ampm: " pm",
        reminder: ""
    }
];

for (var i = 0; i < myWorkDay.length; i++) {
    var timeBlock = myWorkDay[i];
};

// add timeblock container to html
myWorkDay.forEach(function (timeBlock) {
    var timeLabel = timeBlock.hour + timeBlock.ampm;
    var blockColor = colorRow(timeLabel);
    var row =
        '<div class="time-block" id="' +
        '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
        timeLabel +
        '</div><textarea class="form-control ' +
        blockColor +
        '">' +
        timeBlock.reminder +
        '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    /* Adding rows to container div */
    $(".container").append(row);


});
function colorRow(time) {
    var planNow = dayjs(now).format("HH");
    var planEntry = dayjs(time, "HH").format("HH");
    if (planNow > planEntry) {
        return "past";
    } else if (planNow < planEntry) {
        return "future";
    } else {
        return "present";
    }
}

// save schedule

$("saveBtn").on("click", function () {
    var planEntry = $(this).siblings("textarea").val();
    localStorage.setItem("textarea", JSON.stringify(planEntry));
});

// clear schedule
function clearScreen() {
    // Clear the options
    scheduleInput.innerHTML = "";
}

$("#clearBtn").on("click", function () {
    localStorage.clear();
    clearScreen();
});