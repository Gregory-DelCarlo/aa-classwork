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
        this.$e.on("click", () => {
            let method = ""
            this.followState ? method = "DELETE" : method = "POST";
            debugger
            return $.ajax({
                method: method,
                url: `/users/${this.userId}/follow`,
                data: {id: this.userId},
                dataType: "JSON"
            }).then(success => {
                if (method === "POST") {
                    this.followState = true;
                } else if (method === "DELETE") {
                    this.followState = false;
                }
                this.render();
            }).fail(failure => {
                console.log("Didn't follow/unfollow")
            })
        });
    }
}

module.exports = FollowToggle;