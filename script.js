var canvas = document.getElementById('myCanvas'); // ste the variable for vanvas
var ctx = canvas.getContext('2d'); //create canvas objects in 2d

ctx.beginPath(); //draw a square
ctx.rect(20, 40, 100, 100);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();  //circle
ctx.arc(140, 190, 50, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
 
ctx.beginPath(); // rectangle
ctx.rect(160, 80, 200, 40);
ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
ctx.stroke();
ctx.beginPath();

ctx.moveTo(480,0); //line
ctx.lineTo(0,320);
ctx.stroke();
