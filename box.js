class Box{
    constructor(x,y,width,height,c){
        var options={
            isStatic: false,
            restitution: 0.8,
            density:1.0,
            friction:0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.colour = c;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(1);
        fill(this.colour);
        rect(0,0,this.width,this.height);
        pop();
    }
};