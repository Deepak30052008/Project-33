const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particle
var score=0
var count=0
var PLAY=1
var END=0
var gameState="END"
var plinkos=[]
var particles=[]
var divisionHeight = 300
var divisions=[]
var ground
function setup(){

  var canvas = createCanvas(645,650);
  engine = Engine.create();
  world = engine.world;

  for(var i=0;i<=width;i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight));
    }
    for(var j=40;j<=width-20;j=j+30){
    plinkos.push(new Plinko(j,75));
    }
     for(var j=15;j<=width-30;j=j+30){
      plinkos.push(new Plinko(j,175));
    }
    for(var j=-25;j<=width+40;j=j+30){
    plinkos.push(new Plinko(j,275))
    }
  options={
    isStatic:true
  }
  fill("white")
  ground=Bodies.rectangle(400,645,800,10,options);
  World.add(world,ground)
Engine.run(engine);
}
function draw(){
  background("black");
  Engine.update(engine);
  drawSprites();
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  if(particle=null){
    particle.display();
  if(particle.body.position.y>345){
    if(particle.body.position.x<235&&particle.body.position.x<5){
     score=score+100
     particle=null
    }
    if(particle.body.position.x<475&&particle.body.position.x<245){
        score=score+200
        particle=null
       }
       if(particle.body.position.x<635&&particle.body.position.x<485){
        score=score+500
        particle=null

       }
  }
}
    for(var i=0;i<divisions.length;i=i+1){
    divisions[i].display();
  }
   for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  } 

  
  text("x - "+mouseX,560,20)
  text("y - "+mouseY,600,20)
  textSize(20)
text("score: "+ score,20,30)
textSize(20)
text("100", 20,400)
textSize(20)
text("100", 105,400)
textSize(20)
text("100", 185,400)
textSize(20)
text("200", 265,400)
textSize(20)
text("200", 340,400)
textSize(20)
text("200", 420,400)
textSize(20)
text("500", 500,400)
textSize(20)
text("500", 580,400)
if(count>=5){
  textSize(50)
  text("Game Over",300,225)
  gameState==="END"
}
}
function keyPressed(){
  if(keyCode==UP_ARROW){

    count=count+1
  particle=new Particle(mouseX,0,10,10)
} 
} 