// declaration of variables

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ground_debug

//images are loaded here
function preload() {
    //trex animation
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");

    //ground image
    groundImage = loadImage("ground2.png")

}

        
function setup() {
    
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);

    trex.scale = 0.5;
    //create a ground sprite

    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    //invisible ground
    ground_debug=createSprite(200,190,400,20);
    ground_debug.visible=false

}
function draw() {
    background(220);

    //jump when the space button is pressed
    if (keyDown("space")&& trex.y>=150) {
        trex.velocityY = -10;
        console.log(trex.y)
    }
    //added the gravity
    trex.velocityY = trex.velocityY + 0.8;

    //making ground infinite
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }

    trex.collide(ground_debug);

    drawSprites();
}
