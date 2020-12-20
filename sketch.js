var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    console.log(database);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPositionAtDatabaseLocation = database.ref("ball/position")
    ballPositionAtDatabaseLocation.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        "x":position.x+x,
        "y":position.y+y,
    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
   position = data.val();
   console.log(position);
   ball.x=position.x
   ball.y=position.y
}
//. ref = it is use to refere the loction of that data base we created
//.on = it is used to crete a lister(ears)for the data base.IT also keeps track of changes 
//.set = it is used to set some vaule.