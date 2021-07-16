
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var ropeLength;
var ropeStiffness;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	ropeLength = 300;
    ropeStiffness = 0;

	//Create the Bodies Here.

	bob1= new Bob(10,100,50);
	rope1 = new Chain(bob1.body, {x: 200, y: 100}, ropeLength, ropeStiffness);

	bob2 = new Bob(300,500,50);
	rope2 = new Chain(bob2.body, {x: 300, y: 100}, ropeLength, ropeStiffness);

	bob3 = new Bob(400,500,50);
	rope3 = new Chain(bob3.body, {x: 400, y: 100}, ropeLength, ropeStiffness);

	bob4 = new Bob(500,500,50);
	rope4 = new Chain(bob4.body, {x: 500, y: 100}, ropeLength, ropeStiffness);

	bob5 = new Bob(600,500,50);
	rope5 = new Chain(bob5.body, {x: 600, y: 100}, ropeLength, ropeStiffness);

	roof = new Roof(400,100,700,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



