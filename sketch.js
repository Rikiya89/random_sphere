let numSpheres = 100;
let spheres = [];
let camZ;

function setup() {
  createCanvas(800, 600, WEBGL);
  camZ = (height / 2.0) / tan(PI * 30.0 / 180.0); // initialize camera z-coordinate here
  background(200);
  for (let i = 0; i < numSpheres; i++) {
    let r = random(50, 200);
    let x = random(-width / 2, width / 2);
    let y = random(-height / 2, height / 2);
    let z = random(-500, 500);
    let color = [random(0, 255), random(0, 255), random(0, 255)];
    spheres.push({ r, x, y, z, color });
  }
}

function draw() {
  background(200);
  let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);
  camera(camX, camY, camZ, camX, camY, 0, 0, 1, 0);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  for (let i = 0; i < numSpheres; i++) {
    push();
    translate(spheres[i].x, spheres[i].y, spheres[i].z);
    fill(spheres[i].color);
    sphere(spheres[i].r);
    pop();
  }
}

function mouseWheel(event) {
  let e = event.delta;
  if (e > 0) { // scrolling down
    camZ += 10;
  } else if (e < 0) { // scrolling up
    camZ -= 10;
  }
  // prevent default browser scroll behavior
  return false;
}
