var sxDice=document.querySelectorAll(".sx");
var dxDice=document.querySelectorAll(".dx");
var PreviuosOutputSx=0;
var PreviuosOutputDx=0;
var playerChosen=0;

function rollDice(){
    if(playerChosen === 0){
        document.querySelector("h1").textContent= "Select a Player First!";
        return;
    }
    
    var diceResultSx= (Math.floor(Math.random()*6)+1);
    var diceResultDx= (Math.floor(Math.random()*6)+1);
    
    if(PreviuosOutputSx != 0){
        for(let i=0; i<sxDice.length; i++){
            sxDice[i].classList.remove("output-" + PreviuosOutputSx);
            dxDice[i].classList.remove("output-" + PreviuosOutputDx);
        }
    }else{
        document.querySelectorAll(".middle-dot")[0].classList.remove("preset");
        document.querySelectorAll(".middle-dot")[1].classList.remove("preset");
    }

    for(let i=0; i<sxDice.length; i++){
        sxDice[i].classList.toggle("output-" + diceResultSx);
        dxDice[i].classList.toggle("output-" + diceResultDx);
    }

    PreviuosOutputSx=diceResultSx;
    PreviuosOutputDx=diceResultDx;

    if(diceResultDx > diceResultSx && playerChosen === 1){
        document.querySelector("h1").textContent= "I'm sorry, You Lose";
        return;
    }else if(diceResultDx === diceResultSx && playerChosen === 1){
        document.querySelector("h1").textContent= "That is a draw";
        return;
    }else if(diceResultDx < diceResultSx && playerChosen === 1){
        document.querySelector("h1").textContent= "Awesome! You Win!";
        return;
    }

    if(diceResultDx < diceResultSx){
        document.querySelector("h1").textContent= "I'm sorry, You Lose";
        return;
    }else if(diceResultDx === diceResultSx){
        document.querySelector("h1").textContent= "That is a draw";
        return;
    }else if(diceResultDx > diceResultSx){
        document.querySelector("h1").textContent= "Awesome! You Win!";
        return;
    }
}

function playerSelect(player){
    playerChosen=player;
}