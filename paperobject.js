class paperobject {
    constructor(x, y, width, height) {
      var options = {
       isStatic:true  
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
    
      Matter.Bodies.circle(100,650,50,ellipse(100,650,40,0));
      //ellipse(100,650,40,0);   
      //fill(255);
      //rect(pos.x, pos.y, this.width, this.height);
    
    }
  };
  