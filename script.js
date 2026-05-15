const container = document.querySelector(".container");
container.style.display = "flex";
container.style.width = "960px";
container.style.flexWrap = "wrap";

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.style.width = "60px";
        div.style.height = "60px";
        div.style.border = "2px solid black";
        div.style.flexShrink = "0";

        container.appendChild(div);
    }
}