const grid = document.querySelector("#grid");

let gridSize = 16;

let squaresArray = [];

for (let i = 0; i < gridSize * gridSize; i++){
    squaresArray.push(document.createElement("div"));
}

console.log(squaresArray);