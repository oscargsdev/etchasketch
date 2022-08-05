const grid = document.querySelector("#grid");

let gridSize = 16;

let squaresArray = [];

for (let i = 0; i < gridSize * gridSize; i++){
    squaresArray.push(document.createElement("div"));
}

squaresArray.forEach((square)  => {

    square.classList.add("square");
    square.addEventListener('mouseover', function(e) {
        e.target.style.background = "black";
    });
    grid.appendChild(square);
    

});

