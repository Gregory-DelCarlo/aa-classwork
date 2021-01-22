const followToggle = require("./follow_toggle.js");

$( () => {
    // need to load the page before we try and pull anything from the html
    const $buttons = $("button.follow-toggle");
    $buttons.each(function(ind, e) {
        new followToggle(e);
    });
    const $users_search = $("nav.users-search");
    $users_search.each( function(ind, e) {
        new UsersSearch(e);
    })
});
