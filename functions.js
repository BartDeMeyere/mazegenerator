//pick div by id selector
function Getcell(r,c){

    let row = r.toString()
    let col = c.toString()

    return $("#" + row + "_" + col)
}
//pick random cell
function randomCell(){

    var row = Math.floor(Math.random() * ROWS)
    var col = Math.floor(Math.random() * COLUMNS)

    return $("#" + row + "_" + col)
}
//reset grid
function resetgrid(){

    currentcell = undefined
    stack = []
    canfloodfill = true
    currentrow = 0
    currentcol = 0

    for(var i = 0 ; i < ROWS ; i++){

        for(var j = 0 ; j < COLUMNS ; j++){

            Getcell(i,j).attr("data-visited" , false)
            Getcell(i,j).attr("borderTop" , true)
            Getcell(i,j).attr("borderBottom" , true)
            Getcell(i,j).attr("borderLeft" , true)
            Getcell(i,j).attr("borderRight" , true)
            Getcell(i,j).attr("data-value" , 0)
            Getcell(i,j).html("")
            Getcell(i,j).css("border" , ".1px solid rgb(0,0,0)")
            Getcell(i,j).css("backgroundColor" , "white")
        }
    }
}
//cleargrid
function cleargrid(){

    for(var i = 0 ; i < ROWS ; i++){

        for(var j = 0 ; j < COLUMNS ; j++){

            Getcell(i,j).attr("data-value" , 0)
            Getcell(i,j).html("")
            Getcell(i,j).attr("data-visited" , false)
            Getcell(i,j).css("backgroundColor" , "white")
        }
    }

    canfloodfill = true
    currentcell = undefined
    stack = []
}
//remove wall between two cells
function removeWalls(cell1 , cell2){

    let row1 = parseInt(cell1.attr("data-row"))
    let col1 = parseInt(cell1.attr("data-column"))

    let row2 = parseInt(cell2.attr("data-row"))
    let col2 = parseInt(cell2.attr("data-column"))


    //right cell
    if(row1 === row2 && col2 === col1 - 1){

        Getcell(row2 , col2).css("border-right" , "none")
        Getcell(row1 , col1).css("border-left" , "none")

        Getcell(row2 , col2).attr("borderRight" , "false")
        Getcell(row1 , col1).attr("borderLeft" , "false")
    }

    //left cell
    if(row1 === row2 && col2 === col1 + 1){

        Getcell(row1 , col1).css("border-right" , "none")
        Getcell(row2 , col2).css("border-left" , "none")

        Getcell(row1 , col1).attr("borderRight" , "false")
        Getcell(row2 , col2).attr("borderLeft" , "false")
       
    }

    //top cell
    if(col1 === col2 && row2 === row1 - 1){

        Getcell(row1 , col1).css("border-top" , "none")
        Getcell(row2 , col2).css("border-bottom" , "none")

        Getcell(row1 , col1).attr("borderTop" , "false")
        Getcell(row2 , col2).attr("borderBottom" , "false")
    }

    //bottom cell
    if(col1 === col2 && row2 === row1 + 1){

        Getcell(row1 , col1).css("border-bottom" , "none")
        Getcell(row2 , col2).css("border-top" , "none")

        Getcell(row1 , col1).attr("borderBottom" , "false")
        Getcell(row2 , col2).attr("borderTop" , "false")
    }
}
//get adjacent unvisited cells for the following
//depth first search algorithm 
//hunt and kill algorithm
function GetUnvisitedNeighbours(row , column){

    let neighbours = []

    for(var i = -1 ; i <= 1 ; i++){

        for(var j = -1 ; j <=1 ; j++){

            if((i === -1 && j === 0) || ( i === 1 && j === 0) || ( i === 0 && j === -1) || ( i === 0 && j === 1)){

                if(Getcell(row + i , column + j)){

                    if(Getcell(row + i , column + j).attr("data-visited") === "false"){

                        neighbours.push(Getcell(row + i , column + j))

                    }
                }
            }
        }
    }

   return neighbours[Math.floor(Math.random() * neighbours.length)]
}
//check for visited neighbours 
function has_visited_neightbour(row , column){

    for(var i = -1 ; i <= 1 ; i++){

        for(var j = -1 ; j <=1 ; j++){

            if((i === -1 && j === 0) || ( i === 1 && j === 0) || ( i === 0 && j === -1) || ( i === 0 && j === 1)){

                if(Getcell(row + i , column + j)){

                    if(Getcell(row + i , column + j).attr("data-visited") === "true"){

                        visitedcell = Getcell(row + i , column + j)
                        return true
                    }
                }
            }
        }
    }

}
//search next cell that is unvisited and has at least 1 visited neightbour
function Searchnextcell(){

    for(var i = 0 ; i < ROWS ; i++){

        for(var j = 0 ; j < COLUMNS ; j++){

            if(Getcell(i,j).attr("data-visited") === "false"){

                if(has_visited_neightbour(i,j)){

                    Getcell(i,j).attr("data-visited" , "true")

                    return Getcell(i,j)
                }
            }
        }
    }
}
//highlight visited cells
function Highlightvisitedcells(){

    for(var i = 0 ; i < ROWS ; i++){

        for(var j = 0 ; j < COLUMNS ; j++){

            if(Getcell(i,j).attr("data-visited") === "true"){

                Getcell(i,j).css("backgroundColor" , "lightgrey")
            }
        }
    }
}
//highlight stack cells
function Highlightstack(color){

    for(var i = 0 ; i < stack.length ; i++){

        stack[i].css("backgroundColor" , color)
    }
}
//get adjacent cells with different sets
function GetNeighbours(row , column){

    let neighbours = []

    for(var i = -1 ; i <= 1 ; i++){

        for(var j = -1 ; j <=1 ; j++){

            if((i === -1 && j === 0) || ( i === 1 && j === 0) || ( i === 0 && j === -1) || ( i === 0 && j === 1)){

                if(Getcell(row + i , column + j)){

                    if(Getcell(row + i , column + j).attr("data-set") !== Getcell(row , column).attr("data-set")){

                        neighbours.push(Getcell(row + i , column + j))

                    }
                }
            }
        }
    }

    return neighbours[Math.floor(Math.random() * neighbours.length)]
}
//merge 2 cells and their sets with kruskal algorithm
function UpdateSets(set1,set2){

    for(var i = 0 ; i < ROWS ; i++){

        for(var j = 0 ; j < COLUMNS ; j++){

           if(Getcell(i,j).attr("data-set") === set2){

            Getcell(i,j).attr("data-set" , set1)

           }
        }
    }
}
//check if kruskal algorithm is finished
function kruskalfinished(){

    var value = Getcell(0,0).attr("data-set")

    for(var i = 0 ; i < ROWS ; i++){

        for(var j = 0 ; j < COLUMNS ; j++){

           if(Getcell(i,j).attr("data-set") !== value){

                return false

           }
        }
    }

    return true
}
//gets all neighbours of a cell ( aldous - Broder )
function GetRandomNeighbour(row , column){

    let neighbours = []

    for(var i = -1 ; i <= 1 ; i++){

        for(var j = -1 ; j <=1 ; j++){

            if((i === -1 && j === 0) || ( i === 1 && j === 0) || ( i === 0 && j === -1) || ( i === 0 && j === 1)){

                if(Getcell(row + i , column + j)){

                    if(Getcell(row + i , column + j).attr("data-visited") === "true" || Getcell(row + i , column + j).attr("data-visited") === "false"){

                        neighbours.push(Getcell(row + i , column + j))
                    }
                     
                }
            }
        }
    }

    return neighbours[Math.floor(Math.random() * neighbours.length)]
}
//check if all cells are visited ( aldous broder )
function Allcellsvisited(){

    for(var i = 0 ; i < ROWS ; i++){

        for(var j = 0 ; j < COLUMNS ; j++){

            if(Getcell(i,j).attr("data-visited") === "false"){

                return false
            }
        }
    }

    return true
}
//solving the maze with recursive backtracking algorithm
//finds all adjacent cells that have not been visited en have no border between currentcell and the adjacent cell
//pick a random cell
function GetPossibilities(row , column){

    let possibilities = []

    if(Getcell(row - 1 , column).attr("data-visited") === "false" && Getcell(row , column).attr("borderTop") === "false"){

        possibilities.push(Getcell(row - 1 , column))
    }

    if(Getcell(row + 1 , column).attr("data-visited") === "false" && Getcell(row , column).attr("borderBottom") === "false"){

        possibilities.push(Getcell(row + 1 , column))
    }

    if(Getcell(row , column + 1).attr("data-visited") === "false" && Getcell(row , column).attr("borderRight") === "false"){

        possibilities.push(Getcell(row , column + 1))
    }

    if(Getcell(row , column - 1).attr("data-visited") === "false" && Getcell(row , column).attr("borderLeft") === "false"){

        possibilities.push(Getcell(row , column - 1))
    }

    return possibilities[Math.floor(Math.random() * possibilities.length)]
}

