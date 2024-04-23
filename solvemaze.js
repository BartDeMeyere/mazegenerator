function solve(){

    RenderPath()

    //set currentcell
    if(!currentcell){

        currentcell = startcell
        currentcell.visited = true
        path.push(currentcell)
       
    }

    //if endcell is found then maze is solved
    if(currentcell === endcell){

        console.log("maze is solved")
        path.push(currentcell)
        return 

    }else{

        setTimeout(solve , 10)
    }

    var nextcell = GetPossibilities(currentcell.row , currentcell.col)

    if(nextcell){

        path.push(nextcell)
        nextcell.visited = true
        currentcell = nextcell

    }else{

        if(path.length > 0){

            path.pop()
            currentcell = path[path.length - 1]

        }else{

            console.log("maze is cannot be solved")
            return
        }
     
    }

   
}

function GetPossibilities(row , col){

    let possibilities = []

    //if upper cell exits
    if(GetCell(row - 1 , col)){

        if(!GetCell(row , col).walls.top && !GetCell(row - 1 , col).visited){

            possibilities.push(GetCell(row - 1 , col))
        }

    }

    //if down cell exists
    if(GetCell(row + 1 , col)){

        if(!GetCell(row , col).walls.bottom && !GetCell(row + 1 , col).visited){

            possibilities.push(GetCell(row + 1 , col))
        }

    }

    //if left cell exits
    if(GetCell(row , col - 1)){

        if(!GetCell(row , col).walls.left && !GetCell(row , col - 1).visited){

            possibilities.push(GetCell(row , col - 1))
        }

    }

    //if right cell exits
    if(GetCell(row , col + 1)){

        if(!GetCell(row , col).walls.right && !GetCell(row , col + 1).visited){

            possibilities.push(GetCell(row , col + 1))
        }

    }

    return  possibilities[Math.floor(Math.random() * possibilities.length)]
}

function RenderPath(){

    //clear canvas
    c.clearRect(0 , 0 , canvas.width , canvas.height)

    //draw cells
    cells.forEach(cell => { cell.displayset = false;  cell.draw() })

    //draw path
    if(path.length > 0){

        c.save()
        c.beginPath()
        c.strokeStyle = "tomato"
        c.lineWidth = cellsize / 8
        
        for(var i = 0 ; i < path.length ; i++){

            c.lineTo(path[i].x + cellsize/2, path[i].y + cellsize/2)
        }

        c.stroke()
        c.closePath()
        c.restore()
    }
}