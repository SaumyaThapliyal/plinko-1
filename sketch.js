const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var turn = 0;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Division (k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var k = 40; k <=width; k = k+50){
    plinkos.push(new Plinko (k,75,10))
  }

  for(var k = 15; k <=width; k = k+50){
    plinkos.push(new Plinko (k,175,10))
  }

  for(var k = 40; k <=width; k = k+50){
    plinkos.push(new Plinko (k,275,10))
  }

  for(var k = 15; k <=width; k = k+50){
    plinkos.push(new Plinko (k,375,10))
  }

}

function draw() {
  background(0,0,0);  
  textSize (30);
  text("SCORE: "+score,20,40);
  fill("white");
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j = 0; j < particles.length; j++){

    particles[j].display();
  }

  for(var j = 0; j < divisions.length; j++){

    divisions[j].display();
  }

  for(var j = 0; j < plinkos.length; j++){

    plinkos[j].display();
  }

  drawSprites();
}