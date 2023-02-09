$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(111, 450, 100, 75) ;
    createPlatform(200, 175, 200, 10) ;
    createPlatform(400,200,200,30) ;
    createPlatform(750,250,200,100) ;
    createPlatform(1000,300,400,50) ;

    
    
    
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    
        
    createCollectable("pusss", 1300, 100) ;
    createCollectable("pusss", 1200, 400) ;
    createCollectable("pusss", 1100, 400) ;
    createCollectable("pusss", 1000, 400) ;
    createCollectable("pusss", 900, 400) ;
    createCollectable("pusss", 800, 400) ;
    createCollectable("pusss", 700, 400) ;
    createCollectable("pusss", 600, 100) ;
    createCollectable("pusss", 500, 400) ;
    createCollectable("pusss", 400, 400) ;
    createCollectable("pusss", 300, 400) ;
    createCollectable("pusss",200, 100) ;
    createCollectable("shrekk",250, 400) ;
    createCollectable("shrekk",350, 400) ;
    createCollectable("shrekk",450, 100) ;
    createCollectable("shrekk",550, 400) ;
    createCollectable("shrekk",650, 400) ;
    createCollectable("shrekk",750, 100) ;
    createCollectable("shrekk",850, 100) ;
    createCollectable("shrekk",950, 400) ;
    createCollectable("shrekk",1050, 400) ;
    createCollectable("shrekk",1150, 100) ;

    createCollectable("shrekk",1250, 400) ;
    createCollectable("shrekk",1350, 400) ;
    createCollectable("shrekk",1450, 400) ;
    createCollectable("shrekk",1550, 100) ;
    createCollectable("shrekk",270, 100) ;
    createCollectable("shrekk",370, 400) ;
    createCollectable("shrekk",470, 400) ;
    createCollectable("shrekk",580, 100) ;
    createCollectable("shrekk",680, 400) ;
    createCollectable("shrekk",780, 400) ;

    createCollectable("shrekk",880, 400) ;
    createCollectable("shrekk",980, 100) ;
    createCollectable("shrekk",1180, 400) ;
    createCollectable("donkk",50, 400) ;
    createCollectable("donkk",120, 400) ;
    createCollectable("donkk",150, 400) ;
    createCollectable("donkk",25, 400) ;
    createCollectable("donkk",560, 400) ;
    createCollectable("donkk",780, 400) ;
    createCollectable("donkk",673, 400) ;
    createCollectable("donkk",538, 400) ;
    createCollectable("donkk",1246, 400) ;
    createCollectable("donkk",478, 400) ;
    createCollectable("donkk",987, 400) ;
    createCollectable("Luke",468, 400) ;
    createCollectable("Luke",242, 400) ;
    createCollectable("Luke",113, 400) ;
    createCollectable("Luke",983, 400) ; 
    createCollectable("Luke",322, 400) ;
    createCollectable("Luke",258, 400) ;
    createCollectable("Luke",824, 400) ;
    createCollectable("Luke",190, 400) ;
    createCollectable("Luke",725, 400) ;


    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)





    createCannon("left", 500, 1000) ;
    createCannon("top", 500, 1000) ;
    createCannon("top", 1000, 1000) ;
    
    

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
