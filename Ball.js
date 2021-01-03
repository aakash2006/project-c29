class Ball{
    constructor(x,y,r){
        var options = {
            density:1.0,
            restitution:0.8,
            friction:1.0,
            isStatic:false
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
       
    
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,0,0)
        pop();
    }
    
    };