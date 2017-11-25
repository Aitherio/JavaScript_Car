//build context
var ctx = document.getElementById("car-canvas").getContext("2d");

//Car

/*
Naming conventions follow:
The vertex with the largest x-coordinate is the "right"
The vertex with the largest y-coordinate is the "top"
The vertex with the smallest x-coordinate is the "left"
The vertex with the smallest y-coordinate is the "bot"
*/

//Variables all based on a single x,y point to ease transformations
//The variables (other than start) contain the transformation factors, not the coordinates themselves.
var xRoofStart = 200;
var yRoofStart = 200;
var mainBodyLength = 225;
var mainBodyDepth = 75;
var xRoofRight = 300;
var halfCarHeight = 90;

//Roof of the car
var xRoofTop = xRoofStart + mainBodyLength;
var yRoofTop = yRoofStart - mainBodyDepth;
var xRoofRight = xRoofTop + mainBodyDepth;
var yRoofRight = yRoofStart;
var xRoofBot = xRoofStart + mainBodyDepth;
var yRoofBot = yRoofStart + mainBodyDepth;

ctx.beginPath();
ctx.moveTo(xRoofStart, yRoofStart);
ctx.lineTo(xRoofTop, yRoofTop);
ctx.lineTo(xRoofRight, yRoofRight);
ctx.lineTo(xRoofBot, yRoofBot);
ctx.closePath();
ctx.stroke();

//Front Windshield of the car
var xWindshieldControl = xRoofStart + mainBodyDepth/2;
var yWindshieldControl = yRoofStart + halfCarHeight/1.5;
var xWindshieldLeft = xRoofStart;
var yWindshieldLeft = yRoofStart + halfCarHeight;
var xWindshieldBot = xRoofStart + mainBodyDepth;
var yWindshieldBot = yRoofStart + halfCarHeight + mainBodyDepth;
var xWindshieldRight = xRoofStart + mainBodyDepth;
var yWindshieldRight = yRoofStart + mainBodyDepth;

ctx.beginPath();
//top point of windshield
ctx.moveTo(xRoofStart, yRoofStart);
ctx.lineTo(xWindshieldLeft, yWindshieldLeft);
//quadraticCurveTo(Control x, control y, endpoint x, endpoint y)
ctx.quadraticCurveTo(xWindshieldControl, yWindshieldControl, xWindshieldBot, yWindshieldBot);
ctx.lineTo(xWindshieldRight, yWindshieldRight);
ctx.closePath();
ctx.stroke();

//Hood of the Car
var xHoodStart = xRoofStart;
var yHoodStart = yRoofStart + halfCarHeight;
var xHoodLeft = xHoodStart - mainBodyLength/3;
var yHoodLeft = yHoodStart + mainBodyDepth/3;
var xHoodBot = xHoodStart + mainBodyDepth - mainBodyLength/3;
var yHoodBot = yHoodStart + mainBodyDepth + mainBodyDepth/3;
var xHoodControl = xWindshieldControl - (xHoodStart - xHoodLeft);
var yHoodControl = yWindshieldControl + (yHoodLeft - yHoodStart);
var xHoodRight = xWindshieldBot;
var yHoodRight = yWindshieldBot;

ctx.beginPath();
ctx.moveTo(xHoodStart, yHoodStart);
ctx.lineTo(xHoodLeft, yHoodLeft);
ctx.quadraticCurveTo(xHoodControl, yHoodControl, xHoodBot, yHoodBot);
ctx.lineTo(xHoodRight, yHoodRight);
ctx.quadraticCurveTo(xWindshieldControl, yWindshieldControl, xHoodStart, yHoodStart);
ctx.closePath();
ctx.stroke();

//Front of the car
var xFrontStart = xHoodLeft;
var yFrontStart = yHoodLeft;
var xFrontLeft = xFrontStart;
var yFrontLeft = yFrontStart + halfCarHeight;
var xFrontBot = xHoodBot;
var yFrontBot = yHoodBot + halfCarHeight;
var xFrontRight = xHoodBot;
var yFrontRight = yHoodBot;

ctx.beginPath();
ctx.moveTo(xFrontStart, yFrontStart);
ctx.lineTo(xFrontLeft, yFrontLeft);
ctx.lineTo(xFrontBot, yFrontBot);
ctx.lineTo(xFrontRight, yFrontRight);
ctx.quadraticCurveTo(xHoodControl, yHoodControl, xFrontStart, yFrontStart);
ctx.closePath();
ctx.stroke();
/* If you want to colour the rectangle
ctx.fillStyle="red";
ctx.fill();
*/

// Smoke
/*
equation
1: y=200 * cos((x - 500) / 50) - 300
2: y=x^2 
3: y=x^3

equation --> object 
*/

function cosGraph(XCoordinate) {
    return 200 * Math.cos((XCoordinate - 600) / 50) + 300;
}

function quadraticEquation(xCoordinate) {
    return xCoordinate * xCoordinate;
}

function cubicEquation(xCoordinate) {
    return xCoordinate * xCoordinate * xCoordinate;
}

// Smoke object
var canvas = document.getElementById("car-canvas");
var ctxSmokeC = canvas.getContext("2d"); // separated from stationary shapes to prevent any possible accident.
var raf;
// Smoke: roof


var cosXCoordinate = Math.random() * 30 + 400; // horizontal random move for 30, starts at x=400 
var cosYCoordinate = cosGraph(cosXCoordinate);
var randomRadius = Math.floor(Math.random() * 60) + 10;


// object: cosine

var smokeCos = {
    x: 600,
    vx: .1,
    y: cosGraph(this.x),
    radius: 25,
    color: 'blue',
    drawC: function() {
        this.y = cosGraph(this.x);
        ctxSmokeC.beginPath();
        ctxSmokeC.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctxSmokeC.closePath();
        ctxSmokeC.fillStyle = this.color;
        ctxSmokeC.fill();
    }
};

function drawC() {
    ctxSmokeC.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctxSmokeC.fillRect(0, 0, canvas.width, canvas.height);
    smokeCos.drawC();
    smokeCos.x += 1;

    if (smokeCos.y > canvas.height ||
        smokeCos.y < 0) {
        smokeCos.y = cosGraph(600);
    }
    if (smokeCos.x + smokeCos.vx > canvas.width ||
        smokeCos.x + smokeCos.vx < 0) {
        smokeCos.x = 600;
    }

    raf = window.requestAnimationFrame(drawC);
}

canvas.addEventListener('mouseover', function(e) {
    raf = window.requestAnimationFrame(drawC);
});

canvas.addEventListener('mouseout', function(e) {
    window.cancelAnimationFrame(raf);
});

smokeCos.drawC();






// TODO
// made an object
// --> move it through y=sin(x) path? route? --> delete it on border
// Solve fade-out issue

