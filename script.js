const grid = document.querySelector("#grid");

const gridSizeButton = document.querySelector("#gridSizeButton");


gridSizeButton.addEventListener("click", () =>{
    let gridSize = prompt("Enter size of grid", "50");

    if (gridSize > 100){
        alert("You cant enter a grid size greater than 100");
        return;
    }

    clearGrid();

    createGrid(gridSize);
});



function clearGrid(){
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
}


function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++){
        grid.appendChild(document.createElement("div"));
    
    }
    
    let rows = grid.childNodes;
    let rowsA = Array.from(rows);
    // rowsA.shift();
    
    console.log(rows);
    console.log(rowsA);
    
    rowsA.forEach((row) => {
    
        row.classList.add("row")
        row.style.height = "30px";
    
        for (let j = 0; j < gridSize; j++){
            row.appendChild(document.createElement("div"))
        }
    
        let sqrs = row.childNodes;
        let sqrA = Array.from(sqrs);
        
    
        console.log(sqrA);
    
        sqrA.forEach((sqr) => {
            sqr.classList.add("square");
            sqr.addEventListener('mouseover', function(e) {
                e.target.style.background = "black";
            });
        });
    
        
        
    });
}




   


    
  


