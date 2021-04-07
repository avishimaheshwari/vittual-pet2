//Create variables here
var dog,happydoggy,foodS=20,foodStock,database,dogImage,happydoggyImage,feed,fedTime,food,lastFeed;


function preload()
{
	//load images here
   dogImage=loadImage("dog.png");
  happydoggyImage=loadImage("happyDog.png")
}

function setup() {
   database=firebase.database();
   createCanvas(1000,500);
   dog=createSprite(700,250,5,5)
   dog.addImage(dogImage);
   dog.scale=0.3;

   food=new Food(200,250,50,50);
   food1=new Food(230,250,50,50);
   food2=new Food(260,250,50,50);
   food3=new Food(200,250,50,50);
   food4=new Food(200,250,50,50);
   food5=new Food(200,250,50,50);
   food6=new Food(200,250,50,50);
   food7=new Food(200,250,50,50);
   food8=new Food(200,250,50,50);
   food9=new Food(200,250,50,50);
   food10=new Food(200,250,50,50);
   food11=new Food(200,250,50,50);
   food12=new Food(200,250,50,50);
   food13=new Food(200,250,50,50);
   food14=new Food(200,250,50,50);

   foodStock=database.ref('food');
   foodStock.on("value",readStock);

   
function addFoods(){
  foodS++
  database.ref('/').update({
  Food:foodS
  })
  }



   feed=createButton("feed the dog");
   feed.position(500,70);
   feed.mousePressed(feedDog);


   addFood=createButton("add Food");
   addFood.position(600,70)
   addFood.mousePressed(addFoods);
   
   
  
  
}




function draw() {  
  background(46, 139, 87)
 /*if(keyWentDown(UP_ARROW)){
   writeFood(foodS);
   foodS=foodS-1;
   if (foodS<=0){
    foodS=0;
  }*/
  
   fedTime=database.ref('feedTime');
   fedTime.on("value",function(data){
     lastFeed=data.val()
   })

  food.display();
  food1.display();
  food2.display();
  food3.display();
  food4.display();
  food5.display();
  food6.display();
  food7.display();
  food8.display();
  food9.display();
  food10.display();
  food11.display();
  food12.display();
  food13.display();
  food14.display();
  
  //add styles here
  
  fill("red")
  textSize(15)
 if(lastFeed>=12)   {
text("lastFeed :" + lastFeed + "PM",350,30)
 }
else  if(lastFeed===0)  {
text("lastFeed : 12AM" ,350,30)
 }
else  {
  text("lastFeed:" + lastFeed + "AM",350,30 )
 }

drawSprites();

}

function readStock(data){
  foodS=20;
 } 

/*function writeFood(x){
  
  database.ref('/').update({
  Food:x
  })
 }*/

function feedDog(){
  dog.addImage(happydoggyImage);

  food.updatefood(food.getFoodStocks()-1);
  database.ref('/').update({
  Food:food.getFoodStocks(),
  fedTime:hour()
 })
}






