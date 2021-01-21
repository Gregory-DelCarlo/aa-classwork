/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const followToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$( () => {
    // need to load the page before we try and pull anything from the html
    const $buttons = $("button.follow-toggle");
    $buttons.each(function(ind, e) {
        let x = new followToggle(e);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map