//////solving the maze with breadth first search
/*

    step 1: floodfill the maze with numbers from startpoint to endpoint ( floodfill function )
    step 2: start at endpoint. Check wich neighbour value equals currentcell minus 1 and if there is no border 
    between the currentcell and the neighbour. Return that cell ( findnextcell function ) 
    step 3: renders the solution of the path en finds all cells in the path.

*/

//solving the maze with floodfill algorithm ( breadth first search )
function floodfill(row , column){

    //check if maze is solved ( we have reached the last cell)
    if(row === end.data("row") && column === end.data("column") ){

        currentcell = Getcell(row , column)
        currentcell.css("backgroundColor" , "lime")
        FindPath()
        canfloodfill = false
        return
    }

    function run(){

       
        if(Getcell(row , column).attr("borderTop") === "false"){

            if(Getcell(row - 1 , column).attr("data-value") === "0"){

                var currentvalue =  parseInt(Getcell(row , column).attr("data-value"))
                var newvalue = currentvalue + 1
                Getcell(row - 1 , column).attr("data-value" , newvalue)
                Getcell(row - 1 , column).html(newvalue)

                if(canfloodfill){

                    floodfill(row - 1 , column)
                }
            
            }

        }
    
        if(Getcell(row , column).attr("borderBottom") === "false"){
    
            if(Getcell(row + 1 , column).attr("data-value") === "0"){

                var currentvalue =  parseInt(Getcell(row , column).attr("data-value"))
                var newvalue = currentvalue + 1
                Getcell(row + 1 , column).attr("data-value" , newvalue)
                Getcell(row + 1 , column).html(newvalue)
    
                if(canfloodfill){

                    floodfill(row + 1 , column)
                }
               
            }

            
        }
    
        if(Getcell(row , column).attr("borderRight") === "false"){
    
            if(Getcell(row , column + 1).attr("data-value") === "0"){

                var currentvalue =  parseInt(Getcell(row , column).attr("data-value"))
                var newvalue = currentvalue + 1
                Getcell(row , column + 1).attr("data-value" , newvalue)
                Getcell(row , column + 1).html(newvalue)

                if(canfloodfill){

                    floodfill(row , column + 1)
                }
               
            }
 

        }
    
        if(Getcell(row , column).attr("borderLeft") === "false"){
    
            if(Getcell(row  , column - 1).attr("data-value") === "0"){

                var currentvalue =  parseInt(Getcell(row , column).attr("data-value"))
                var newvalue = currentvalue + 1
                Getcell(row , column - 1).attr("data-value" , newvalue)
                Getcell(row , column - 1).html(newvalue)
    
                if(canfloodfill){

                    floodfill(row , column - 1)
                }
                
            }
           
        }


        
    }

   //run()
   setTimeout(run,10)
  
}


