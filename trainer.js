var MARGIN = 5;
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
    var $window = $(window);
    var $click_me = $("#click_me");
    var target_height = $click_me.height();
    var target_width = $click_me.width();
    var new_random_top = Math.floor(Math.random() * ($window.height() - target_height - MARGIN));
    var new_random_left = Math.floor(Math.random() * ($window.width() - target_width - MARGIN));
    debugger;

    $click_me.css({top: new_random_top, left: new_random_left});

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

