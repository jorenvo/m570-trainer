var AMOUNT_TARGETS = 10;
var start_time;
var clicked_targets = 0;

function reposition_target () {
    var new_random_top = Math.floor(Math.random() * 900);
    var new_random_left = Math.floor(Math.random() * (1920 - 100));
    $("#click_me").css({top: new_random_top, left: new_random_left});

    clicked_targets++;

    if (clicked_targets >= AMOUNT_TARGETS) {
        alert("Clicked " + AMOUNT_TARGETS + " in " + (new Date() - start_time) / 1000 + " seconds");
    }
}

$(document).ready(function () {
    start_time = new Date();
    $("#click_me").on("click", reposition_target);
});

