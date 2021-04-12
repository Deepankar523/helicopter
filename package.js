class Package{
constructor(x,y,width,heigth){
    var options = {
        'restitution':0.4
    }
    this.body = Bodies.rectangle(x,y,width,heigth,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}

display(){
var pos=this.body.position;
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
rect(0,0,this.width,this.heigth);
pop();
}
}