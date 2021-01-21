class FollowToggle {
    constructor (e) {
        debugger
        this.$e = $(e);
        this.userId = this.$e.data("user-id");
        this.followState = this.$e.data("initial-follow-state");
    }
}

module.exports = FollowToggle