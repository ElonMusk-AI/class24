class Bird {
    constructor(x,y){
        var options = {
            "restitution":0.5, 
            "friction":1,
            "density":1.5
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.heigth = 50;
        World.add(world,this.body);


    }
    display(){
        var post = this.body.position;
        post.x = mouseX;
        post.y = mouseY;

        var angle = this.body.angle
        
        push();
        translate(post.x,post.y);
        rotate(angle);
        strokeWeight(5);
        stroke("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.heigth);
        pop();


    }




}