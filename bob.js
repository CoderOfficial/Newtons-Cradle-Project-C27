class Bob{
    constructor(x,y,diameter,){
    var options = {
        isStatic: false,
        'restitution':1,
        'friction':1,
        'density':1,
        'frictionAir': 0,
    }
this.x=x;
this.y=y;
this.diameter=diameter;
this.body = Bodies.circle(x,y,diameter,options)
World.add(world, this.body);

    }
    display(){
  			
        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        ellipseMode(RADIUS)
        strokeWeight(4);
        fill(255,0,255)
        ellipse(0,0,this.width);
        pop()
        
    }
}