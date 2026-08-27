function setup() {
  createCanvas(600,600);
  background(186, 245, 240);
  angleMode(DEGREES)
}

function draw() {
  translate(width/2,height/2);
  fill(255, 241, 0);
  circle(0,0,540);

  stroke(255, 195, 0);
  strokeWeight(5);
  circle(0,0,525);
 for(let i=0;i<25;i++){
   rotate(15);
   fill(255, 0, 4);
   ellipse(0,-190,80,100);
   fill(199, 7, 7);
   ellipse(0,-160,42,100);
 } 
  fill(33, 133, 6);
  circle(0,0,330);
  for(let i=0;i<20;i++){
    rotate(22.5);
    fill(252, 252, 3);
    ellipse(0,-125,48,110);
    fill(255, 3, 3);
    ellipse(0,-120,27,75);
  }
  fill(79, 186, 35);
  noStroke();
  circle(0,0,250);
 
  for(let i=0;i<16;i++){
    rotate(22.5);
    fill(255, 231, 69);
    ellipse(0,-75,55,100);
    fill(217, 8, 77);
    ellipse(0,-75,35,70);
   
  }
  fill(255, 0, 0);
  circle(0,0,100);
  fill(255, 245, 0);
  circle(0,0,80);
  fill(255, 145, 0);
  circle(0,0,60);
  fill(255, 0, 0);
  circle(0,0,40);

  fill(194, 11, 60);
for(i=0;i<15;i++) {
  rotate(24);
  circle(0,-30,10);
}
  fill(219, 250, 4);
  circle(0,0,15);
}
