class Tower{
    constructor(x,y,width,height){
        var options={
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("tower.png")
        World.add(world, this.body);
        this.w = width;
        this.h = height;
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.w, this.h);
    }
}