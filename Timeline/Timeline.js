//Object Classes
class Box {
    constructor({ type, className, parent } = {}) {
        this.box = createHTMLElement({
            type: type ?? "div",
            className: className ?? "box",
            parent: parent ?? undefined,
        });
        this.box.addEventListener("click", this.clicked.bind(this));
        return this;
    }
    clicked() {
        const popUp = createHTMLElement({
            type: "div",
            id: "popup",
            parent: "#timeline",
        });
        const newContainer = createHTMLElement({
            type: "div",
            id: "popup-container",
            parent: "#popup",
        });
        newContainer.innerHTML = this.box.innerHTML;
        const popUpCross = createHTMLElement({
            type: "div",
            id: "popup-cross",
            parent: "#popup-container",
        });
        popUp.setAttribute("tabindex", 0);
        popUp.addEventListener("focusout", () => popUp.remove());
        popUpCross.addEventListener("click", () =>
            document.querySelector("#popup").remove()
        );
        popUp.focus();
        return this;
    }
    addTitle(title) {
        this.box.innerHTML = title;
        return this;
    }
    addTag(name, value) {
        this.box.setAttribute(name, value);
        return this;
    }
    removeTag(name) {
        this.box.removeAttribute(name);
        return this;
    }
}
class Observasjon extends Box {
    constructor() {
        super({ parent: "#observations-container" });
    }
}
class Hendelse extends Box {
    constructor() {
        super({ parent: "#events-container" });
    }
}

//Objects
const test1 = new Observasjon().addTag("tag1", true).addTitle("Test");
const test2 = new Hendelse().addTitle("Test 2");
const test4 = new Hendelse().addTitle("Test");
const test5 = new Observasjon().addTitle("Test");
const test6 = new Hendelse().addTitle("Test");
const test11 = new Hendelse().addTitle("Test");
const test7 = new Hendelse().addTitle("Test");
const test8 = new Hendelse().addTitle("Test");
const test9 = new Hendelse().addTitle("Test");

//Functions
function createHTMLElement({ type, id, className, parent }) {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
}
