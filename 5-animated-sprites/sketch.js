var xMove = 0;
var xMoveN = 0;
var yMove = 0;
var yMoveN = 0;
let char;
let bullets = [];

function preload() {
  gunshot = loadSound('gunshot.mp3');
}
function setup() {
  createCanvas(1600, 900);
  char = new bruh(800, 800,"white","none yet");
}

function draw() {
  noStroke()
  background(10, 163, 240);
  fill(148, 240, 10)
  rect(0, 830, 1600, 100);
  rect (400, 700, 150, 10)
  fill(110, 86, 8)
  rect(400, 710, 150, 7)

  char.drawBruh();
  char.moveBruh();

  for (let i = 0; i<bullets.length; i++){
      bullets[i].drawBullet();
      bullets[i].shootBullet();
  }

}

function keyPressed(){
    if (keyCode === 17){
        gunshot.setVolume(1);
        gunshot.play();
        let b = new Bullet (char.x,char.y,char.direction)
        bullets.push(b);
        print(bullets)
    }

}

class bruh {
	constructor(x,y,color,direction){
	   this.x = x;
     this.y = y;
     this.color= color;
     this.direction = direction;
	}

	drawBruh(){
    stroke(.5);
    fill(this.color);
		rect(this.x,this.y,30,30);
	}

	moveBruh(){
    this.x=this.x+xMove+xMoveN
    this.y=this.y+yMove+yMoveN
    //yMoveN+=.4

    if (xMove < 0){
      xMove= 0
    }

    if (xMove > 0){
      xMove-=0.2
    }

    if (xMoveN > 0){
      xMoveN= 0
    }

    if (xMoveN < 0){
      xMoveN+=0.2
    }

    if (keyIsDown(RIGHT_ARROW)){
      xMove=xMove+3
      this.direction = "right"
    }

    if (xMove > 7){
      xMove=7
    }

    if (keyIsDown(LEFT_ARROW)){
      xMoveN=xMoveN-3
      this.direction = "left"
    }

    if (xMoveN < -7){
      xMoveN=-7
    }


    if (keyIsDown(UP_ARROW)){
      yMoveN=yMoveN-10
    }

    if (this.x >1570){
      this.x=1570
    }

    if (this.x<0){
      this.x=0
    }
	}
}
  class Bullet {
  	constructor(x,y,direction){
  	   this.x = x;
       this.y = y;
       this.direction = direction;
      // this.color= color;
  	}

  	drawBullet(){
      stroke(.2);
      fill("black");
  	  ellipse(this.x,this.y,10,10);
  	}


    shootBullet(){
        print (this.direction)

    if(this.direction == "none yet"){
        //what should the bullet do then?
    }
     if(this.direction == "right"){
        this.x =(this.x*1)+50;
      }


      if(this.direction == "left"){
        this.x = this.x-50;
      }

    }
}
