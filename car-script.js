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



// Smoke
// circle
ctx.beginPath();
ctx.arc(50, 75, 40, 0, 2 * Math.PI);
ctx.stroke();

// Random int for radius (min. 10 - max. 60)
var randomRadius = Math.floor(Math.random() * 60) + 10;

var smoke = document.getElementById("car-canvas").getContext("2d");
smoke.beginPath();
smoke.arc(150, 375, randomRadius, 0, 2 * Math.PI);
smoke.fillStyle = "#777";
smoke.fill();
// y = sin(x);


var sinXCoordinate;
var sinYCoordinate;


sinYCoordinate = Math.sin(sinXCoordinate);

var elem = smoke;
var pos = 0;
var id = setInterval(frame, 10);

function frame() {
    if (pos == 780) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}



