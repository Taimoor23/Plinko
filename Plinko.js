class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution:1,
          friction:0
      }

      this.body = Bodies.circle(x,y, 10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      noStroke();
      ellipseMode(RADIUS);
      fill(255,0);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }