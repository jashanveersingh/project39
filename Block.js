class Block {

    constructor(x,y,width,height)   {
        var option ={

            restitution:0.4,
            friction:1.0,
        }
        this.bidy =Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height = height;
        World.add(world,this,this.body);

    }
     display(){
         var angle = this.body.angle;
         var pos=this.body .position;
         Push();
         translate (pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         Pop();
         

     }


}
