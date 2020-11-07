class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png"); 
        this.image3 = loadImage("sprites/sling3.png");       
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            if(pointA.x>245){
                strokeWeight(4);
                stroke(48,22,8)
                line(175,70,pointA.x+20,pointA.y);
                image(this.image3,pointA.x+20,pointA.y-10,15,30); 
            }
            else{
                line(175,70,pointA.x-20,pointA.y);
                image(this.image3,pointA.x-20,pointA.y-10,15,30); 
            }
        }
        image(this.image1,200,30);
        image(this.image2,170,30);   
    }
    display1(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            if(pointA.x>245){
                line(222, 60, pointA.x+20, pointA.y);
                
            }
            else{
                line(222, 60, pointA.x-20, pointA.y);
        
            }
        }

    }
}