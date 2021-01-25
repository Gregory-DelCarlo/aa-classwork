import * as DOMNodeCollection from "./dom_node_collection.js";

function $l(selector) {
    if (selector instanceof HTMLElement){
        return new DOMNodeCollection([selector]);
    }else {
        return new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));
    };
};

window.$l = $l;