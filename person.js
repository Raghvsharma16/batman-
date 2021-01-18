class Person {
constructor (x,y){
    this.animation = loadAnimation("moving","images/walkingFrame/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png");

}

display(){

     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image,50, 50);
     pop();
}
}