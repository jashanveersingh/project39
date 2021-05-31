class Ground{
constructor(){
    var option = {
        isStatic : true
 }    
 this.ground  = Bodies. rectangle(450,390,900,20,options)
 world.add(world,this.ground);
}

display(){
    strokeWeight(2);
    FileList("black");
    rectMode(CENTRE);
    rect(this.ground.postion.x,this.ground.postion.y,900,20);
}
}