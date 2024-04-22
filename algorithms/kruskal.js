function kruskal(){

    if(kruskalfinished()){

        currentcell = undefined
        running = false
        console.log("maze is created")
        return
    }

    currentcell = GetrandomCell()

    var nextcell = GetCellSets(currentcell.row , currentcell.col)

    if(nextcell){

        var set1 = currentcell.set
        var set2 = nextcell.set

        cells.forEach(cell => {

            if(cell.set === set1){

                cell.set = set2
            }
        })

        RemoveWalls(currentcell , nextcell)
    }
    
    
}

function GetCellSets(row , col){

    var cellsets = []
    var currentset = GetCell(row , col).set

    for(var i = -1 ; i <= 1 ; i++){

        for(var j = -1 ; j <= 1 ; j++){

            if((i === -1 && j === 0) || ( i === 0 && j === -1) || ( i === 0 && j === 1) || ( i === 1 && j === 0)){

                if(GetCell(row + i , col + j)){

                    if(GetCell(row + i , col + j).set !== currentset){

                        cellsets.push(GetCell(row + i , col + j))
                       
                    }
                }
               
            }
        }
    }

    return cellsets[Math.floor(Math.random() * cellsets.length)]
}


function kruskalfinished(){

    var currentset = cells[0].set 

    for(var i = 1 ; i < cells.length ; i++){

        if(cells[i].set !== currentset){

            return false
        }
    }

    return true
}