var drawModule = (function () {
  var bodySnek = function(x, y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x*SnekSize, y*SnekSize, SnekSize, SnekSize);
  }
  var foodBlock = function(x, y) {
        var random = '0123456789ABCDEF';
        var color = '#';
        for(var i = 0; i < 6; i++) {
          color += random[Math.floor(Math.random()*16)]; //lets the food block take on different colors
          }
        ctx.fillStyle = color;
        ctx.fillRect(x*SnekSize, y*SnekSize, SnekSize, SnekSize);
  }
  var scoreText = function() {
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillText(score_text, 10, h-2);
  }
  var drawSnek = function() {
      var length = 2;
      Snek = [];
      for (var i = length-1; i>=0; i--) {
          Snek.push({x:i, y:0});
      }
  }
  var paint = function(){               //paint the canvas
      ctx.fillStyle = 'lightgrey';      //lightgrey center
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'black';        //black edges
      ctx.strokeRect(0, 0, w, h);
      btn.setAttribute('disabled', true);   //while canvas is painted, disable button function

      var SnekX = Snek[0].x;
      var SnekY = Snek[0].y;

      if (direction == 'right') {         //let the snake move in four directions
        SnekX++; }
      else if (direction == 'left') {
        SnekX--; }
      else if (direction == 'up') {
        SnekY--;
      } else if(direction == 'down') {
        SnekY++; }
      if (SnekX == -1 || SnekX == w/SnekSize || SnekY == -1 || SnekY == h/SnekSize || checkCollision(SnekX, SnekY, Snek)) {
          //restart game when collision is true
          btn.removeAttribute('disabled', true); //enable button again

          score = 0;                //reset score
          ctx.clearRect(0,0,w,h);   //clear up the canvas
          loop = clearInterval(loop);
          return;
        }
        if(SnekX == food.x && SnekY == food.y) {
          var tail = {x: SnekX, y: SnekY}; //Create a new head instead of moving the tail
          score ++; //score +1
          createFood(); //Create new food
        } else {
          var tail = Snek.pop(); //pops out the last cell
          tail.x = SnekX;
          tail.y = SnekY;
        }
        //The Snek can now eat the food.
        Snek.unshift(tail); //puts back the tail as the first cell
        for(var i = 0; i < Snek.length; i++) {
          bodySnek(Snek[i].x, Snek[i].y);
        }
        foodBlock(food.x, food.y);
        scoreText();
  }
  var createFood = function() { //generate first random food
      food = {
        x: Math.floor((Math.random() * 45) + 1),
        y: Math.floor((Math.random() * 45) + 1)
      }
      for (var i=0; i>Snek.length; i++) {
        var SnekX = Snek[i].x;
        var SnekY = Snek[i].y;
          //generate new random food when food is eaten
        if (food.x===SnekX && food.y === SnekY || food.y === SnekY && food.x===SnekX) {
          food.x = Math.floor((Math.random() * 45) + 1);
          food.y = Math.floor((Math.random() * 45) + 1);
        }
      }
  }
  var checkCollision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      }
      return false;
  }
  var init = function(){    //execute all neccessary functions
      direction = 'right';
      drawSnek();
      createFood();
      loop = setInterval(paint,70);
  }
    return { //run init function
      init : init
    };
}());
