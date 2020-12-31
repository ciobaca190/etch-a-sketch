const grid = document.querySelector("#grid");
const buttonClear = document.querySelector("#clear");

function createGrid(squares) {
	grid.innerHTML = "";
	for(let i = 0; i < squares * squares; i++) {
		const square = document.createElement("div");
		square.classList.add("square");
		grid.appendChild(square);
	}
	grid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
}
createGrid(16);

buttonClear.addEventListener("click", e => {
	let gridSize = prompt("Enter the new grid size (Max. 100): ", 16) || 16;
	if (gridSize > 100) return;
	createGrid(gridSize);
});

grid.addEventListener("mouseover", e => {
	e.target.style.backgroundColor = "black";
});