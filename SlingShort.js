class SlingShort{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20
        }
        this.pointB = pointB
        this.sling =Constraint.create(options);
        world.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA = null;

    }
    display(){
        if(this.sling.bodyA){
            var point = this.sling.bodyA.postion;
            var pointB  = this.pointB;
            strokeWeight(4);
            fil("blue");
            line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}