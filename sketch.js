const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var tower, backgroundImg;

function preload(){
    backgroundImg = loadImage("ground.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
   
    tower = new Tower(150,300,200,500);
    ground = new Ground(width/2, height-1, width, 1);
    
}

function draw(){
    background(0);
    imageMode(CENTER);
    image(backgroundImg,width/2, height/2, width,height)
    Engine.update(engine);
   tower.display();
   ground.display();
}
