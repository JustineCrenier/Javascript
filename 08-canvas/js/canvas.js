const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.strokeStyle = "red";
context.fillStyle = "red";

context.beginPath();
context.moveTo(50,400);
context.lineTo(50,50);
context.lineTo(300,50);
context.lineTo(300,200);
context.lineTo(70,200);
context.lineTo(70,400);
context.closePath();
context.stroke();
context.fill();


