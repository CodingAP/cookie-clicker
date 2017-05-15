var cookies = 0;
var cps = 0;
var cpc = 1;
var mouseX;
var mouseY;
var limit = 10;
window.onload = function() {
	canvas = document.getElementById('canvas')
	context = canvas.getContext('2d')
	document.addEventListener('mousemove', draw, false);
	canvas.addEventListener('mousedown', click, false);
	var fps = 1;
	setInterval(function() {
		update();
	}, 1000/fps);
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
function draw(e) {
	var pos = getMousePos(canvas, e);
  	mouseX = pos.x;
  	mouseY = pos.y;
  	rect(0, 0, canvas.width, canvas.height, 'white');
	circle(canvas.width/2 - 200, canvas.height/2, 100, 'brown');
	line(500, 0, 500, canvas.height, 'black')
	text(Math.floor(cookies), "50px Arial", canvas.width/2 - 215, canvas.height * 0.25, 'black');
	rect(550, 50, 200, 100, 'black');
	text('Cursor', '30px Arial', 575, 100, 'white')
}
function update() {
	cookies += cps;
}
function click(e) {
	if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 400) {
		cookies += cpc;
	}
	if (mouseX > 550 && mouseX < 750 && mouseY > 50 && mouseY < 150 && cookies >= limit) {
		cps += 1;
		cookies -= limit;
		limit *= 1.1;
	}
}
function text(txt, fnt, x, y, c) {
  context.fillStyle = c;
  context.font = fnt;
  context.fillText(txt, x, y);
}
function rect(x, y, w, h, c) {
  context.fillStyle = c;
  context.fillRect(x, y, w, h);
}
function line(sx, sy, dx, dy, c) {
  context.moveTo(sx, sy);
  context.lineTo(dx, dy);
  context.strokeStyle = c;
  context.stroke();
}
function circle(x, y, r, c) {
  context.fillStyle = c;
  context.beginPath();
  context.arc(x, y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();
}
