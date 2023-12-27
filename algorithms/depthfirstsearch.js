function dfs(){

    Highlightvisitedcells()
    Highlightstack("tomato")

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
            stack.push(nextcell)
            currentcell = nextcell

        }else{

            if(stack.length > 0){

                currentcell = stack.pop()
                currentcell.css("backgroundColor" , "magenta")

            }else{

                //we are done
                Highlightvisitedcells()
                cleargrid()
                //solve_dfs()
                $("#solvemaze").prop("disabled" , false)
                return
            }
        }

        setTimeout(dfs , 1)
}