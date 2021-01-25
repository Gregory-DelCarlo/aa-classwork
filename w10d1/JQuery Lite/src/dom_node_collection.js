class DOMNodeCollection {
    //HTMLelements will be array
    constructor (HTMLelements) {
        this.HTMLelements = HTMLelements;
    };
    
    
    html (str) {
        if (typeof str === "string") {
            this.HTMLelements.forEach ((el) => {
                el.innerHTML = str;
            });
        } else {
            return this.HTMLelements[0].innerHTML;
        }
    }
    
    empty () {
        this.html ("");
    }
    
    append (arg) {
        // let type = typeof arg;
        if (arg instanceof DOMNodeCollection) {
            let that = this
            arg.HTMLelements.forEach ((el) => {
                that.HTMLelements.forEach ((el2) => {
                    el2.innerHTML += el.outerHTML;
                });
            });
        } else if (arg instanceof HTMLElement) {
            this.HTMLelements.forEach ((el) => {
                el.innerHTML += arg.outerHTML;
            });
        } else {
            this.HTMLelements.forEach((el) => {
              el.innerHTML += arg;
            });
        }
    }


    attr (name, value) {
        
    };

    addClass () {

    };

    removeClass () {

    };

}



module.exports = DOMNodeCollection;