var ghost,ghost_running;
function preload() {
ghost_running = loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
createCanvas(400,400);
ghost = createSprite(200,180,20,50);
ghost.addAnimation("running",ghost_running);
}

function draw(){
background(0);
  drawSprites();
}