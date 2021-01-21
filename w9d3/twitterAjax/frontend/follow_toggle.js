const APIUtil = require("./api_util");

class FollowToggle {
    constructor (e) {
        this.$e = $(e);
        this.userId = this.$e.data("user-id");
        this.followState = this.$e.data("initial-follow-state");
        this.render();
        this.handleClick();
    }

    render() {
        if (this.followState === false){
            this.$e.text("Follow!");
        }else {
            this.$e.text("Unfollow!");
        };
    };

    handleClick() {
        this.$e.on("click", (e) => {
            e.preventDefault();
            if (this.followState) {
                APIUtil.unfollowUser(this.userId).then(() => {
                    this.followState = false;
                    this.render();
                }).fail(() => {console.log("Didn't follow/unfollow")});
            } else {
                APIUtil.followUser(this.userId).then(() => {
                    this.followState = true;
                    this.render();
                }).fail(() => {console.log("Didn't follow/unfollow")});
            };
        });
    }
    // return $.ajax({
    //     method: method,
    //     url: `/users/${this.userId}/follow`, // use string interpolation to add the userID to our path
    //     dataType: "JSON"
    // }).then(success => {
    //     if (method === "POST") {
    //         this.followState = true;
    //     } else if (method === "DELETE") {
    //         this.followState = false;
    //     }
    //     this.render();
    // }).fail(failure => {
    //     console.log("Didn't follow/unfollow")
}

module.exports = FollowToggle;