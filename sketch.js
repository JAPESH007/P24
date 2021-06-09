const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, stone, rubber,ball1,ball2,ball3,ball4,ball,ball6,ball7,ball8;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
stone = new stone (600, 100, 120, 120)
  Rubber = new rubber(900, 100, 70);
  ball1= new ball(405,550,15)
  ball2= new ball(408,550,15)
  ball3= new ball(411,550,15)
  ball4= new ball(414,550,15)
  ball5= new ball(417,550,15)
  ball6= new ball(420,550,15)
  ball7= new ball(423,550,15)
  ball8= new ball(426,550,15)




}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    stone.display();
    Rubber.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball1.display();
 
}