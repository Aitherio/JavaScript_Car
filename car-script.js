// Smoke
// from left-up to right-down
// first line
var xCoordinate1 = 410;
var yCoordinate1 = 310;
var radius1 = 280;
var sAngle1 = 2.5;
var eAngle1 = 3;

var firstLine1 = document.getElementById("car-canvas");
var ctx1 = firstLine1.getContext("2d");

ctx1.beginPath();
ctx1.arc(xCoordinate1, yCoordinate1, radius1, sAngle1, eAngle1); 
ctx1.stroke();

var xCoordinate2 = -300;
var yCoordinate2 = 400;
var radius2 = 400;
var sAngle2 = 1.2;
var eAngle2 = 0;

var firstLine2 = document.getElementById("car-canvas");
var ctx2 = firstLine2.getContext("2d");

ctx2.beginPath();
ctx2.arc(xCoordinate2, yCoordinate2, radius2, sAngle2, eAngle2); 
ctx2.stroke();


// second line