const APIUtil = require("./api_util");

class FollowToggle {
    constructor (e) {
        this.$e = $(e);
        this.userId = this.$e.data("user-id");
        if (this.$e.data("initial-follow-state")) {
            this.followState = "followed";
        } else {
            this.followState = "unfollowed";
        }
        this.render();
        this.handleClick();
    }

    render() {
        if (this.followState === "unfollowing" || this.followState === "following") {
            this.$e.prop("disabled", true);
        } else {
            this.$e.prop("disabled", false);
        }

        if (this.followState === "unfollowed") {
            this.$e.text("Follow!");
        }else if (this.followState === "followed") {
            this.$e.text("Unfollow!");
        };
    };

    handleClick() {
        this.$e.on("click", (e) => {
            e.preventDefault();
            if (this.followState === "followed") {
                this.followState = "unfollowing";
                this.render();

                APIUtil.unfollowUser(this.userId).then(() => {
                    this.followState = "unfollowed";
                    this.render();
                }).fail(() => {console.log("Didn't follow/unfollow")});
            } else {
                this.followState = "following";
                this.render();

                APIUtil.followUser(this.userId).then(() => {
                    this.followState = "followed";
                    this.render();
                }).fail(() => {console.log("Didn't follow/unfollow")});  
            };
        });
    }
}

module.exports = FollowToggle;