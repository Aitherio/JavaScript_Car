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
var xRoofStart = 350;
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
var radius2 = 435;
var sAngle2 = 1.2;
var eAngle2 = 6.2;

ctx.beginPath();
ctx.arc(xCoordinate2, yCoordinate2, radius2, sAngle2, eAngle2);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(135, 340); // starting point
ctx.quadraticCurveTo(155, 460, 210, 490);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(110, 100); // starting point
ctx.quadraticCurveTo(135, 130, 135, 340);
ctx.stroke();

// second line // TODO: later


/*
// Smoke
var canvas = document.getElementById("car-canvas");
var ctxSmoke = canvas.getContext("2d"); // separated from stationary shapes to prevent any possible accident.
var raf;
// Smoke: roof
// TODO: add starting point's coordinate to sinX and sinY coordinate.


function sineGraph(sinXCoordinate) {
    return 200 * Math.sin(sinXCoordinate / 50 - 1.5) + 2 + 600 - 300;
}

var sinXCoordinate = Math.random() * 30 + 400; // 30 is temp. value
var sinYCoordinate = sineGraph(sinXCoordinate);
var randomRadius = Math.floor(Math.random() * 60) + 10;


// Smoke: object
ctxSmoke.beginPath();
ctxSmoke.arc(sinXCoordinate, sinYCoordinate, randomRadius, 0, 2 * Math.PI);
ctxSmoke.fillStyle = "#777"; // temp. change this colour later.
ctxSmoke.fill();


    // set sine graph
    var vx = 1, vy = 0;
    vy = sineGraph(vx);


// Smoke: basic animation // TODO y=sin(x) && y=x^2 && y=x^3
var smoke = {
    // starting point
    x: 600,
    y: 500,
    // moving
    vx: 1,
    vy: sineGraph(x),
    radius: 25,
    color: "#37B",
    draw: function() {
        ctxSmoke.beginPath();
        ctxSmoke.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctxSmoke.closePath();
        ctxSmoke.fillStyle = this.color;
        ctxSmoke.fill();
    }
};

function draw() {
    ctxSmoke.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctxSmoke.fillRect(0,0, canvas.width, canvas.height);
    smoke.draw();
    
    smoke.x += smoke.vx;
    smoke.y -= smoke.vy;

    if ((smoke.y + smoke.vy > canvas.height || smoke.y + smoke.vy < 0) || (smoke.x + smoke.vx > canvas.width || smoke.x + smoke.vx < 0)) {
        smoke.y = 600;
        smoke.x = 500;
    }

    raf = window.requestAnimationFrame(draw);
}


canvas.addEventListener('mouseover', function(e) {
    raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
    window.cancelAnimationFrame(raf);
});

smoke.draw();







// TODO
// made an object
// --> move it through y=sin(x) path? route? --> delete it on border
// Solve fade-out issue
*/
