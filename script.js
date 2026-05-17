const container = document.querySelector(".container");
const body = document.querySelector("body");
const btn = document.querySelector("button");

body.style.textAlign = "center";
btn.style.margin = "10px";
btn.style.fontSize = "30px";
btn.style.padding = "5px 10px"
container.style.display = "flex";
container.style.width = "960px";
container.style.flexWrap = "wrap";

generateSquares(16);

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let size = Number(prompt("Please enter the size:"));
    generateSquares(size);
})

// Use event delegation: see if the target contains class 'mesh'
container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("mesh")) {
        if (!e.target.dataset.color) {
            e.target.dataset.color = randomColor();
            e.target.dataset.darkness = 0;
        }

        let darkness = Number(e.target.dataset.darkness);

        if (darkness < 1) {
            darkness += 0.1;
        }
        
        e.target.dataset.darkness = darkness;
        e.target.style.backgroundColor = `rgba(${e.target.dataset.color}, ${darkness})`;
    }
})

function random256() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    return `${random256()}, ${random256()}, ${random256()}`;
}

function generateSquares(size) {
    container.textContent = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add('mesh');

            div.style.width = `${960/size}px`;
            div.style.height = div.style.width;
            div.style.border = "2px solid black";
            div.style.flexShrink = "0";

            container.appendChild(div);
        }
    }
}
