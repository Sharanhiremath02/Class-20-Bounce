var movingRec,fixedRec;


function setup() {
  createCanvas(1200,600);
  fixedRec = createSprite(400, 0, 50, 80);
  fixedRec.shapeColor= "green";
  fixedRec.debug=true;
  
  movingRec = createSprite(400,600,80,50);
  movingRec.shapeColor="green";
  movingRec.debug=true;
  
  fixedRec.velocityY = 3;
  movingRec.velocityY = -3 ;
  
}

function draw() {

  background(0); 
  
 // movingRec.x=mouseX;
 // movingRec.y=mouseY;

  if(movingRec.x-fixedRec.x< movingRec.width/2 +fixedRec.width/2 &&
    fixedRec.x-movingRec.x<movingRec.width/2 +fixedRec.width/2  ){
      movingRec.velocityX = movingRec.velocityX * -1;
      fixedRec.velocityX = fixedRec.velocityX * -1;
    }
   
   if( movingRec.y-fixedRec.y<movingRec.height/2+fixedRec.height/2 &&
    fixedRec.y-movingRec.y<fixedRec.height/2+movingRec.height/2){ 
      movingRec.velocityY = movingRec.velocityY * -1;
      fixedRec.velocityY = fixedRec.velocityY * -1;
    }


  console.log(movingRec.x-fixedRec.x);
  drawSprites();
}