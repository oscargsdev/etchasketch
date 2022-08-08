const grid = document.querySelector("#grid");

const gridSizeButton = document.querySelector("#gridSizeButton");

const clearGridButton = document.querySelector("#clearGridButton");

const rainbowButton = document.querySelector("#rainbowButton");

let rainbow = false;
let gridS = 0;


gridSizeButton.addEventListener("click", initGrid);

clearGridButton.addEventListener("click", () =>{
    clearGrid();
    createGrid(gridS);
});

rainbowButton.addEventListener("click", () =>{
    if (!rainbow){
        rainbowButton.textContent = "Toggle to Black mode";
    }
    else{
        rainbowButton.textContent = "Toggle to Rainbow mode";
    }

    rainbow = !rainbow;

    clearGrid();
    createGrid(gridS);
})




function initGrid(){
    let gridSize = prompt("Enter size of grid", "50");

    if (gridSize > 100){
        alert("You cant enter a grid size greater than 100");
        return;
    }

    clearGrid();

    gridS = gridSize;

    createGrid(gridSize);
}


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
                if (rainbow){
                    let r = Math.floor(Math.random() * 257);
                    let g = Math.floor(Math.random() * 257);
                    let b = Math.floor(Math.random() * 257);

                    let rgb = "rgb("+r+","+g+","+b+")";

                    

                    e.target.style.background = rgb;

                }
                else{
                    e.target.style.background = "black";
                }
                
            });
        });
    
        
        
    });
}



initGrid();




   


    
  


