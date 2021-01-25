import Router from "./router.js";

document.addEventListener("DOMContentLoaded", () => {

    const sideBar = Array.from(document.querySelectorAll(".sidebar-nav li"));
    
    sideBar.forEach( li => {
        li.addEventListener("click", el => {
            let newLocation = li.innerText.toLowerCase();
            window.location.hash = newLocation;
        });
    });

    const content = document.querySelector(".content");
    const router = new Router(content);
    router.start();
});