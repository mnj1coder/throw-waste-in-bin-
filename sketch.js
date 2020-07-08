
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var ball1;
var rect1;
var rect2;
var rect3;

function setup() {

	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	ball1=new BallClass(120,100,50);

	rect1=new DustClass(600,600,200,10);
	rect2= new DustClass(500,555,10,100);
	rect3= new DustClass(700,555,10,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  rect1.display();
  rect2.display();
  rect3.display();

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
keyPressed();
drawSprites();

}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Body.applyForce(ball1.body,ball1.body.position,{x:10,y:-10})
	}
  }



	 
