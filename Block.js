class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visibilidade=225
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Img= loadImage ("block.png")
      World.add(world, this.body);
    }

    display(){
      var pos= this.body.position;
      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.Img,pos.x,pos.y,this.width, this.height);
      }else{
        World.remove(world,this.body)
        push()
        this.visibilidade-=5
        tint(255,this.visibilidade)
        imageMode(CENTER);
        image(this.Img,pos.x,pos.y,this.width, this.height);
        pop()
      }
      
    }
}