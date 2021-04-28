class Particle{
    constructor(x,y,radius){
   var options={

        isStatic:false
    }
    this.radius=radius
    this.body=Bodies.circle(x,y,options)
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)
    }

    
    display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    pop();
    }
}