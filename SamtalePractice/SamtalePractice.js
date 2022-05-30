const stylesheet = new CSSStyleSheet();
document.adoptedStyleSheets.push(stylesheet);
class Test {
    constructor({ matrixRows, matrixColumns, matrix }) {
        this.items = [];
        this.matrixRows = matrixRows;
        this.matrixColumns = matrixColumns;
        this.matrix = matrix
            ? new Array(this.matrixRows)
                  .fill(0)
                  .map(() => new Array(this.matrixColumns).fill(0))
            : undefined; //Muligens bruke ?. på disse
    }
    createGrid() {
        stylesheet.addRule(
            "body",
            `grid-template-rows: repeat(auto-fill, ${100 / this.matrixRows}vh);
            grid-template-columns: repeat(auto-fill, ${
                100 / this.matrixColumns
            }vw)`
        );
        for (let x in this.items) {
            document.querySelector("body").append(this.items[x]);
        }
        return this;
    }
    createItem(type, className) {
        const newItem = document.createElement(type);
        newItem.className = className;
        this.items.push(newItem);
        return this;
    }
}

const test = new Test({ matrixRows: 2, matrixColumns: 4, matrix: true })
    .createItem("img", "ghost") //Hent inn en JSON fil med de ulike tingene. Ghost har matrixValue 1 osv
    .createItem("img", "grid")
    .createGrid();
