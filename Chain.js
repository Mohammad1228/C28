class Chain{
    constructor(bodyA, P1){
        var options = {
            bodyA: bodyA,
            pointB: P1,
            stiffness: 0.10,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
       if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var Pb = this.chain.pointB;
        strokeWeight(4); 
        line(pointA.x, pointA.y, Pb.x, Pb.y);
    }
    }
    fly(){
    this.chain.bodyA= null;

    }



}