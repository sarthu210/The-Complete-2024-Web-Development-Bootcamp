
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];



var level = 0;

var started = false;

function startOver()
{
    level = 0;
    gamePattern = [];
    started = false;
}

$(document).keypress(function(){
    if(!started)
    {
        $("#level-title").text("Level "+level);
        nextSequnece();
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    press(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
    {
        console.log("Success");

        if(gamePattern.length == userClickedPattern.length)
        {
            setTimeout(function(){
                nextSequnece();
            },1000);
        }

  
    }
    else
    {
        console.log("Failuer");
        var wrong = "wrong";
        playSound(wrong);
        $("#level-title").text("Game Over Press Any Key To Restart | Your Score "+(level*2));
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        startOver();
    }
}

function nextSequnece(){

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level "+level);

    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

function playSound(userChosenColour)
{
    var music = new Audio("sounds/"+userChosenColour+".mp3");
    music.play();
}

function press(userChosenColour)
{
    $("#"+userChosenColour).addClass("pressed");

    setTimeout(function(){
        $("#"+userChosenColour).removeClass("pressed");
    }, 100);

}



