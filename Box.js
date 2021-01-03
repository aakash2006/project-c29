class Box{
    constructor(x, y, width, height) {
        var options = {
            'friction':1.0,
            'density':1.0,
            'restitution':0.8,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(2);
        stroke("black");
        fill ("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
}