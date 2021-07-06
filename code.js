var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var striker=createSprite(200, 200, 10, 10);
striker.shapeColor="white";
var playerMallet=createSprite(200, 350, 50, 10);
playerMallet.shapeColor="green";




gameState="serve";

    
   


function draw() {
  background("black");
  createEdgeSprites();
  striker.bounceOff(topEdge);
  striker.bounceOff(leftEdge);
  striker.bounceOff(rightEdge);
  
  
  if(keyDown("space")&& gameState==="serve")
  {
    serve();
    gameState="play";
    
  }
  
  striker.bounceOff(playerMallet);
 
  
  playerMallet.bounceOff(edges);
 
  if (gameState==="serve"){
    textSize(18);
    
    text("Press space to serve and use arrow keys to move ", 3, 190);
  }
  
  
  
  if(keyDown("left")){
    playerMallet.x-=10;
  }
  if(keyDown("right")){
    playerMallet.x+=10;
  }
  
  
  for(var i=0; i<400; i+=20){
    line(i, 200, i+10, 200);
  }
  
  
    
  
  
  
  
  
  if(striker.isTouching(bottomEdge)){
    textSize(20);
    striker.velocityX=0; 
    striker.velocityY=0;
    
    text("Game OVER...Press 'r' to restart", 70, 190);
    gameState="end";
    }
  
  if(keyDown("r") && gameState==="end"){
    gameState="serve";
    reset();
  }
  
  drawSprites();
   
}

function serve(){
  striker.velocityX=3;
  striker.velocityY=4;
}
  
    function reset(){
  striker.x=200;
  striker.y=200;
  striker.velocityX=0;
  striker.velocityY=0;
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
