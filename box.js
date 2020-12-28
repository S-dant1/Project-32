class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);      
      this.Visibility = 255;
  }
  score (){
    if(this.Visibility<0){
      score++;
    }
  }
  
  display(){
      if(this.body.speed<4){
        super.display();       
      }
      else{
        World.remove(world, this.body);   
       }
  }

};
