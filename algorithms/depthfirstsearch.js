function depthfirstsearch(){

    if(!currentcell){

        currentcell = GetrandomCell()
        currentcell.visited = true

    }

    var nextcell = GetAdjacentCells(currentcell.row , currentcell.col)

    if(nextcell){

        RemoveWalls(currentcell , nextcell)
        stack.push(currentcell)
        nextcell.visited = true 
        currentcell = nextcell
       
    }else{

        if(stack.length > 0){

            currentcell = stack.pop()
    

        }else{

            running = false 
            currentcell = undefined
            ClearMaze()
            console.log("maze is created")
        }

    }
}

function GetAdjacentCells(row , col){

    var adjacentcells = []

    for(var i = -1 ; i <= 1 ; i++){

        for(var j = -1 ; j <= 1 ; j++){

            if( (i === -1 && j === 0) || ( i === 0 && j === -1) || ( i === 0 && j === 1) || ( i === 1 && j === 0) ){

                if( GetCell(row + i , col + j) && !GetCell(row + i , col + j).visited ){

                   adjacentcells.push(GetCell(row + i , col + j))
                }

            }
        }
    }

    return adjacentcells[Math.floor(Math.random() * adjacentcells.length)]

}

function RemoveWalls(cellA , cellB){

    //right
    if(cellB.col === cellA.col + 1 && cellB.row === cellA.row){

        cellA.walls.right = false
        cellB.walls.left = false

    }

     //left
    if(cellB.col === cellA.col - 1 && cellB.row === cellA.row){

        cellA.walls.left = false
        cellB.walls.right = false
       
    }

    //top
    if(cellB.row === cellA.row - 1 && cellB.col === cellA.col){

        cellB.walls.bottom = false 
        cellA.walls.top = false
    }

     //bottom
     if(cellB.row === cellA.row + 1 && cellB.col === cellA.col){

        cellB.walls.top = false 
        cellA.walls.bottom = false
    }

}
