var canvas = document.getElementById('myCanvas'); // set the variable for vanvas
var ctx = canvas.getContext('2d'); //create canvas objects in 2d

//set var for start height and width
var x = canvas.width / 2;
var y = canvas.height - 30;

//set the vars for how much should move every frame
var dx = 2;
var dy = -2;
//var for ball radius
var ballRadius = 10;
//vars for paddle
var paddleHeight = 10;
var paddleWidth = 75;
//starting x position
var paddleX = (canvas.width - paddleWidth) / 2;
//keyboard controls
var rightPress = false;
var leftPress = false;

//event listeners
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

//key push and release handlers, when the key is pressed then the variable righrPress/leftPress is set to true and reverse
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPress = true;
  } else if (e.keyCode == 37) {
    leftPress = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPress = false;
  } else if (e.keyCode == 37) {
    leftPress = false;
  }
}

function drawBall() {
  //drawing ball
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx, fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  //clear the circle every frame, drawing a rect on whole canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //drwa functions
  drawBall();
  drawPaddle();

  // if ball hit the top change disretion
  if (y + dy < ballRadius) {
    dy = -dy;
    // if balls touch the paddle it bounce back, in other case game ends
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("GAME OVER");
      document.location.reload();
    }
  }
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  //paddle control
  if (rightPress && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPress && paddleX > 0) {
    paddleX -= 7;
  }

  //add every frame x = x + dx
  x += dx;
  y += dy;
}

//set interval for draw function - 10 miliseconds
setInterval(draw, 10);