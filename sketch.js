console.log('Mesmirising Ball');

let diameter = 200;
let radius = diameter/2;

let position = {
  x: radius,
  y: radius
}

let velocity = {
  x: 2,
  y: 3
}


console.log('radius:', radius)

function setup() {
  createCanvas(1280, 720)
  background(0);
}


function draw() {

 circle(position.x, position.y, radius);
 
 position.x += velocity.x;
 position.y += velocity.y;

 if (position.x >= width  || position.x <= 0){
  velocity.x *= -1;
 }
 
 if (position.y >= height || position.y <= 0){
  velocity.y *= -1;
 }
 

}

// function mousePressed(){
//   save('image.png');
// }