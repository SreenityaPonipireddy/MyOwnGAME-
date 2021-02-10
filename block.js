class Block{
    //Declaring all of the properties of box
       constructor(x,y, width, height){
              
           var options={
               restitution:0.4,
               friction:0
           }
           this.Visibility=255;
           //"this" represents something to replace and is replaced with the name
           this.body=Bodies.rectangle(x,y,width,height,options);
           this.height=height;
           this.width=width;
           World.add(world,this.body);

       }

      
       display(){
        
           var pos=this.body.position;
           var angle=this.body.angle;
        
           if(this.body.speed<10){
            push();
            translate(pos.x,pos.y)
                rotate(angle)
                rectMode(CENTER);
                strokeWeight(3);
                stroke("NavajoWhite");
                fill("LightGoldenRodYellow");
                rect(0,0,this.width,this.height);
            pop();
          }
          else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility-5;
            pop();
          }
            
          }
    }

