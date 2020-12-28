class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':0.2,
            'density':0.0005
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width
        this.height = height;
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}
