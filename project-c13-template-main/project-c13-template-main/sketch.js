var garden, rabbit;
var gardenImg, rabbitImg;
var apple;
var laranja;
var vermelha;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup() {

  createCanvas(400, 400);

  // mover o fundo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  edges = createEdgeSprites();
  rabbit.collide(edges);

  // criarmaca();
  //criarlaranja();
  //criarvermelha();

  var select_sprites = Math.round(random(1, 3))
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      criarmaca();
    }
    else if (select_sprites == 2) {
      criarlaranja();
    }
    else {
      criarvermelha();
    }
  }


  drawSprites();

}

function criarmaca() {
  //if (frameCount % 80 === 0) {
  apple = createSprite(random(50, 300), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.07
  apple.velocityY = 3;
  apple.lifetime = 150;

  //}
}

function criarlaranja() {
  // if (frameCount % 80 === 0) {
  laranja = createSprite(random(50, 350), 40, 10, 10);
  laranja.addImage(orangeImg);
  laranja.scale = 0.08
  laranja.velocityY = 3;
  laranja.lifetime = 150;
  //}
}


function criarvermelha() {
  // if (frameCount % 80 === 0) {
  vermelha = createSprite(random(50, 250), 40, 10, 10);
  vermelha.addImage(redImg);
  vermelha.scale = 0.06;
  vermelha.velocityY = 3;
  vermelha.lifetime = 150;
  // }
}

