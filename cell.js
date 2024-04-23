class Cell{

    constructor({x , y , size , row , col , set}){

        this.x = x 
        this.y = y
        this.size = size;
        this.row = row
        this.col = col 
        this.visited = false
        this.walls = {top:true, right:true, bottom:true, left:true}
        this.set = set
        this.displayset = false
   
    }

    draw(){

        //draw fills
        if(this.visited){

            c.beginPath()
            c.fillStyle = "rgb(197, 201, 209)"
            c.rect(this.x , this.y , this.size , this.size)
            c.fill()
            c.closePath()

        }else{

            c.beginPath()
            c.fillStyle = "white"
            c.rect(this.x , this.y , this.size , this.size)
            c.fill()
            c.closePath()

        }
        

        //draw walls
        if(this.walls.top){
       
            c.beginPath()
            c.strokeStyle = "rgb(0,0,0)"
            c.moveTo(this.x , this.y)
            c.lineTo(this.x + this.size , this.y); 
            c.stroke()
            c.closePath()
        }
    

        if(this.walls.right){

            c.beginPath()
            c.strokeStyle = "rgb(0,0,0)"
            c.moveTo(this.x + this.size , this.y)
            c.lineTo(this.x + this.size , this.y + this.size);
            c.stroke()
            c.closePath()
        }
            
        if(this.walls.bottom){

            c.beginPath()
            c.strokeStyle = "rgb(0,0,0)"
            c.moveTo(this.x + this.size , this.y + this.size);
            c.lineTo(this.x , this.y + this.size)
            c.stroke()
            c.closePath()
        }

    
        if(this.walls.left){

            c.beginPath()
            c.strokeStyle = "rgb(0,0,0)"
            c.moveTo(this.x , this.y + this.size)
            c.lineTo(this.x , this.y)
            c.stroke()
            c.closePath()
        }

        //draw sets
        if(this.displayset){

            c.beginPath()
            c.fillStyle = "rgb(0,0,0)"
            c.font = this.size/3 + "px Arial"
            c.textAlign = "center"
            c.textBaseline = "middle"
            c.fillText(this.set , this.x + this.size/2 , this.y + this.size/2)
            c.closePath()
        }
            
     }    
     
}