class Food{
 constructor(){
     this.image=loadImage("milk.png");
     this.foodStock;
      this.lastFeed;
 }

 display(){
   var x=80,y=100;

   imageMode(CENTER);
   image(this.image,500,220,70,70);

   if (this.foodStock!=0){
     for(var i=0;i<this.foodStock;i++){
       if(i%10===0){
         x=80;
         y=y+50;
       }
       image(this.image,x,y,50,50);
       x=x+30;
     }
   }
 }


 getFoodStocks(){
  var getFood = database.ref('food');
  getFood=getFood-1;
  getFood.on('value',function(data){
  getFood=data.val();
  })

 }

  updatefood(food){
    database.ref('/').update({
    getFood:food
    })
  }

  


  

}


  




