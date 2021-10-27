var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4dc7b301-7f1b-4915-9863-796a01cb35cb","81814865-29e4-4995-abbe-6eed1b7f482a","a1dc140c-0023-498d-9e93-4db49ad80cff","49cb37b9-d26d-4b0d-b8a8-65d225efa120"],"propsByKey":{"4dc7b301-7f1b-4915-9863-796a01cb35cb":{"name":"m1.png_1","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":7,"looping":true,"frameDelay":12,"version":"uTrKQfXUxvLO1IE93g19kMeL80bKmJXC","loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":288},"rootRelativePath":"assets/4dc7b301-7f1b-4915-9863-796a01cb35cb.png"},"81814865-29e4-4995-abbe-6eed1b7f482a":{"name":"ciudad destruida.jpg_1","sourceUrl":"assets/v3/animations/npWTeIVrOCEzfA44cor9hddw3w5pseSmX8tjQ56dZZQ/81814865-29e4-4995-abbe-6eed1b7f482a.png","frameSize":{"x":626,"y":281},"frameCount":1,"looping":true,"frameDelay":4,"version":"NcyHLPxN1Nuy7BoluJup9Ya3.A74oaqR","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":281},"rootRelativePath":"assets/v3/animations/npWTeIVrOCEzfA44cor9hddw3w5pseSmX8tjQ56dZZQ/81814865-29e4-4995-abbe-6eed1b7f482a.png"},"a1dc140c-0023-498d-9e93-4db49ad80cff":{"name":"spike_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png","frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":2,"version":"tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png"},"49cb37b9-d26d-4b0d-b8a8-65d225efa120":{"name":"golfball_1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"zA8oQcdG_3ze8wYP5T7OLOqCqLpIAuSO","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/49cb37b9-d26d-4b0d-b8a8-65d225efa120.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Mantener la caja en el aire al mover la paleta con las teclas de flecha
//de derecha a izquierda.
var fondo = createSprite(200, 215);
fondo.setAnimation("ciudad destruida.jpg_1");
fondo.scale = 1.4;
var paddle = createSprite(200, 375, 50, 15);
paddle.setAnimation("spike_bot_1");
paddle.scale = 0.3;
var ball = createSprite(150, 250, 20, 20);
ball.setAnimation("golfball_1");
ball.scale = 0.3;

//Fila 1
var box1 = createSprite(25, 55, 50, 50);
box1.setAnimation("m1.png_1");
box1.scale = 0.5;
var box2 = createSprite(75, 75, 50, 50);
box2.setAnimation("m1.png_1");
box2.scale = 0.5;
var box3 = createSprite(125, 55, 50, 50);
box3.setAnimation("m1.png_1");
box3.scale = 0.5;
var box4 = createSprite(175, 75, 50, 50);
box4.setAnimation("m1.png_1");
box4.scale = 0.5;
var box5 = createSprite(225, 55, 50, 50);
box5.setAnimation("m1.png_1");
box5.scale = 0.5;
var box6 = createSprite(275, 75, 50, 50);
box6.setAnimation("m1.png_1");
box6.scale = 0.5;
var box7 = createSprite(325, 55, 50, 50);
box7.setAnimation("m1.png_1");
box7.scale = 0.5;
var box8 = createSprite(375, 75, 50, 50);
box8.setAnimation("m1.png_1");
box8.scale = 0.5;

// Fila 2
var box9 = createSprite(25, 125, 50, 50);
box9.setAnimation("m1.png_1");
box9.scale = 0.5;
var box10 = createSprite(75, 145, 50, 50);
box10.setAnimation("m1.png_1");
box10.scale = 0.5;
var box11 = createSprite(125, 125, 50, 50);
box11.setAnimation("m1.png_1");
box11.scale = 0.5;
var box12 = createSprite(175, 145, 50, 50);
box12.setAnimation("m1.png_1");
box12.scale = 0.5;
var box13 = createSprite(225, 125, 50, 50);
box13.setAnimation("m1.png_1");
box13.scale = 0.5;
var box14 = createSprite(275, 145, 50, 50);
box14.setAnimation("m1.png_1");
box14.scale = 0.5;
var box15 = createSprite(325, 125, 50, 50);
box15.setAnimation("m1.png_1");
box15.scale = 0.5;
var box16 = createSprite(375, 145, 50, 50);
box16.setAnimation("m1.png_1");
box16.scale = 0.5;

var puntos = 0;

function draw() {
  background("#8E98E3");
  fill("yellow");
  text("puntos:  " + puntos, 20, 15);
  
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
  
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);


  paddle.x=World.mouseX;

  
  if(ball.isTouching(box1)){
    box1.destroy();
    puntos = puntos + 1;
  }
  
  if(ball.isTouching(box2)){
    box2.destroy();
     puntos = puntos + 1;
  }
  
  if(ball.isTouching(box3)){ 
    box3.destroy();
     puntos = puntos + 1;
  }
  
  if(ball.isTouching(box4)){
    box4.destroy();
     puntos = puntos + 1;
  }
  
   if(ball.isTouching(box5)){ 
     box5.destroy();
      puntos = puntos + 1;
  }
  
   if(ball.isTouching(box6)) {
     box6.destroy();
      puntos = puntos + 1;
  }
  
  if(ball.isTouching(box7)) { 
    box7.destroy();
     puntos = puntos + 1;
  }
  
  if(ball.isTouching(box8)){
    box8.destroy();
     puntos = puntos + 1;
  }
  // row 2 
  if(ball.isTouching(box9)){
    box9.destroy();
     puntos = puntos + 1;
  }
  
  if(ball.isTouching(box10)){
    box10.destroy();
     puntos = puntos + 1;
  }
  
  if(ball.isTouching(box11)){ 
    box11.destroy();
     puntos = puntos + 1;
  }
  
  if(ball.isTouching(box12)){
    box12.destroy();
     puntos = puntos + 1;
  }
  
   if(ball.isTouching(box13)){ 
     box13.destroy();
      puntos = puntos + 1;
  }
  
   if(ball.isTouching(box14)) {
     box14.destroy();
      puntos = puntos + 1;
  }
  
  if(ball.isTouching(box15)) { 
    box15.destroy();
     puntos = puntos + 1;
  }
  
  if(ball.isTouching(box16)){
    box16.destroy();
     puntos = puntos + 1;
  }
  
  
  
  ball.bounceOff(paddle);
  
  
  
  
  drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
