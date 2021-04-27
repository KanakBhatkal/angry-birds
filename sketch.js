// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var myGround;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(600,600);

  // 1. Create the engine
  myEngine = Engine.create();
  // 2. Create world using engine
  myWorld = myEngine.world;
  // 3. Create the bodies
  
  // JSON object- JavaScript Object Notation
  
  // 4. Add body to world
 

  box1 = new Box(300, 200, 50, 100);

  box2 = new Box(300,150,50,50);

  ground = new Ground(300,600,600,20);
}

function draw() {
  background(0); 

  // 5. Update the engine
  Engine.update(myEngine);

  console.log(myGround);
  
  // 5. Draw rect at the position of body


  box1.display();
  box2.display();
  ground.display();
}