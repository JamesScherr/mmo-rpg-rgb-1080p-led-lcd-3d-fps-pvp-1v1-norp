let char;
let char2;
let ground;

function setup() {
  createCanvas(1600, 900);
  char = new bruh(800, 800, 0, 0, 0, 0, false, 50, "white", UP_ARROW, RIGHT_ARROW, LEFT_ARROW);
  char2 = new bruh(200, 800, 0,0,0,0, false,100, "green", 87,68,65)
  ground = new platform(0, 830, 1600, 100);
}

function draw() {
  noStroke()
  background(10, 163, 240);
  char.drawBruh();
  char.moveBruh();
  char.land()
  char2.drawBruh();
  char2.moveBruh();
  char2.land();
  char.healthbar();
  fill(148, 240, 10)
  noStroke()
  ground.drawPlatform();
  textSize(30)

}

class bruh {
	constructor(x,y,xMove, xMoveN, yMove, yMoveN, jumpable, health, color,jumpkey, rightkey, leftkey){
	   this.x = x;
     this.y = y;
     this.xMove = xMove
     this.xMoveN = xMoveN
     this.yMove = yMove
     this.yMoveN = yMoveN
     this.color= color;
     this.jumpable = jumpable
     this.health = health
     this.jumpkey = jumpkey
     this.rightkey = rightkey
     this.leftkey = leftkey
}

	drawBruh(){
    stroke(.5);
    fill(this.color);
	rect(this.x,this.y,30,30);
	}

	moveBruh(){
    this.x=this.x+this.xMove+this.xMoveN
    this.y=this.y+this.yMove+this.yMoveN
    this.yMoveN+=.4

    if (this.xMove < 0){
      this.xMove= 0
    }

    if (this.xMove > 0){
      this.xMove-=0.2
    }

    if (this.xMoveN > 0){
      this.xMoveN= 0
    }

    if (this.xMoveN < 0){
      this.xMoveN+=0.2
    }


    if (keyIsDown(this.rightkey)){
      this.xMove=this.xMove+3
    }

    if (this.xMove > 7){
      this.xMove=7
    }

    if (keyIsDown(this.leftkey)){
      this.xMoveN=this.xMoveN-3
    }

    if (this.xMoveN < -7){
      this.xMoveN=-7
    }


    if (keyIsDown(this.jumpkey) && this.jumpable == true){
      this.yMoveN=this.yMoveN-10
    }

    if (this.x >1570){
      this.x=1570
    }

    if (this.x<0){
      this.x=0
    }
	}
  land(){
    if(this.y >= ground.y-30){
      this.yMoveN=0
      this.y=this.y-0.4
      this.jumpable = true

    }
    else {
      this.jumpable = false
    }

  }
  healthbar(){
    fill(148, 240, 10)
    rect(this.x, this.y-10, 30, 7)

    if (this.health < 100 && this.health > 90){
      fill(255, 17, 0)
      rect(this.x+27, this.y-10, 3, 7)
    }
    if (this.health < 90 && this.health > 80){
      fill(255, 17, 0)
      rect(this.x+24, this.y-10, 6, 7)
    }
    if (this.health < 80 && this.health > 70){
      fill(255, 17, 0)
      rect(this.x+21, this.y-10, 9, 7)
    }
    if (this.health < 70 && this.health > 60){
      fill(255, 17, 0)
      rect(this.x+18, this.y-10, 12, 7)
    }
    if (this.health < 60 && this.health > 50){
      fill(255, 17, 0)
      rect(this.x+15, this.y-10, 15, 7)
    }
    if (this.health < 50 && this.health > 40){
      fill(255, 17, 0)
      rect(this.x+12, this.y-10, 18, 7)
    }
    if (this.health < 40 && this.health > 30){
      fill(255, 17, 0)
      rect(this.x+9, this.y-10, 21, 7)
    }
    if (this.health < 30 && this.health > 20){
      fill(255, 17, 0)
      rect(this.x+6, this.y-10, 24, 7)
    }
    if (this.health < 20 && this.health > 10){
      fill(255, 17, 0)
      rect(this.x+3, this.y-10, 27, 7)
    }
    if (this.health < 10 && this.health > 0){
      fill(255, 17, 0)
      rect(this.x, this.y-10, 30, 7)
    }

  }
}

class platform {
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h
  }
  drawPlatform(){

    rect(this.x, this.y, this.w, this.h)
  }
}
