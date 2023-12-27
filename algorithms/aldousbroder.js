function aldousbroder(){

    Highlightvisitedcells()

    if(!currentcell){

        currentcell = randomCell()
        currentcell.attr("data-visited" , "true")
    }

        if(Allcellsvisited()){

            console.log("we are done")
            $("#solvemaze").prop("disabled" , false)
            cleargrid()
            return
        }

        currentcell.css("backgroundColor" , "magenta")

        var nextcell = GetRandomNeighbour(currentcell.data("row") , currentcell.data("column"))

        if(nextcell){

            if(nextcell.attr("data-visited") === "false"){

                nextcell.css("backgroundColor" , "magenta")
                nextcell.attr("data-visited" , "true")
                removeWalls(currentcell , nextcell)
              
            } 

        }

        currentcell.attr("data-visited","true")

        currentcell = nextcell

        setTimeout(aldousbroder , 10)
}