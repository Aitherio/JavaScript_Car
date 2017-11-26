//build context
var ctx = document.getElementById("car-canvas").getContext("2d");

////////////////////////   Car   ////////////////////////

/*For the beginning half of the car drawing, the variables are all relational
to each other. Then in the latter half, the points are hard coded.
*/
var xRoofStart = 200;
var yRoofStart = 200;
var mainBodyLength = 225;
var mainBodyDepth = 75;
var xRoofRight = 300;
var halfCarHeight = 90;

/*
Naming conventions follow:
The vertex with the largest x-coordinate is the "right"
The vertex with the largest y-coordinate is the "top"
The vertex with the smallest x-coordinate is the "left"
The vertex with the smallest y-coordinate is the "bot"
*/

//Roof of the car
//Variables (coordinates) set; then shape drawn, then shape colored
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
var roofGradient = ctx.createLinearGradient(320, 130, 360, 280);
roofGradient.addColorStop(0, "#666");
roofGradient.addColorStop(0.5, "#333");
roofGradient.addColorStop(1, "#000");
ctx.fillStyle = roofGradient;
ctx.fill();


//Front Windshield of the car
//Variables (coordinates) set; then shape drawn, then shape colored
var xWindshieldControl = xRoofStart + mainBodyDepth/2;
var yWindshieldControl = yRoofStart + halfCarHeight/1.5;
var xWindshieldLeft = xRoofStart;
var yWindshieldLeft = yRoofStart + halfCarHeight;
var xWindshieldBot = xRoofStart + mainBodyDepth;
var yWindshieldBot = yRoofStart + halfCarHeight + mainBodyDepth;
var xWindshieldRight = xRoofStart + mainBodyDepth;
var yWindshieldRight = yRoofStart + mainBodyDepth;
ctx.beginPath();
ctx.moveTo(xRoofStart, yRoofStart);
ctx.lineTo(xWindshieldLeft, yWindshieldLeft);
ctx.quadraticCurveTo(xWindshieldControl, yWindshieldControl, xWindshieldBot, yWindshieldBot);
ctx.lineTo(xWindshieldRight, yWindshieldRight);
ctx.closePath();
ctx.stroke();
var windShieldGradient = ctx.createLinearGradient(250, 240, 230, 340);
windShieldGradient.addColorStop(0, "#333");
windShieldGradient.addColorStop(0.5, "#222");
windShieldGradient.addColorStop(1, "#000");
ctx.fillStyle = windShieldGradient;
ctx.fill();

//Front window
//Shape drawn, then shape colored
ctx.beginPath();
ctx.moveTo(xRoofStart + 10, yRoofStart + 20);
ctx.lineTo(xWindshieldLeft + 10, yWindshieldLeft);
ctx.lineTo(xWindshieldBot - 10, yWindshieldBot - 20);
ctx.lineTo(xWindshieldRight - 10, yWindshieldRight + 3);
ctx.closePath();
ctx.stroke();
var mainWindowGradient = ctx.createLinearGradient(250, 250, 230, 340);
mainWindowGradient.addColorStop(0, "#75a4ea");
mainWindowGradient.addColorStop(0.5, "#638bc6");
mainWindowGradient.addColorStop(1, "#3f5a82");
ctx.fillStyle = mainWindowGradient;
ctx.fill();

//Hood of the Car
//Variables (coordinates) set; then shape drawn, then shape colored
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
var hoodGradient = ctx.createLinearGradient(220, 320, 230, 350);
hoodGradient.addColorStop(0, "#555");
hoodGradient.addColorStop(0.5, "#333");
hoodGradient.addColorStop(1, "#222");
ctx.fillStyle = hoodGradient;
ctx.fill();

//Front of the car
//Variables (coordinates) set; then shape drawn, then shape colored
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
var frontGradient = ctx.createLinearGradient(180, 330, 160, 440);
frontGradient.addColorStop(0, "#666");
frontGradient.addColorStop(0.5, "#333");
frontGradient.addColorStop(1, "#000");
ctx.fillStyle = frontGradient;
ctx.fill();

