const stylesheet = new CSSStyleSheet();
document.adoptedStyleSheets.push(stylesheet);
class Content {
    constructor({ page, rows, columns, matrix }) {
        this.page = page;
        this.items = [];
        this.rows = rows;
        this.columns = columns;
        this.matrix = new Array(this.rows)
            .fill(0)
            .map(() => new Array(this.columns).fill(0));
    }
    createGrid() {
        stylesheet.addRule(
            "body",
            `grid-template-rows: repeat(auto-fill, ${100 / this.rows}vh);
            grid-template-columns: repeat(auto-fill, ${100 / this.columns}vw)`
        );
        return this;
    }
    createGridItems(ghostX, ghostY, blobX, blobY) {
        const ghost = new Ghost(ghostX, ghostY).createItem();
        const blob = new Blob(blobX, blobY).createItem();
        this.items.push(ghost);
        this.items.push(blob);
        return this;
    }
}

class GridItem {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }
}
class Ghost extends GridItem {
    constructor(x, y) {
        super("ghost", x, y);
    }
    createItem() {
        const newItem = document.createElement("img");
        newItem.className = "ghost";
        newItem.src = "./Ghost.PNG";
        document.querySelector("body").appendChild(newItem);
        return this;
    }
}
class Blob extends GridItem {
    constructor(x, y) {
        super("blob", x, y);
    }
    createItem() {
        const newItem = document.createElement("div");
        newItem.className = "blob";
        document.querySelector("body").appendChild(newItem);
        return this;
    }
}
const Screen = new Content({ rows: 1, columns: 2 })
    .createGrid()
    .createGridItems(2, 3, 3, 3);
