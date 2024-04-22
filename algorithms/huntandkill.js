function HuntandKill(){

   if(!currentcell){

        currentcell = GetrandomCell()
        currentcell.visited = true 
   }

   var nextcell = GetAdjacentCells(currentcell.row , currentcell.col)

   if(nextcell){

        huntmode = false
        RemoveWalls(currentcell , nextcell)
        nextcell.visited = true 
        currentcell = nextcell

   }else{

        currentcell = FindNextCell()

        //if cell found
        if(currentcell){

            currentcell.visited = true

        }else{

            running = false
            currentcell = undefined
            ClearMaze()
            console.log("maze is created")
        }
       
   }
    
}

function FindNextCell(){

    //scan entire grid to search unvisited cell with at least one visited neighbour
    for(var i = 0 ; i < rows ; i++){

        for(var j = 0 ; j < cols ; j++){

            if(!GetCell(i,j).visited){

                if(GetCell(i-1,j) && GetCell(i-1,j).visited){

                    return GetCell(i-1,j)
                }

                if(GetCell(i+1,j) && GetCell(i+1,j).visited){

                    return GetCell(i+1,j)
                }

                if(GetCell(i,j-1) && GetCell(i,j-1).visited){

                    return GetCell(i,j-1)
                }

                if(GetCell(i,j+1) && GetCell(i,j+1).visited){

                    return GetCell(i,j+1)
                }

            }
        }

    }

}

