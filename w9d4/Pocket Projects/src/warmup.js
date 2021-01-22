
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement("p");
    p.textContent = string;
    htmlElement.appendChild(p)
};

// htmlGenerator('Party Time.', partyHeader);

// module.exports = htmlGenerator;