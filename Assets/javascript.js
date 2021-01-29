
// Array of input boxes
var input_boxes = ['12_textbox', '13_textbox', '14_textbox', '15_textbox', '16_textbox']


// Function to load data into array
var calendar_data = [[], [], [], [], []]
var load_data = function() {
    if (localStorage.getItem("calendar_data")) {
        console.log("present")
        calendar_data = JSON.parse(localStorage.getItem("calendar_data"))
        
    }
    else {
        console.log("not here")
        
        localStorage.setItem("calendar_data", JSON.stringify(calendar_data))
    }
}

// Function to loop through textboxes and fill in saved data
var fill_in_saved_data = function() {
    for (var i = 0; i < calendar_data.length; i++) {
        $("#" + input_boxes[i]).val(calendar_data[i])
        console.log(calendar_data[i]);
    }
}


// Load data into array
load_data()

// Fill in data
fill_in_saved_data()


// Variable to store current time and fill in textbox
var current_date = luxon.DateTime.local()
$("#currentDay").text(current_date)


var test = $(".input_box")


// Loop through each box and assign appropriate class

input_boxes.forEach(function(item, index) {
    hour_ = $("#" + item).attr("data-hour")
    if (hour_ < current_date.hour) {
        $("#" + item).addClass("past")
    }
    else if (hour_ == current_date.hour) {
        $("#" + item).addClass("present")
    }
    else if (hour_ > current_date.hour) {
        $("#" + item).addClass("future")
    }
    
})

// Press button to save
$(".save_btn").on("click", function() {
    hour_ = $(this).data("hour")
    console.log(hour_)
    calendar_data[hour_ - 12] = $("#" + hour_ + "_textbox").val()
    console.log(calendar_data);
    localStorage.setItem("calendar_data", JSON.stringify(calendar_data))
})
