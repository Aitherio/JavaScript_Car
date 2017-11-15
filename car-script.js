//build context
var ctx = document.getElementById("car-canvas").getContext("2d");

//Car

//Roof of the car. Variables all based on a single x,y point to ease transformations
var xRoofStart = 350;
var yRoofStart = 200;
var xRoofTop = 225;
var yRoofTop = 75;
var xRoofRight = 300;
var xRoofBot = 75;
var yRoofBot = 75;
ctx.beginPath();
ctx.moveTo(xRoofStart, yRoofStart);
ctx.lineTo(xRoofStart + xRoofTop, yRoofStart - yRoofTop);
ctx.lineTo(xRoofStart + xRoofRight, yRoofStart);
ctx.lineTo(xRoofStart + xRoofBot, yRoofStart + yRoofBot);
ctx.closePath();
ctx.stroke();

/* If you want to colour the rectangle
ctx.fillStyle="red";
ctx.fill();
*/

// Smoke
// from left-up to right-down
// first line
var xCoordinate1 = 410;
var yCoordinate1 = 310;
var radius1 = 280;
var sAngle1 = 2.5;
var eAngle1 = 3;

ctx.beginPath();
ctx.arc(xCoordinate1, yCoordinate1, radius1, sAngle1, eAngle1);
ctx.stroke();

var xCoordinate2 = -300;
var yCoordinate2 = 400;
var radius2 = 400;
var sAngle2 = 1.2;
var eAngle2 = 0;

var firstLine2 = document.getElementById("car-canvas");
var ctx = firstLine2.getContext("2d");

ctx.beginPath();
ctx.arc(xCoordinate2, yCoordinate2, radius2, sAngle2, eAngle2);
ctx.stroke();


// second line
