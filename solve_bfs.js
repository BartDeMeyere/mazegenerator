
function solve_bfs(){

    Getcell(0,0).attr("data-value" , "1")
    Getcell(0,0).css("backgroundColor" , "lime")
    Getcell(0,0).html(1)
    floodfill(0,0)
}