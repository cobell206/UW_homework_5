
// Variable to store current time and fill in textbox
var current_date = luxon.DateTime.local()
$("#currentDay").text(current_date)

console.log(current_date.hour);

var test = $(".input_box")

console.log(test);
console.log(test[0]);
console.log(test[0].label);
console.log(typeof(test[0]))
console.log(Object.keys(test[0]))

for(var i=0; i<test.length; i++) {
    console.log(test[i].label)
}


// Array of input boxes
// Loop through each box and assign appropriate class
var input_boxes = ['11_textbox', '12_textbox', '13_textbox', '14_textbox', '15_textbox', '16_textbox']

input_boxes.forEach(function(item, index) {
    hour_ = $("#" + item).attr("data-hour")
    console.log(hour_)
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

