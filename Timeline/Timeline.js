class Box {
    constructor() {}
    create() {
        const newBox = createHTMLElement({
            type: "div",
            className: "box",
            parent: "#observations-container",
        });
        newBox.addEventListener("click", this.clicked);
        return this;
    }
    clicked() {
        console.log("click");
        return this;
    }
}
class Observasjon extends Box {
    constructor() {
        super();
    }
}
class Hendelse extends Box {
    constructor() {
        super();
    }
}
const createHTMLElement = ({ type, id, className, parent }) => {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
};

const test = new Box().create();
const test2 = new Box().create();
const test3 = new Box().create();
const test4 = new Box().create();
const test5 = new Box().create();
const test6 = new Box().create();
const test7 = new Box().create();
const test8 = new Box().create();
const test9 = new Box().create();
const test10 = new Box().create();
