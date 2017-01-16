var clickedTime;
var createdTime;
var reactionTime;
var highScore = [];
var score = [];
var sec = 0;








//-----------------------------------------------------------------------------

//Easy difficulty

function makeBoxE() {


  //Set the properties for the box within the game will be played and the properties for the shape

  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var time = Math.random() * 5000;
  var windowHeight = window.innerHeight; //Responsible for the scaling of the website
  var windowWidth = window.innerWidth; //Responsible for the scaling of the website
  var top = (Math.random()*(windowHeight-400)+200);
  var left = Math.random()*(windowWidth-200);
  var shape = Math.random()*50;

  //Create the shape using the previously stated properties
  setTimeout(function() {
    document.getElementById("boxE").style.display="block";
    document.getElementById("boxE").style.background=hue;
    document.getElementById("boxE").style.top=top + "px";
    document.getElementById("boxE").style.left=left + "px";
    document.getElementById("boxE").style.borderRadius=shape + "%";
    createdTime = Date.now();
}, time);


  //Set the color of the highScore counter red if you beat your high score!
  if(highScore.length > 0 && reactionTime == highScore[0]) {
    document.getElementById("highScore").style.color="red";
  } else {
    document.getElementById("highScore").style.color="white";
  }
  //Some easter eggs.. Heheh
  if (reactionTime<0.45) {
    confirm("Congratulations! You have beaten the game!\nAs for the suprise..");
    alert("There is no suprise, neither is there an end!\nYou just keep on playing..and playing.. and playing");
  }
  if (reactionTime==0.666) {
    alert("SATAN!");
  }



//Calculate your reaction time and pushes it in the high score array to compare whether your time is better than your previous best
document.getElementById("boxE").onclick = function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/1000;
  reactionTimeRaw = clickedTime - createdTime;
  points = 2000 - reactionTimeRaw;
  if (points < 0) {
    points -= points;
  }
  score.push(points);
  score.sort(function(a, b){return b-a});
  document.getElementById("score").innerHTML = score[0];
  highScore.push(reactionTime);
  highScore.sort(function(a, b){return a-b});
  document.getElementById("highScore").innerHTML = highScore[0];
  document.getElementById("time").innerHTML = reactionTime;
  this.style.display="none";

  makeBoxE();
}
}

//-----------------------------------------------------------------------------

//Medium difficulty

function makeBoxM() {



  //Set the properties for the box within the game will be played and the properties for the shape

  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var time = Math.random() * 5000;
  var windowHeight = window.innerHeight; //Responsible for the scaling of the website
  var windowWidth = window.innerWidth; //Responsible for the scaling of the website
  var top = (Math.random()*(windowHeight-400)+200);
  var left = Math.random()*(windowWidth-200);
  var shape = Math.random()*50;

  //Create the shape using the previously stated properties
  setTimeout(function() {
    document.getElementById("boxM").style.display="block";
    document.getElementById("boxM").style.background=hue;
    document.getElementById("boxM").style.top=top + "px";
    document.getElementById("boxM").style.left=left + "px";
    document.getElementById("boxM").style.borderRadius=shape + "%";
    createdTime = Date.now();
}, time);


  //Set the color of the highScore counter red if you beat your high score!
  if(highScore.length > 0 && reactionTime == highScore[0]) {
    document.getElementById("highScore").style.color="red";
  } else {
    document.getElementById("highScore").style.color="white";
  }
  //Some easter eggs.. Heheh
  if (reactionTime<0.35) {
    confirm("Congratulations! You have beaten the game!\nAs for the suprise..");
    alert("There is no suprise, neither is there an end!\nYou just keep on playing..and playing.. and playing");
  }
  if (reactionTime==0.666) {
    alert("SATAN!");
  }

//Calculate your reaction time and pushes it in the high score array to compare whether your time is better than your previous best
document.getElementById("boxM").onclick = function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/1000;
  reactionTimeRaw = clickedTime - createdTime;
  points = 2000 - reactionTimeRaw;
  if (points < 0) {
    points -= points;
  }
  score.push(points);
  score.sort(function(a, b){return b-a});
  document.getElementById("score").innerHTML = score[0];
  highScore.push(reactionTime);
  highScore.sort(function(a, b){return a-b});
  document.getElementById("highScore").innerHTML = highScore[0];
  document.getElementById("time").innerHTML = reactionTime;
  this.style.display="none";

  makeBoxM();
    }
  }

//-----------------------------------------------------------------------------

//Hard difficulty

function makeBoxH() {

  //Set the properties for the box within the game will be played and the properties for the shape

  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var time = Math.random() * 5000;
  var windowHeight = window.innerHeight; //Responsible for the scaling of the website
  var windowWidth = window.innerWidth; //Responsible for the scaling of the website
  var top = (Math.random()*(windowHeight-400)+200);
  var left = Math.random()*(windowWidth-200);
  var shape = Math.random()*50;

  //Create the shape using the previously stated properties
  setTimeout(function() {
    document.getElementById("boxH").style.display="block";
    document.getElementById("boxH").style.background=hue;
    document.getElementById("boxH").style.top=top + "px";
    document.getElementById("boxH").style.left=left + "px";
    document.getElementById("boxH").style.borderRadius=shape + "%";
    createdTime = Date.now();
}, time);


  //Set the color of the highScore counter red if you beat your high score!
  if(highScore.length > 0 && reactionTime == highScore[0]) {
    document.getElementById("highScore").style.color="red";
  } else {
    document.getElementById("highScore").style.color="white";
  }
  //Some easter eggs.. Heheh
  if (reactionTime<0.35) {
    confirm("Congratulations! You have beaten the game!\nAs for the suprise..");
    alert("There is no suprise, neither is there an end!\nYou just keep on playing..and playing.. and playing");
  }
  if (reactionTime==0.666) {
    alert("SATAN!");
  }


//Calculate your reaction time and pushes it in the high score array to compare whether your time is better than your previous best
document.getElementById("boxH").onclick = function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/1000;
  reactionTimeRaw = clickedTime - createdTime;
  points = 2000 - reactionTimeRaw;
  if (points < 0) {
    points -= points;
  }
  score.push(points);
  score.sort(function(a, b){return b-a});
  document.getElementById("score").innerHTML = score[0];
  highScore.push(reactionTime);
  highScore.sort(function(a, b){return a-b});
  document.getElementById("highScore").innerHTML = highScore[0];
  document.getElementById("time").innerHTML = reactionTime;
  this.style.display="none";

  makeBoxH();
}
}

function stopMH() {
  document.getElementById("medium").style.visibility="hidden";
  document.getElementById("hard").style.visibility="hidden";
  document.getElementById("start").style.display="none";
  makeBoxE();
}
function stopEH() {
 document.getElementById("easy").style.visibility="hidden";
 document.getElementById("hard").style.visibility="hidden";
 document.getElementById("start").style.display="none";
 makeBoxM();
}
function stopEM() {
 document.getElementById("medium").style.visibility="hidden";
 document.getElementById("easy").style.visibility="hidden";
 document.getElementById("start").style.display="none";
 makeBoxH();
}

//document.getElementById("easy").onclick=makeBoxE;
document.getElementById("easy").onclick=stopMH;
//document.getElementById("medium").onclick=makeBoxM;
document.getElementById("medium").onclick=stopEH;
//document.getElementById("hard").onclick=makeBoxH;
document.getElementById("hard").onclick=stopEM;

function pad (val) {
  return val > 9 ? val : "0" + val;
}
setInterval(function(){
    document.getElementById("counter").innerHTML=pad(++sec);
}, 1000);
