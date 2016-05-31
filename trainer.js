var AMOUNT_TARGETS = 10;
var start_time = undefined;
var clicked_targets = 0;

// average with regular mouse is 9.5s

function reset_state () {
    $("#click_me").css({top: 5, left: 5});
    clicked_targets = 0;
    start_time = undefined;
}

function reposition_target () {
    var new_random_top = Math.floor(Math.random() * 900);
    var new_random_left = Math.floor(Math.random() * (1920 - 100));
    $("#click_me").css({top: new_random_top, left: new_random_left});

    clicked_targets++;

    if (! start_time) {
        start_time = new Date();
    }

    if (clicked_targets >= AMOUNT_TARGETS) {
        alert("Clicked " + AMOUNT_TARGETS + " in " + (new Date() - start_time) / 1000 + " seconds");
        reset_state();
    }
}

$(document).ready(function () {
    $("#click_me").on("click", reposition_target);
});

