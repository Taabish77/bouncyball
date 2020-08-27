const Engine=Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  var canvas= createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,100,50,50);
  World.add(world,ground);
  var ball_options={
    restitution:1.0
}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rect(200,200,50,50);
}