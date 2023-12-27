function kruskal(){

    if(!currentcell){

        currentcell = randomCell()
  
    }

        var nextcell = GetNeighbours(currentcell.data("row") , currentcell.data("column"))

        if(nextcell){

            currentcell.css("backgroundColor" , "lightgrey")
            nextcell.css("backgroundColor" , "lightgrey")

            var set1 = currentcell.attr("data-set")
            var set2 = nextcell.attr("data-set")

            UpdateSets(set1 , set2)
            removeWalls(currentcell , nextcell)

        }

        //we are done
        if(kruskalfinished()){

            console.log("we are done")
            $("#solvemaze").prop("disabled" , false)
            cleargrid()
            return
        }

        currentcell = randomCell()

        setTimeout(kruskal , 1)
}