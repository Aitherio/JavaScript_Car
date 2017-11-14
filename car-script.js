//build context
var ctx = document.getElementById("car-canvas").getContext("2d");

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
