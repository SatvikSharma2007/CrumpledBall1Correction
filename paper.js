class Paper{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.paper=Bodies.circle(x,y,10,options)
        World.add(world,this.paper)
        this.r=10;
    }
    display(){
        var pos=this.paper.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }

}