
$("#mazegenerator").on("change",  function(){

    switch(this.value){

        case "1": dfs();break;
        case "2": huntandkill();break;
        case "3": kruskal();break;
        case "4": growingtree();break;
        case "5": aldousbroder();break;
        case "6": binarytree();break;
    }

    $("#mazegenerator")[0].selectedIndex = 0

    $("#mazegenerator").prop("disabled" , true)
})

$("#solvemaze").on("change",  function(){

    switch(this.value){

        case "1": solve_dfs();break;
        case "2": solve_bfs();break;
      
    }


    $("#solvemaze")[0].selectedIndex = 0

    $("#solvemaze").prop("disabled" , true)
})

$("#resetgrid").on("click" , function(){

    $("#mazegenerator").prop("disabled" , false)
    $("#resetgrid").prop("disabled" , true)
    resetgrid()

})
//disable form elements on start
$("#solvemaze").prop("disabled" , true)
$("#resetgrid").prop("disabled" , true)