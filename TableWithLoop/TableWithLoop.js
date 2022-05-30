//Her lages alle elementene på samme sted for å unngå ekstra linjer.
function createHTMLElement({ type, className, id, parent }) {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.id = id;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
}
//Lager Table
createHTMLElement({ type: "table", parent: "body" });

//Looper over rader 10 ganger
for (let row = 1; row < 11; row++) {
    //Lager en tr
    createHTMLElement({ type: "tr", className: "tr", id: `row${row}`, parent: "table" });
    //Looper over columns 10 ganger
    for (let column = 1; column < 11; column++) {
        //Lager en td satt til "const newTd". Dette fordi den brukes under.
        const newTd = createHTMLElement({
            type: "td",
            className: "td",
            id: `[${row}-${column}]`,
            parent: `#row${row}`,
        });
        //Legger til tallet
        newTd.innerHTML = row * column;
        //Lager eventListener
        newTd.addEventListener("click", () => console.log("CLICKED"));
    }
}
