
class Red {
    constructor(x, y, height,angle) {
      var options = {
      isStatic:true
      }
      this.body = Bodies.rectangle(x, y,20, height, options);
      this.width =20;
      this.height = height;
      Matter.Body.setAngle(this.body)
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
     //var angle = this.body.angle;
      push();
      rectMode(CENTER);
      angleMode(RADIANS)
      rotate(this.body.angle)
      translate(pos.x,pos.y)
      fill(234,50,0);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  