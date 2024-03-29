let char;
let char2;
let ground;
let plat1;
let platforms = []
let bullets = [];

function preload() {
  // gunshot = loadSound('gunshot.mp3');
}
function setup() {
  createCanvas(1600, 900);
  char = new bruh(1450, 600, 0, 0, 0, 0, false, 100, "blue", UP_ARROW, RIGHT_ARROW, LEFT_ARROW, "left");
  char2 = new bruh(100, 750, 0,0,0,0, false,100, "red", 87,68,65, "right")
  ground = new platform(0, 830, 1600, 100);

  for(let i = 0; i < 4; i++){
    let p = new platform(1+i*350, random(740, 650), 200, 10)
    platforms.push(p)
  }
}


function draw() {
  background(10, 163, 240);
  char.drawBruh();
  char2.drawBruh();
  char.healthbar();
  char2.healthbar();
  char.land()
  char2.land()  
  fill(148, 240, 10)
  noStroke()
  ground.drawPlatform();
  textSize(30)
  if(char.health >= 0 && char2.health>0){
    char.moveBruh();
    char2.moveBruh();
    char.hit()
    char2.hit()
  }
  if(char.health <= 0){
    fill(0,0,0)
    text("red wins", 700, 100)

  }
  if(char2.health <= 0){
    fill(0,0,0)
    text("blue wins", 700, 100)
  }
  noStroke()
  fill(148, 240, 10)
  for(let i = 0; i < platforms.length; i++){
  platforms[i].drawPlatform()
  }
  for (let i = 0; i<bullets.length; i++){
    bullets[i].drawBullet();
    bullets[i].shootBullet();
  }
}
  function keyPressed(){
    if (keyCode === 191){
        if(char.direction == "left"){
        let b = new Bullet (char.x-11,char.y+15,char.direction)
        bullets.push(b);
        print(bullets)
      }
      if(char.direction == "right"){
      let b = new Bullet (char.x+42,char.y+15,char.direction)
      bullets.push(b);
      print(bullets)
    }
  }
    if (keyCode === 20){
      if(char2.direction == "left"){
      let b = new Bullet (char2.x-11,char2.y+15,char2.direction)
      bullets.push(b);
      print(bullets)
    }
    if(char2.direction == "right"){
    let b = new Bullet (char2.x+42,char2.y+15,char2.direction)
    bullets.push(b);
    print(bullets)
}
}
}

class bruh {
	constructor(x,y,xMove, xMoveN, yMove, yMoveN, jumpable, health, color,jumpkey, rightkey, leftkey, direction){
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
     this.direction = direction
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
      this.direction = "right"
    }

    if (this.xMove > 7){
      this.xMove=7

    }

    if (keyIsDown(this.leftkey)){
      this.xMoveN=this.xMoveN-3
      this.direction = "left"
    }

    if (this.xMoveN < -7){
      this.xMoveN=-7
    }


    if (keyIsDown(this.jumpkey) && this.jumpable == true){
      this.yMoveN=this.yMoveN-10
      this.jumpable=false
    }

    if (this.x >1570){
      this.x=1570
    }

    if (this.x<0){
      this.x=0
    }
	}
  land(){
      for(let i = 0 ; i < platforms.length; i++){

        if(this.x >= platforms[i].x && this.x <= platforms[i].x+platforms[i].w && this.y >=platforms[i].y-30 && this.y <= platforms[i].y+10) {
        this.yMoveN=0
        this.y=this.y-0.1
        this.jumpable = true

      }
      else if(this.y >= ground.y-30){
      this.yMoveN=0
      this.y=this.y-0.1
      this.jumpable = true
    }
    }
  }
    healthbar(){

      if (this.health == 100) {
        fill(148, 240, 10)
        rect(this.x, this.y-10, 30, 7)
      }
      else if (this.health < 100 && this.health >= 90){
        fill(255, 17, 0)
        rect(this.x+27, this.y-10, 3, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 27, 7)
      }
      else if (this.health < 90 && this.health >= 80){
        fill(255, 17, 0)
        rect(this.x+24, this.y-10, 6, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 24, 7)
      }
      else if (this.health < 80 && this.health >= 70){
        fill(255, 17, 0)
        rect(this.x+21, this.y-10, 9, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 21, 7)
      }
      else if (this.health < 70 && this.health >= 60){
        fill(255, 17, 0)
        rect(this.x+18, this.y-10, 12, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 18, 7)
      }
      else if (this.health < 60 && this.health >= 50){
        fill(255, 17, 0)
        rect(this.x+15, this.y-10, 15, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 15, 7)
      }
      else if (this.health < 50 && this.health >= 40){
        fill(255, 17, 0)
        rect(this.x+12, this.y-10, 18, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 12, 7)
      }
      else if (this.health < 40 && this.health >= 30){
        fill(255, 17, 0)
        rect(this.x+9, this.y-10, 21, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 9, 7)
      }
      else if (this.health < 30 && this.health >= 20){
        fill(255, 17, 0)
        rect(this.x+6, this.y-10, 24, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 6, 7)
      }
      else if (this.health < 20 && this.health >= 10){
        fill(255, 17, 0)
        rect(this.x+3, this.y-10, 27, 7)
        fill(148, 240, 10)
        rect(this.x, this.y-10, 3, 7)
      }
      else if (this.health < 10 && this.health >= 0){
        fill(255, 17, 0)
        rect(this.x, this.y-10, 30, 7)
      }

    }
    hit(){
      for (let i = 0; i<bullets.length; i++){
        if(bullets[i].x <= this.x+30 && bullets[i].x >= this.x && bullets[i].y <= this.y+30 && bullets[i].y >= this.y){
          this.health-=10
          print("hit")
        }

      }

    }



}
class Bullet {
   constructor(x,y,direction, type){
     this.x = x;
     this.y = y;
     this.direction = direction;
     this.type = type
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
         this.x =(this.x*1)+30;
      }
      if(this.direction == "left"){
         this.x = this.x-30;
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
