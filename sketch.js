const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var person;
var lightening;
 var raindrops;

function preload(){
    personAnimation=loadAnimation("moving","walking1.png,walking2.png,walking3.png,walking4.png,walking5.png,walking6.png,walking7.png,walking8.png");
    
    thunderAnimation=loadAnimation("lighting","1.,2.png,3.png,4.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    person =new Person(500,500);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    
    person.display();
}   

