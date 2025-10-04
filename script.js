function makeBoard(rows, cols) {
    let board = document.querySelector(".board");
    board.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let btn = document.createElement("button");
            board.appendChild(btn);
        }
    }
}
// check which page

if (document.querySelector(".board-9")) {
    makeBoard(9, 9);
}
if (document.querySelector(".board-16")) {
    makeBoard(16, 16);
}
if (document.querySelector(".board-30x16")) {
    makeBoard(16, 30);
}
