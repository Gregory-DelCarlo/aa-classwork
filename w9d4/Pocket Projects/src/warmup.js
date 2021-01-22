
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    if (htmlElement.children.length > 0) {
        htmlElement.removeChild(htmlElement.children[0])
    } 

    const p = document.createElement("p");
    p.textContent = string;
    htmlElement.appendChild(p)
};

htmlGenerator('Party Time.', partyHeader);

// module.exports = htmlGenerator;