const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = [];
var divisions = [];
var particles = [];

var BG,BGIMG;

var divisionHeight=250;

function preload(){
  BGIMG=loadImage("background.jpg");
}
function setup() {
  createCanvas(480,685);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,677,800,10);

  // division1 = new Ground (5,550,5,200);
  // division2 = new Ground (90,550,5,200);
  // division3 = new Ground(170,550,5,200);
  // division4 = new Ground(250,550,5,200);
  // division5 = new Ground(330,550,5,200);
  // division6 = new Ground(410,550,5,200);
  // division7 = new Ground(475,550,5,200);

  for(var i = 40; i <= width; i=i+50){
    plinkos.push(new Plinko(i,75));
  }

  for(var i = 15; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,175));
  }

  for(var i = 40; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,275));
  }

  for(var i = 15; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,375));
  }

  for(var k = 0; k <= width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  if(frameCount%90==0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  }

  background(BGIMG); 
  Engine.update(engine);

  // division1.display();
  // division2.display();
  // division3.display();
  // division4.display();
  // division5.display();
  // division6.display();
  // division7.display();

  ground.display();

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  drawSprites();
}