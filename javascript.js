const grid = document.querySelector("#grid");

let n = 16;

for (let i = 0; i < n; i++) {
    let row = document.createElement("div");
    grid.appendChild(row);
    row.classList.add("row");

    for (let j = 0; j < n; j++) {
        let col = document.createElement("div");
        col.addEventListener("mouseenter", () => {
            col.classList.add("hover");
        })
        row.appendChild(col);
        col.classList.add("col");
    }
}