//Side of car
//Shape drawn, then shape colored
ctx.beginPath();
ctx.moveTo(xFrontBot, yFrontBot);
ctx.lineTo(xRoofRight, yRoofRight + 180);
ctx.lineTo(xRoofRight, yRoofRight);
ctx.lineTo(xRoofBot, yRoofBot);
ctx.lineTo(xHoodRight, yHoodRight);
ctx.lineTo(xFrontRight, yFrontRight);
ctx.stroke();
var sideGradient = ctx.createLinearGradient(350, 240, 400, 420);
sideGradient.addColorStop(0, "#777");
sideGradient.addColorStop(0.5, "#333");
sideGradient.addColorStop(1, "#111");
ctx.fillStyle = sideGradient;
ctx.fill();


///////////////////////////////////////////////////////////
// Coordinates will be hardcoded from this point onward: //
///////////////////////////////////////////////////////////

//Grill
ctx.beginPath();
ctx.moveTo(134, 330);
ctx.lineTo(134, 402);
ctx.lineTo(190, 460);
ctx.lineTo(190, 388);
ctx.quadraticCurveTo(160, 300, 134, 330);
ctx.closePath();
ctx.stroke();
var grillGradient = ctx.createLinearGradient(180, 330, 160, 440);
grillGradient.addColorStop(0, "#666");
grillGradient.addColorStop(0.5, "#333");
grillGradient.addColorStop(1, "#000");
ctx.fillStyle = grillGradient;
ctx.fill();

//Grill lines
ctx.beginPath();
ctx.moveTo(143, 323);
ctx.lineTo(143, 402);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(152, 322);
ctx.lineTo(152, 410);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(162, 329);
ctx.lineTo(162, 420);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(172, 345);
ctx.lineTo(172, 430);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(181, 363);
ctx.lineTo(181, 440);
ctx.closePath();
ctx.stroke();