function Findnextcell(row , column){

    var value = parseInt(Getcell(row , column ).attr("data-value"))

    if(Getcell(row - 1 , column).attr("data-value") === (value - 1).toString() && Getcell(row , column).attr("borderTop") === "false" ){

        return Getcell(row - 1 , column)
    }
    
    if(Getcell(row + 1 , column).attr("data-value") === (value - 1).toString() && Getcell(row , column).attr("borderBottom") === "false"){

        return Getcell(row + 1 , column)
    }

    if(Getcell(row  , column - 1).attr("data-value") === (value - 1).toString() && Getcell(row , column).attr("borderLeft") === "false"){

        return Getcell(row , column - 1)
    }

    if(Getcell(row  , column + 1).attr("data-value") === (value - 1).toString() && Getcell(row , column).attr("borderRight") === "false"){

        return Getcell(row , column + 1)
    }
}


function FindPath(){

    if(currentcell.data("row") === 0 && currentcell.data("column") === 0){

        console.log("maze solved")
        $("#resetgrid").prop("disabled" , false)
        return
    }

    var nextcell = Findnextcell(currentcell.data("row") , currentcell.data("column"))

    if(nextcell){

        nextcell.css("backgroundColor" , "lime")
        currentcell = nextcell
    }

    setTimeout(FindPath , 10)
}
