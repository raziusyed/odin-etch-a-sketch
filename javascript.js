const grid = document.querySelector("#grid");

let n = 16;

for (let i = 0; i < n; i++) {
    let row = document.createElement("div");
    grid.appendChild(row);

    for (let j = 0; j < n; j++) {
        row.appendChild(document.createElement("div"));
    }
}