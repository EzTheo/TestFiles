const kuleEl = document.querySelector("#kule");
const kanonEl = document.querySelector("#kanon");
const monsterEL = document.querySelector("#monster");
const monsterWidth = monsterEL.getBoundingClientRect().width;
const monsterHeight = monsterEL.getBoundingClientRect().height;
let monsterY = 0;
let monsterX = 0;

const random = () => {
    monsterX = Math.round(Math.random() * (600 - monsterWidth));
    monsterY += 60;
    monsterEL.setAttribute("min-x", monsterX);
    monsterEL.setAttribute("max-x", monsterX + monsterWidth);
    monsterEL.setAttribute("min-y", monsterY);
    monsterEL.setAttribute("max-y", monsterY + monsterHeight);
    console.log(monsterEL.getAttribute("min-x"), monsterEL.getAttribute("max-x"));
    console.log(monsterEL.getAttribute("min-y"), monsterEL.getAttribute("max-y"));
    monsterEL.style.right = `${monsterX}px`;
    monsterEL.style.top = `${monsterY}px`;
};
random();

const skyt = () => {
    const x = document.querySelector("#x");
    const y = document.querySelector("#y");
    if (x.value >= 0 && y.value >= 0 && x.value && y.value) {
        kuleEl.style.top = `${y.value}px`;
        kuleEl.style.right = `${x.value}px`;
        kanonEl.style.right = `${y.value}px`;
        setTimeout(() => {
            if (
                monsterEL.getAttribute("min-x") <= x.value &&
                x.value <= monsterEL.getAttribute("max-x") &&
                monsterEL.getAttribute("min-y") <= y.value &&
                y.value <= monsterEL.getAttribute("max-y")
            ) {
                document.querySelector("#content").innerHTML = "";
                const popUp = createHTMLElement({
                    type: "div",
                    className: "popUp",
                    parent: "#content",
                });
                popUp.classList.add("victory");
                popUp.innerHTML = "DU VANT";
            } else {
                if (monsterY > 450) {
                    document.querySelector("#content").innerHTML = "";
                    const popUp = createHTMLElement({
                        type: "div",
                        className: "popUp",
                        parent: "#content",
                    });
                    popUp.classList.add("defeat");
                    popUp.innerHTML = "DU TAPTE";
                }
            }
            random();
        }, 1000);
    }
};

const createHTMLElement = ({ type, id, className, parent }) => {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
};
