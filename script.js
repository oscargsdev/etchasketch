const grid = document.querySelector("#grid");



let gridSize = 50;
// let s = 500 / (gridSize);

// grid.style.height = (s * 16) + "px";
// grid.style.width = (s * 16) + "px";

let squaresArray = [];

for (let i = 0; i < gridSize; i++){
    grid.appendChild(document.createElement("div"));

}

let rows = grid.childNodes;
let rowsA = Array.from(rows);
rowsA.shift();

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






// squaresArray.forEach((row)  => {

//     row.classList.add("flexContainerHorizontal");
//     grid.appendChild(row);

//    for (int j = 0; j < gridSize; j++){
       
//    }

   


    
  


