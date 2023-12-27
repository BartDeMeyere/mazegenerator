function binarytree(){

    if(!currentcell){

        currentcell = Getcell(currentrow,currentcol)
        currentcell.css("backgroundColor" , "magenta")
    }

    currentcell.css("backgroundColor" , "white")


    //if there is a cell to the right
    if(Getcell(currentrow , currentcol + 1)){

        //if we are NOT on the last row
        if(currentrow < ROWS - 1){

            var rnd = Math.floor(Math.random() * 2)

            if(rnd === 0){

                //remove walls between the currentcell and the cell to the right
                removeWalls(currentcell , Getcell(currentrow , currentcol + 1))

            }else{

                //remove walls between the currentcell and the cell to the right
                removeWalls(currentcell , Getcell(currentrow + 1 , currentcol))
            }

        }else{

            if(Getcell(currentrow , currentcol + 1)){

              
                 //remove walls between the currentcell and the cell to the right
                 removeWalls(currentcell , Getcell(currentrow , currentcol + 1))
            }
        }

    }

    //remove bottom wall if we are on the last column
    if(currentcol === COLUMNS - 1 && currentrow >= 0 && currentrow < ROWS - 1){

        removeWalls(Getcell(currentrow , currentcol) , Getcell(currentrow + 1 , currentcol))
    }

    if(currentcol < COLUMNS - 1){

        currentcol++

    }else{

        currentcol = 0
        if(currentrow < ROWS - 1){

            currentrow++
        }
    }

 
    currentcell = Getcell(currentrow,currentcol)
    currentcell.css("backgroundColor" , "magenta")

    if(currentrow === ROWS - 1 && currentcol === COLUMNS - 1){

        console.log("we are done")
        $("#solvemaze").prop("disabled" , false)
        cleargrid()
        //solve_dfs()
        return
    }

    setTimeout(binarytree , 1)

}