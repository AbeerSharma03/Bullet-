var wall,thickness
var bullet,speed,weight


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400, 200, 50, 50);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80);
bullet.velocityx=speed;
speed=random(223,321);
weight=random(30,52);
   
thickness=random(22,83); 
}

function draw() {
  background("black");  

if(hasCollided(bullet,wall))
{

bullet.velocityX=speed;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}



if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
}




  drawSprites();
}
function hasCollided(lbullet,lwall)
{
 bulletRightEdge=lbullet.X+lbullet.width;
 wallLeftRidge=lwall.x;
 if(bullet.RigthEdge>=wallLeftRidge)
  {
 return false
  }
    return true

}










