let canvas = $("canvas")[0]
let c = canvas.getContext("2d")

let rows = 15
let cols = 15
let cellsize = 30


$("canvas").css('width' , cols * cellsize + "px")
$("canvas").css('height' , rows * cellsize + "px")

canvas.width = cols * cellsize * devicePixelRatio 
canvas.height = rows * cellsize * devicePixelRatio

c.scale(2,2)

let cells = []
let running = true
let currentcell = undefined
let stack = []

CreateCells()

let startcell = GetCell(0,0)
let endcell = GetCell(rows - 1 , cols - 1)
let path = []
let algorithm = 1

function CreateCells(){

    for(var i = 0 ; i < rows ; i++){

        for(var j = 0 ; j < cols ; j++){

            cells.push(new Cell({x: j * cellsize , y: i * cellsize , size: cellsize , row: i , col: j , set: i * cols + j } ))
        }
    }
}

function GetCell(row , col){

    for(var i = 0 ; i < cells.length ; i++){

        if(cells[i].row === row && cells[i].col === col){

            return cells[i]
        }
    }
}

function DrawMaze(){

    if(running){

        //clear canvas
        c.clearRect(0 , 0 , canvas.width , canvas.height)

        //draw cells 
        cells.forEach(cell => { cell.draw()})

         //run maze algorithm
        switch(algorithm){

            case 1: depthfirstsearch();break;
            case 2: HuntandKill();break;
            case 3: kruskal();  cells.forEach(cell =>{ cell.displayset = true}); break;
            case 4: prims();break;
        }

        //highlight currentcell
        if(currentcell){

            c.beginPath()
            c.fillStyle = "lime"
            c.rect(currentcell.x - 1 , currentcell.y - 1 , currentcell.size + 1, currentcell.size + 1)
            c.fill()
            c.closePath()
        }

        setTimeout(DrawMaze , 1)
        
    }else{

        return
    }
}

function ClearMaze(){

    cells.forEach(cell => {

        cell.visited = false
        cell.draw()
    })

    path = []
    currentcell = undefined
}

function ResetMaze(){

    cells.forEach(cell => {

        cell.visited = false
        cell.walls.top = true 
        cell.walls.right = true 
        cell.walls.bottom = true 
        cell.walls.left = true
        cell.draw()
    })

    path = []
    currentcell = undefined
    running = true
}

function GetrandomCell(){

     return cells[Math.floor(Math.random() * cells.length)]
}

