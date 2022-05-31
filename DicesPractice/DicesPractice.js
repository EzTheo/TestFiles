const assignEyes = () => {
    for (let i = 1; i < 7; i++) {
        const diceList = document.querySelectorAll("[eyes=false]");
        let ran1 = Math.round((Math.random() * diceList.length) / 2);
        let ran2 = Math.round((Math.random() * diceList.length) / 2);
        while (ran1 == ran2 && diceList.length > 0) {
            ran1 = Math.round((Math.random() * diceList.length) / 2);
        }
        diceList[ran1].setAttribute("eyes", i);
        diceList[ran2].setAttribute("eyes", i);
    }
};

const createDices = () => {
    for (let row = 0; row < 2; row++) {
        for (let column = 0; column < 6; column++) {
            const newDice = createHTMLElement({
                type: "img",
                id: `[${row}-${column}]`,
                className: "dice",
                parent: "#container",
            });
            newDice.src = "terning0.png";
            newDice.setAttribute("eyes", false);
            newDice.addEventListener("click", guess);
        }
        const newBr = createHTMLElement({ type: "br", parent: "#container" });
    }
};
const guess = () => {
    event.target.setAttribute("selected", true);
    event.target.src = `terning${event.target.getAttribute("eyes")}.png`;
    const nodeList = document.querySelectorAll("[selected=true]");
    const Dices = document.querySelectorAll(".dice");
    if (nodeList.length == 2) {
        for (let dice = 0; dice < Dices.length; dice++) {
            Dices[dice].removeEventListener("click", guess);
        }
        if (nodeList[0].getAttribute("eyes") === nodeList[1].getAttribute("eyes")) {
            for (let dice = 0; dice < Dices.length; dice++) {
                Dices[dice].addEventListener("click", guess);
            }
            nodeList[0].style.filter = "grayscale(1)";
            nodeList[1].style.filter = "grayscale(1)";
            nodeList[0].removeAttribute("selected");
            nodeList[1].removeAttribute("selected");
        } else {
            setTimeout(() => {
                for (let i = 0; i < 2; i++) {
                    nodeList[i].src = `terning0.png`;
                }
                nodeList[0].removeAttribute("selected");
                nodeList[1].removeAttribute("selected");
                for (let dice = 0; dice < Dices.length; dice++) {
                    Dices[dice].addEventListener("click", guess);
                }
            }, 500);
        }
    }
};
const createHTMLElement = ({ type, id, className, parent }) => {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
};
const container = createHTMLElement({ type: "div", id: "container", parent: "body" });
createDices();
assignEyes();
