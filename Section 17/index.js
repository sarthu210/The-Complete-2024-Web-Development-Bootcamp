function whoWin(a,b)
{
    if(a===b)
    {
        document.querySelector("h2").innerHTML = "Game is draw";
    }
    else if(a>b)
    {
        document.querySelector("h2").innerHTML = "Player 1 is win the game🚩";
    }
    else{
        document.querySelector("h2").innerHTML = "Player 2 is win the game🚩";
    }
}
document.querySelector("button").addEventListener("click" , function(){
    var a = Math.floor((Math.random() * 6) + 1);
    var b = Math.floor((Math.random() * 6) + 1);

    var imgae1 = document.querySelectorAll("img")[0].setAttribute("src",a+".png");
    var imgae2 = document.querySelectorAll("img")[1].setAttribute("src",b+".png");

    whoWin(a,b);
})