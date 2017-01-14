function toggle(){
  document.getElementById('gameboard').style.display = "block";
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false)

//determine grid and square size
var rows = 10;
var cols = 10;
var squareSize= 50;

var gameBoardContainer = document.getElementById("gameboard");

//create grid
for(i = 0; i < cols; i++){
  for(j = 0; j < rows; j++){
    var square = document.createElement("div");
    gameBoardContainer.appendChild(square);
    square.id = 's' + j + i; //give each square a code based on its position in the grid
    //set coordinates
    var topPos = j * squareSize;
    var leftPos = i * squareSize;
    square.style.top = topPos + 'px';
    square.style.left = leftPos + 'px';
  }
}

var hits = 0;
var scoreCount = 0;

var score = function() {
  var score_text = "Score: " + scoreCount;
  ctx.fillStyle = 'black';
  ctx.fillText(score_text);
}

var gB1 = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,1,1,1,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,1,1,1,0,0,1,1,1,1],
				[0,0,0,1,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]
var gB2 = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]
var gB3 = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,1,0,0,0,0],
				[0,0,0,0,0,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,1,0,0],
				[1,0,0,1,0,0,0,1,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,1,0,0]
				]
var check = Math.floor(Math.random()*3) + 1;

if (check <= 1){
  var gameBoard = gB1;
} else if (check < 2 && check >= 1) {
  var gameBoard = gB2;
} else {
  var gameBoard = gB3;
}

gameBoardContainer.addEventListener("click", fireMissle, false);

function fireMissle(e) {
    var row = e.target.id.substring(1,2);
    var col = e.target.id.substring(2,3);

    if (gameBoard[row][col] > 1) {
        alert("You're wasting ammo! Stop firing!");
    }

    if(e.target !== e.currentTarget) {
      //if you miss
      if(gameBoard[row][col] == 0) {
        e.target.style.background = 'lightblue';
        gameBoard[row][col] = 3;
        scoreCount -= 20;
      //if you hit
    } else if(gameBoard[row][col] == 1) {
        e.target.style.background = 'red';
        gameBoard[row][col] = 2;
        hits++;
        scoreCount += 200
        }
        if(hits == 17) {
          alert("All enemy battleships have been defeated! You rock!");
          document.getElementById('gameboard').style.display = "none";
          window.location.reload();
        }
      }
      score();
  e.stopPropagation();
}

