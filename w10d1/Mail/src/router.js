class Router {
    constructor(node) {
        this.node = node;
    }

    start() {
        this.render();
        window.addEventListener("hashchange", () => {
            this.render();
        });
    }

    render() {
        // debugger
        this.node.innerHTML = "";
        let newP = document.createElement("p");
        newP.innerHTML = this.activeRoute();
        this.node.appendChild(newP);
    }

    activeRoute() {
        return window.location.hash.substr(1);
    }
}

module.exports = Router;