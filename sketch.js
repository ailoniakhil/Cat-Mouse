var tom;
var jerry;
var tomImage1, tomImage2, tomImage3;
var jerryImage1, jerryImage2, jerryImage3;
var backgroundImage;
function preload() {
    //load the images here
  tomImage1 = loadImage("images/cat1.png")
  tomImage2 = loadAnimation("images/cat2.png", "images/cat3.png")
  tomImage3 = loadAnimation("images/cat4.png")
  jerryImage1 = loadImage("images/mouse1.png")
  jerryImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
  jerryImage3 = loadAnimation("images/mouse4.png")
  backgroundImage = loadImage("images/garden.png")
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(870,600);
   tom.addImage(tomImage1)
   tom.scale = 0.2;
   jerry = createSprite(200,600);
   jerry.addImage(jerryImage1)
   jerry.scale = 0.15;
}

function draw() {

    background(backgroundImage);
     if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
       tom.addAnimation("tomLastImage", tomImage3)
       tom.scale = 0.2;
       tom.velocityX = 0;
       tom.changeAnimation("tomLastImage", tomImage3)
       jerry.addAnimation("jerryLastImage", jerryImage3)
       jerry.scale = 0.15;
       jerry.changeAnimation("jerryLastImage", jerryImage3)
     }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomRunning", tomImage2) 
    tom.changeAnimation("tomRunning", tomImage2)
    jerry.addAnimation("jerryTeasing", jerryImage2)
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing")
}        
  //For moving and changing animation write code here


}
