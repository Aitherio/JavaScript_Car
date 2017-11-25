var canvas = document.getElementById("car-canvas");
var ctxSmokeC = canvas.getContext("2d"); // separated from stationary shapes to prevent any possible accident.
var raf;
// Smoke object


function cosGraph(XCoordinate) {
    return 200 * Math.cos((XCoordinate - 600) / 50) + 300;
}

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