//Front Right head light
// ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
ctx.beginPath();
ctx.ellipse(140, 377, 7, 14, 0, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();
var rightLightGradient = ctx.createLinearGradient(150, 360, 140, 380);
rightLightGradient.addColorStop(0, "#fff");
rightLightGradient.addColorStop(0.5, "#fff8a0");
rightLightGradient.addColorStop(1, "#fff030");
ctx.fillStyle = rightLightGradient;
ctx.fill();

//Front Left head light
ctx.beginPath();
ctx.ellipse(182, 416, 7, 14, 0, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();
var leftLightGradient = ctx.createLinearGradient(190, 400, 180, 420);
leftLightGradient.addColorStop(0, "#fff");
leftLightGradient.addColorStop(0.5, "#fff8a0");
leftLightGradient.addColorStop(1, "#fff030");
ctx.fillStyle = leftLightGradient;
ctx.fill();

//Front Bumper
ctx.beginPath();
ctx.moveTo(130, 385);
ctx.lineTo(185, 435);
ctx.lineTo(185, 480);
ctx.lineTo(130, 425);
ctx.closePath();
ctx.stroke();
var bumperGradient = ctx.createLinearGradient(180, 420, 160, 450);
bumperGradient.addColorStop(0, "#666");
bumperGradient.addColorStop(0.5, "#333");
bumperGradient.addColorStop(1, "#000");
ctx.fillStyle = bumperGradient;
ctx.fill();

//Rain Cover
ctx.beginPath();
ctx.moveTo(204, 209);
ctx.lineTo(182, 220);
ctx.lineTo(246, 290);
ctx.lineTo(271, 277);
ctx.closePath();
ctx.stroke();
var rainGradient = ctx.createLinearGradient(240, 240, 220, 260);
rainGradient.addColorStop(0, "#aaa");
rainGradient.addColorStop(0.5, "#444");
rainGradient.addColorStop(1, "#000");
ctx.fillStyle = rainGradient;
ctx.fill();

//Door
ctx.beginPath();
ctx.moveTo(360, 427);
ctx.lineTo(360, 260);
ctx.lineTo(435, 235);
ctx.lineTo(435, 402);
ctx.closePath();
ctx.stroke();
var doorGradient = ctx.createLinearGradient(390, 280, 420, 390);
doorGradient.addColorStop(0, "#777");
doorGradient.addColorStop(0.5, "#333");
doorGradient.addColorStop(1, "#111");
ctx.fillStyle = doorGradient;
ctx.fill();

//Door Step
ctx.beginPath();
ctx.moveTo(357, 437);
ctx.lineTo(350, 420);
ctx.lineTo(440, 390);
ctx.lineTo(450, 405);
ctx.closePath();
ctx.stroke();
var stepGradient = ctx.createLinearGradient(410, 398, 417, 420);
stepGradient.addColorStop(0, "#aaa");
stepGradient.addColorStop(0.5, "#555");
stepGradient.addColorStop(1, "#000");
ctx.fillStyle = stepGradient;
ctx.fill();

//Door window
ctx.beginPath();
ctx.moveTo(365, 340);
ctx.lineTo(365, 267);
ctx.lineTo(430, 246);
ctx.lineTo(430, 320);
ctx.closePath();
ctx.stroke();
var doorWindowGradient = ctx.createLinearGradient(407, 270, 420, 310);
doorWindowGradient.addColorStop(0, "#75a4ea");
doorWindowGradient.addColorStop(0.5, "#638bc6");
doorWindowGradient.addColorStop(1, "#3f5a82");
ctx.fillStyle = doorWindowGradient;
ctx.fill();

//Back Window
ctx.beginPath();
ctx.moveTo(445, 315);
ctx.lineTo(445, 242);
ctx.lineTo(490, 228);
ctx.lineTo(490, 300);
ctx.closePath();
ctx.stroke();
var backWindowGradient = ctx.createLinearGradient(460, 255, 470, 290);
backWindowGradient.addColorStop(0, "#75a4ea");
backWindowGradient.addColorStop(0.5, "#638bc6");
backWindowGradient.addColorStop(1, "#3f5a82");
ctx.fillStyle = backWindowGradient;
ctx.fill();

//Front Window
ctx.beginPath();
ctx.moveTo(290, 365);
ctx.lineTo(290, 290);
ctx.lineTo(350, 271);
ctx.lineTo(350, 345);
ctx.closePath();
ctx.stroke();
var frontWindowGradient = ctx.createLinearGradient(323, 300, 335, 335);
frontWindowGradient.addColorStop(0, "#75a4ea");
frontWindowGradient.addColorStop(0.5, "#638bc6");
frontWindowGradient.addColorStop(1, "#3f5a82");
ctx.fillStyle = frontWindowGradient;
ctx.fill();

//Front Tire
ctx.beginPath();
ctx.ellipse(300, 440, 47, 67, 0, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fillStyle="rgba(11, 11, 11, 0.7)";
ctx.fill();
ctx.beginPath();
ctx.ellipse(300, 440, 39, 59, 0, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();

//Front Tire Spokes
ctx.beginPath();
ctx.moveTo(300 - 39, 440);
ctx.lineTo(300 + 39, 440);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300, 440 - 59);
ctx.lineTo(300, 440 + 59);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300 - 30, 440 - 38);
ctx.lineTo(300 + 30, 440 + 38);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300 - 30, 440 + 38);
ctx.lineTo(300 + 30, 440 - 38);
ctx.closePath();
ctx.stroke();

//Back Tire
ctx.beginPath();
ctx.ellipse(500, 360, 45, 65, 0, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "rgba(10, 10, 10, 0.7)";
ctx.fill();
ctx.beginPath();
ctx.ellipse(500, 360, 38, 58, 0, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();

//Back Tire Spokes
ctx.beginPath();
ctx.moveTo(500 - 38, 360);
ctx.lineTo(500 + 38, 360);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(500, 360 - 58);
ctx.lineTo(500, 360 + 58);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(500 - 29, 360 - 35);
ctx.lineTo(500 + 29, 360 + 35);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(500 - 29, 360 + 35);
ctx.lineTo(500 + 29, 360 - 35);
ctx.closePath();
ctx.stroke();

// Smoke 
// starting point: x 520, y 300

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