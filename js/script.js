var players=[];
var markers=["X","O"];
var whoseturn=0;
var scores=[0,0];
var winvalues = [7,56,73,84,146,273,292,448]
var gameover = false;
players[0] = "Beavis";
players[1] = "Butthead";

function wincheck(){
    for (var i=0; i < winvalues.length; i++){
        if ((scores[whoseturn] & winvalues[i]) == winvalues[i]){
            document.getElementById("game-message").innerText = players[whoseturn] + "Win's!";
            gameover = true;
        }
    }
    if (((scores[0]+scores[1]) == 511) && !gameover)
    {
        document.getElementById("game-message").innerText = "Cat Win's!";
        gameover = true;
    } 
}

function play(clickedDiv, divValue)
{
    if(!gameover){
        scores[whoseturn] += divValue;
        clickedDiv.onclick = "";
        clickedDiv.innerHTML = "<span>"+ markers[whoseturn] +"</span>";
        wincheck();
        if(!gameover){
            toggle();
        }
    }
}

function toggle()
{
    if (whoseturn == 0) whoseturn=1;
    else whoseturn=0;

    document.getElementById("game-message").innerText = players[whoseturn] + "'s Turn"
}