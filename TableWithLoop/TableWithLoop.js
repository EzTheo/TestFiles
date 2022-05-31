function createHTMLElement({ type, className, id, parent }) {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.id = id;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
}

for (let row = 1; row <= 10; row++) {
    createHTMLElement({ type: "tr", className: "tr", id: `row${row}`, parent: "table" });
    for (let column = 1; column <= 10; column++) {
        const newTd = createHTMLElement({
            type: "td",
            className: "td",
            id: `[${row}-${column}]`,
            parent: `#row${row}`,
        });
        newTd.innerHTML = row * column;
        newTd.addEventListener("click", () => {
            if (event.target.hasAttribute("selected")) {
                event.target.removeAttribute("selected");
                event.target.style.filter = "brightness(100%)";
            } else {
                event.target.setAttribute("selected", true);
                event.target.style.filter = "brightness(125%)";
            }
        });
    }
}
