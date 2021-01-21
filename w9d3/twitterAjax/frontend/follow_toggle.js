class FollowToggle {
    constructor (e) {
        // debugger
        this.$e = $(e);
        this.userId = this.$e.data("user-id");
        this.followState = this.$e.data("initial-follow-state");
        debugger
        console.log(this.followState);
        this.render();
    }

    render() {
        if (this.followState === false){
            this.$e.text("Follow!");
        }else {
            this.$e.text("Unfollow!");
        };
    };
}

module.exports = FollowToggle;