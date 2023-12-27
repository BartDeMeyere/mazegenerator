function huntandkill(){

    Highlightvisitedcells()

    if(!currentcell){

        currentcell = randomCell()
        currentcell.attr("data-visited" , "true")
    }

        currentcell.css("backgroundColor" , "magenta")

        var nextcell = GetUnvisitedNeighbours(currentcell.data("row") , currentcell.data("column"))

        currentcell.css("backgroundColor" , "white")

        if(nextcell){

            nextcell.css("backgroundColor" , "magenta")
            nextcell.attr("data-visited" , "true")
            removeWalls(currentcell , nextcell)
            currentcell = nextcell

        }else{

           currentcell = Searchnextcell()
           
           if(currentcell){

                removeWalls(currentcell , visitedcell) 

           }else{

                //we are done
                Highlightvisitedcells()
                cleargrid()
                $("#solvemaze").prop("disabled" , false)
                return
           }
         
        }

        setTimeout(huntandkill , 1)
}


