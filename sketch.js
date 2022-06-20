var path,jake, leftBoundary,rightBoundary;
var pathImg,jakeImg;
var i;
var jake
var bomba
var ground,groundImage
function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png")
  

  //loadAnimation (carregarAnimação) de corrida para o menino
 jakeImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path=createSprite(200,200); 
 path.addImage(pathImg); 
 path.velocityY = 4; 
 path.scale=1.2;
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocytyY = 4
//crie um sprite de menino
jake = createSprite(180,340,30,30);
jake.scale = 0.8
jake.addAnimation("JakeRunning",jakeImg);
//adicione uma animação de corrida para ele 
jake.velocityX = 1
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  jake.x = World.mouseX
  
  edges= createEdgeSprites();
  jake.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  jake.bounceOff(leftBoundary)
  jake.bounceOff(rightBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
