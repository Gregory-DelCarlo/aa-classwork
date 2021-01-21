const followToggle = require("./follow_toggle.js");

const $buttons = $(".follow-toggle");
$buttons.each(function(ind, e) {
    new followToggle(e);
})
