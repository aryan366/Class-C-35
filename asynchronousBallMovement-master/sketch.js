var hypo_ball;
var database,posistion;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hypo_ball = createSprite(250,250,10,10);
    hypo_ball.shapeColor = "red";
    var hypo_ballPosition=database.ref('ball/position');
    hypo_ballPosition.on("value",readPosition,showError);
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
        'x':position.x+x,
        'y':position.y+y
    })
}
function readPosition(data){
    position=data.val ();
    hypo_ball.x=position.x;
    hypo_ball.y=position.y;
}

function showError(){
    console.log("error");
}