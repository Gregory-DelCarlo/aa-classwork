


const Inbox = {
    render: function render() {
        const newUL = document.createElement("ul");
        newUL.classList.add("messages");
        newUL.innerHTML = "An Inbox Message";
        return newUL;
    },
}

module.exports = Inbox;