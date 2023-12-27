let grid = document.querySelector(".grid");

let ROWS = 25
let COLUMNS = 25
let SIZE = 25

let currentcell = undefined
let visitedcell = undefined // ==> hunt and kill algorithm
let stack = [] // ==> dfs , hunt and kill , growingtree
let currentcol = 0 // binary search
let currentrow = 0 // binary search
let canfloodfill = true //solve_bfs 

$(".cell").css("width" , SIZE + "px")
$(".cell").css("heght" , SIZE + "px")
//$(".cell").css("border" , ".1px solid rgb(0,0,0)")
$(".cell").css("backgroundColor" , "white")
$(".grid").css("display" , "grid")
$(".grid").css("grid-template-rows" , "repeat( " + ROWS + "," + SIZE + "px)")
$(".grid").css("grid-template-columns" , "repeat( " + COLUMNS + "," + SIZE + "px)")

CreateGrid()


//start and end cell for solving the maze
let start = Getcell(0,0)
let end = Getcell(ROWS - 1 , COLUMNS - 1)

function CreateGrid(){

    var counter = 1

    for(var i = 0 ; i < ROWS ; i++){

        for(var j = 0 ; j < COLUMNS ; j++){

            let newCell = document.createElement("div")
            newCell.setAttribute("id" , i + "_" + j)
            newCell.dataset.row = i 
            newCell.dataset.column = j
            newCell.dataset.visited = false
            newCell.dataset.set = counter
            newCell.dataset.borderTop = true
            newCell.dataset.borderBottom = true 
            newCell.dataset.borderLeft = true
            newCell.dataset.borderRight = true
            newCell.dataset.value = 0
            newCell.classList.add("cell")
            $(".grid").append(newCell)
            counter++
        }
    }
}
/*   

echo "# maze-algorithms" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/BartDeMeyere/maze-algorithms.git
git push -u origin main

*/ 


///git add .
//git status

//git commit -m "maze-algorithms"
//git push

///remove git 

//rm  -rf .git