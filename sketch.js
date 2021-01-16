
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	p1=new Paper(200,600);
	d1=new Dustbin(520,660,10,60);
	d2=new Dustbin(580,685,130,10);
	d3=new Dustbin(650,660,10,60);
  	ground=new Ground();
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  fill("red")
  ground.display();
  p1.display();
  d1.display();
  d2.display();
  d3.display();
 

}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(p1.body,p1.body.position,{x:85,y:-85});
	}
}



