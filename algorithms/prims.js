function prims(){

    if(!currentcell){

        currentcell = GetrandomCell()
        currentcell.visited = true
        stack.push(currentcell)
    }

    var nextcell = GetAdjacentCells(currentcell.row , currentcell.col)

    if(nextcell){

        RemoveWalls(currentcell , nextcell)
        stack.push(nextcell)
        nextcell.visited = true
        
    }else{

        if(stack.length > 0){

            var index = Math.floor(Math.random() * stack.length)
            currentcell = stack[index]
            stack.splice(index , 1)

        }else{

            running = false 
            currentcell = undefined
            ClearMaze()
        
        }
       
    }
}