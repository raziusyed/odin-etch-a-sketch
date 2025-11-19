let grid = document.querySelector("#grid");

let n = 16;

function createGrid(n) {
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
}

createGrid(n);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const sideLength = parseInt(prompt("Enter a side length (maximum: 100): "));

    if (Number.isNaN(sideLength)) {
        alert("Please enter a valid number");
        return;
    }

    if (sideLength > 100) {
        alert("Length too high!");
        return;
    }
    grid.remove();
    grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    button.parentNode.appendChild(grid);
    createGrid(sideLength);
});