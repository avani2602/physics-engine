const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball, ball2, ball3;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var groundOption = {
    isStatic : true
  }

  var ballOption = {
    restitution : 1.0
  }

  ground = Bodies.rectangle(400,350,800,50,groundOption);
  World.add(world, ground);

  ball = Bodies.circle(400,50,20,ballOption);
  World.add(world, ball);

  ball2 = Bodies.circle(700,10,20,ballOption);
  World.add(world, ball2);

  ball3 = Bodies.circle(100,100,20,ballOption);
  World.add(world, ball3);

}

function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("grey");
  rect(ground.position.x, ground.position.y, 800, 50);

  ellipseMode(RADIUS);
  fill("blue")
  ellipse(ball.position.x, ball.position.y,20,20);

  ellipseMode(RADIUS);
  fill("green")
  ellipse(ball2.position.x, ball2.position.y,20,20);

  ellipseMode(RADIUS);
  fill("red")
  ellipse(ball3.position.x, ball3.position.y,20,20);

}