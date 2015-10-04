
var lost = false;
window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = hoverEnd;
    var boundary = $$("div#maze div.boundary");
    for (var p = 0; p < boundary.length; p++) {
        boundary[p].onmouseover = overBoundary;
    }
};

function overBoundary() {
	"use strict";
    lost = true;
    $("status").textContent = "You lose!";
    var boundary = $$("div#maze div.boundary");
    for (var p = 0; p < boundary.length; p++) {
        boundary[p].addClassName("youlose");
    }
}

function startClick() {
    lost = false;
    $("status").textContent = "Challenge Yourself!!";
    var boundary = $$("div#maze div.boundary");
    for (var p = 0; p < boundary.length; p++) {
        boundary[p].removeClassName("youlose");
    }
}

function hoverEnd() {
    if (!lost) {
        $("status").textContent = "You win!!!!:)";
    }
}