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

/* equation */
function cosGraph(XCoordinate) {
    return 200 * Math.cos((XCoordinate - 600) / (Math.random() * 30 + 60)) + Math.random() * 70 + 300;
}

function quadraticEquation(xCoordinate) {
    return -1 * Math.pow((xCoordinate - 500) / (Math.random() * 15 + 15), 2) + Math.random() * 30 + 500;
}

function cubicEquation(xCoordinate) {
    return -1 * Math.pow((xCoordinate - 600) / 25, 3) + Math.random() * 30 + 550;
}

/* slider */
var slider = document.getElementById("slider");
var printspeed = document.getElementById("speed-input");
var speedInput = slider.value;

slider.oninput = function() {
    speedInput = this.value;
    printspeed.innerHTML = speedInput;
}

printspeed.innerHTML = speedInput;


/* object */

// Smoke object
var canvas = document.getElementById("car-canvas");


// object: cosine
var rafC;

var smokeCos = {
    x: 600,
    y: cosGraph(600),
    radius: 10,
    color: "rgba(220, 220, 220, 0.3)",
    drawC: function() {
        this.y = cosGraph(this.x);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawC() {
    smokeCos.drawC();
    smokeCos.x += Math.random() * 10;
    smokeCos.y += Math.random() * 50;
    
    smokeCos.radius += Math.floor(Math.random() * 3);

    if (smokeCos.y > canvas.height || smokeCos.y < 0
       || smokeCos.x > canvas.width || smokeCos.x < 0 ) {
        smokeCos.x = 600;
        smokeCos.y = cosGraph(600);
        smokeCos.radius = 5;
    }

    rafC = window.requestAnimationFrame(drawC);
}


// object: quadratic equation
var rafQ;

var smokeQE = {
    x: 600,
    y: quadraticEquation(600),
    radius: 7,
    color: "rgba(255, 255, 255, 0.5)",
    drawQ: function() {
        this.y = quadraticEquation(this.x);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawQ() {
    smokeQE.drawQ();
    smokeQE.x += Math.random() * 10;
    smokeQE.y -= Math.random() * 50;
    
    smokeQE.radius += Math.floor(Math.random() * 3);

    if (smokeQE.y > canvas.height || smokeQE.y < 0 
        || smokeQE.x > canvas.width || smokeQE.x < 0) {
        smokeQE.x = 600;
        smokeQE.y = quadraticEquation(600);
        smokeQE.radius = 10;
    }
    
    rafQ = window.requestAnimationFrame(drawQ);
}




// object: cubic equation
var rafCE;

var smokeCE = {
    x: 600,
    y: quadraticEquation(600),
    radius: 5,
    color: "rgba(255, 255, 255, 0.5)",
    drawCE: function() {
        this.y = cubicEquation(this.x);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function drawCE() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
    ctx.fillRect(535, 0, canvas.width, canvas.height);
    smokeCE.drawCE();
    smokeCE.x += Math.random() * 10;
    smokeCE.y -= Math.random() * 50;
    
    smokeCE.radius += Math.floor(Math.random() * 5);

    if (smokeCE.y > canvas.height || smokeCE.y < 0 
        || smokeCE.x > canvas.width || smokeCE.x < 0) {
        smokeCE.x = 600;
        smokeCE.y = cubicEquation(600);
        smokeCE.radius = 5;
    }
    

    rafCE = window.requestAnimationFrame(drawCE);
}



/* Event */


canvas.addEventListener('mouseover', function(e) {
    rafQ = window.requestAnimationFrame(drawQ);
    rafC = window.requestAnimationFrame(drawC);
    rafCE = window.requestAnimationFrame(drawCE);
});

canvas.addEventListener('mouseout', function(e) {
    window.cancelAnimationFrame(rafQ);
    window.cancelAnimationFrame(rafC);
    window.cancelAnimationFrame(rafCE);
});

smokeCos.drawC();
smokeQE.drawQ();
smokeCE.drawCE();

// TODO
// made an object
// --> move it through y=sin(x) path? route? --> delete it on border
// Solve fade-out issue

