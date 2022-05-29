class Content {
    constructor({ page, rows, columns, matrix }) {
        this.page = page;
        this.rows = rows;
        this.columns = columns;
        this.matrix = matrix
            ? matrix
            : new Array(this.rows).fill(0).map(() => new Array(this.columns).fill(0));
    }
}

class GridItem {
    constructor(type) {
        this.type = type;
    }
    setMatrixValue() {
        const newItem = document.createElement(this.type);
    }
}
class Ghost extends GridItem {
    constructor() {
        super([arguments]);
    }
}
const testContent = new Content({ rows: 5, columns: 3 });
console.table(testContent.matrix);
