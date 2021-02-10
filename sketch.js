const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
hexagon=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    //level1
    block1=new Block(500,275, 30, 50)
    block2=new Block(530, 275, 30, 50);
    block3=new Block(560, 275, 30, 50);
    block4=new Block(590, 275, 30, 50);
    block5=new Block(620, 275, 30, 50);
    block6=new Block(650, 275, 30, 50);
    block7=new Block(680, 275, 30, 50);
    block8=new Block(710, 275, 30, 50);
    block9=new Block(740, 275, 30, 50);
    block10=new Block(770, 275, 30, 50);
    block11 = new Block(800,275,30,50);
    //level 2
    block12= new Block(530, 235, 30, 50);
    block13= new Block(560, 235, 30, 50);
    block14=new Block(590, 235, 30, 50);
    block15=new Block(620, 235, 30, 50);
    block16=new Block(650, 235, 30, 50);
    block17=new Block(680, 235, 30, 50);
    block18=new Block(710, 235, 30, 50);
    block19=new Block(740, 235, 30, 50);
    block20=new Block(770, 235, 30, 50);

    //level 3
    block21=new Block(560, 195, 30, 50);
    block22=new Block(590, 195, 30, 50);
    block23=new Block(620, 195, 30, 50);
    block24=new Block(650, 195, 30, 50);
    block25=new Block(680, 195, 30, 50);
    block26=new Block(710, 195, 30, 50);
    block27=new Block(740, 195, 30, 50);
    
    //level 4
   block28=new Block(610, 155, 30, 50);
   block29=new Block(640, 155, 30, 50);
   block30=new Block(670, 155, 30, 50);

   //level 5
    block31 = new Block(640,130,30,50);

    ground1 = new Ground(650, 400, 480, 25);
    ground2 = new Ground(800, 600, 1500, 25);
    sideGround1=new Ground(120, 600, 50, 100);
    sideGround2=new Ground(1100, 600, 50, 100);

    polygon= Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot= new SlingShot(polygon,{x:200, y:200});
    
   //ivsideGround1=createSprite(120, 500, 20, 150);
    //ivsideGround1.visible=false;
   // ivsideGround2=createSprite(900, 600, 20, 150);
    //ivsideGround2.visible=false;
    
    //Creating BOXES!!!!
    boxleftSprite = createSprite(210, 500, 20, 150);
    boxleftSprite.shapeColor="teal";
    boxleftSprite.velocityX=2.5;
   // boxleftSprite.bounceOff(ivsideGround1);
   
    boxbottomSprite = createSprite(270, 580,100, 20);
    boxbottomSprite.shapeColor="Teal";
    boxbottomSprite.velocityX=2.5;
    boxrightSprite = createSprite(330, 500, 20, 150);
    boxrightSprite.shapeColor="Teal";
    boxrightSprite.velocityX=2.5;
    //boxrightSprite.bounceOff(ivsideGround2);


    
    //Invisibilty TIME!!!
    ground2.invisible=false;

}
function draw(){
    background("white");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    sideGround1.display();
    sideGround2.display();
   // boxleftSprite.display();
   // boxbottomSprite.display();
   // boxrightSprite.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    imageMode(CENTER);
    image(hexagon, polygon.position.x, polygon.position.y,40, 40);   
      slingshot.display();

drawSprites();    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
       slingshot.attach(polygon); 
    } 
}   
