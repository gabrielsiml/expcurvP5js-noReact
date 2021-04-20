/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  // Put setup code here
}

var exp1 = 0.6;
var incr = 10;
var itera = (window.innerWidth - 50) / incr;
function expcurv(step) {
  return Math.pow(step * incr, exp1) / Math.pow(incr * itera - incr, exp1 - 1);
}
function draw() {
  var i = 0;
  push();
  translate(20, 0);

  for (i = 0; i < itera; i++) {
    line(expcurv(i), 10, expcurv(i), 200);
  }

  pop();
  translate(20, 0);

  for (i = 0; i < itera; i++) {
    line(i * incr, 205, i * incr, 400);
  }
}
// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
