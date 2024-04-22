class Cell{

    constructor({x , y , size , row , col , set}){

        this.x = x 
        this.y = y
        this.size = size;
        this.row = row
        this.col = col 
        this.visited = false
        this.walls = {top:true, right:true, bottom:true, left:true}
        this.color = "black"
        this.set = set
   
    }

    draw(){

        c.beginPath()

        if(!this.visited){

            c.fillStyle = this.color

        }else{

            c.fillStyle = "rgb(82, 5, 74)"
        }
       
        c.rect(this.x - 1 , this.y - 1 , this.size + 1, this.size + 1)
        c.fill()
        c.closePath()


        if(this.walls.top){

            c.beginPath()
            c.strokeStyle = "white"
            c.lineWidth = .5
            c.lineCap = "square"
            c.moveTo(this.x , this.y)
            c.lineTo(this.x + this.size , this.y)
            c.stroke()
            c.closePath()
        }
    
        if(this.walls.left){
    
            c.beginPath()
            c.strokeStyle = "white"
            c.lineWidth = .5
            c.lineCap = "square"
            c.moveTo(this.x + this.size , this.y)
            c.lineTo(this.x + this.size , this.y + this.size)
            c.stroke()
            c.closePath()
        }
    
        if(this.walls.bottom){
    
            c.beginPath()
            c.strokeStyle = "white"
            c.lineWidth = .5
            c.lineCap = "square"
            c.moveTo(this.x + this.size , this.y + this.size)
            c.lineTo(this.x , this.y + this.size)
            c.stroke()
            c.closePath()
        }
    
        if(this.walls.left){
    
            c.beginPath()
            c.strokeStyle = "white"
            c.lineWidth = .5
            c.lineCap = "square"
            c.moveTo(this.x , this.y )
            c.lineTo(this.x , this.y + this.size)
            c.stroke()
            c.closePath()
        }

     }    
     
}