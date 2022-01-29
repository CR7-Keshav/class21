const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button1=createImg("right.png")
  button1.position(250,40)
  button1.size(50,50)
  button1.mouseClicked(hforce)
  button2=createImg("up.png")
  button2.position(20,40)
  button2.size(50,50)
  button2.mouseClicked(vforce)
  
  ground =new Ground(200,385,400,30);
  right = new Ground(385,200,30,400);
  left = new Ground(15,200,30,400);
  top_wall = new Ground(200,15,400,30);
  var option={restitution:0.9}

  ball=Bodies.circle(150,30,12,option)
  World.add(world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  fill ("blue")

  ellipse(ball.position.x,ball.position.y,20)
}
function hforce (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
}
function vforce (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})
}


