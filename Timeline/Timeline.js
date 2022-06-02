class Box {
    constructor({ type, className, parent } = {}) {
        const newBox = createHTMLElement({
            type: type ?? "div",
            className: className ?? "box",
            parent: parent ?? undefined,
        });
        newBox.addEventListener("click", this.clicked.bind(this));
        return this;
    }
    clicked() {
        console.log("click");
        return this;
    }
}
class Observasjon extends Box {
    constructor() {
        super({ parent: "#observations-container" });
    }
    clicked() {
        console.log("Observasjon");
    }
}
class Hendelse extends Box {
    constructor() {
        super({ parent: "#events-container" });
    }
    clicked() {
        console.log("hendelse");
    }
}
const createHTMLElement = ({ type, id, className, parent }) => {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
};

const test1 = new Observasjon();
const test2 = new Hendelse();
const test4 = new Hendelse();
const test5 = new Observasjon({});
const test6 = new Hendelse();
const test7 = new Hendelse();
const test8 = new Hendelse();
const test9 = new Hendelse();
