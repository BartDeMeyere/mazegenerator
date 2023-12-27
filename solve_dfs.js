function solve_dfs(){

   
    Highlightvisitedcells()
    Highlightstack("lime")

    //if no currentcell is defined
    if(!currentcell){

        currentcell = start 
        currentcell.attr("data-visited" , "true")
        stack.push(currentcell)
    }

    //check if maze is solved
    if(currentcell.data("row") === end.data("row") && currentcell.data("column") === end.data("column") ){

        console.log("solved")
        $("#resetgrid").prop("disabled" , false)
        return
    }

    var nextcell = GetPossibilities(currentcell.data("row") , currentcell.data("column"))

    if(nextcell){

        nextcell.attr("data-visited" , "true")
        stack.push(nextcell)
        currentcell = nextcell

    }else{

        if(stack.length > 0){

            stack.splice(stack.length - 1 , 1)
            currentcell = stack[stack.length - 1]
          
            Highlightvisitedcells()
            Highlightstack("lime")
        }

    }


    setTimeout(solve_dfs , 10)
}