/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
        return $.ajax({
            method: "POST",
            url: `/users/${id}/follow`, // use string interpolation to add the userID to our path
            dataType: "JSON"
        });
    },
  
    unfollowUser: id => {
        return $.ajax({
            method: "DELETE",
            url: `/users/${id}/follow`, // use string interpolation to add the userID to our path
            dataType: "JSON"
        });
    }
  };
  
  module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

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
                console.log("hit unfollow");
                this.render();

                APIUtil.unfollowUser(this.userId).then(() => {
                    this.followState = "unfollowed";
                    console.log("currently unfollowing");
                    this.render();
                }).fail(() => {console.log("Didn't follow/unfollow")});
            } else {
                this.followState = "following";
                console.log("hit follow");
                this.render();

                APIUtil.followUser(this.userId).then(() => {
                    this.followState = "followed";
                    console.log("currently following");
                    this.render();
                }).fail(() => {console.log("Didn't follow/unfollow")});  
            };
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