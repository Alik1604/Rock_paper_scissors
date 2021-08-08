const max = 4;
const min = 1;
let ComputerChoise 
let ComputerChoise2
let battleScore1 = 0;
let battleScore2 = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach( button => button.addEventListener('click', playRaund));
function playRaund (event){
    let button = event.currentTarget;
    let PlayerChoise = button.id;
    let gameResultText = document.querySelector('h2');
    let Score = document.querySelector('h3')
    ComputerChoise = Math.floor(Math.random() * (max - min) ) + min;
    if (ComputerChoise === 1){
        ComputerChoise2 = "Rock";
    }else if ( ComputerChoise === 2){
        ComputerChoise2 = "Paper";
    }else if ( ComputerChoise === 3){
        ComputerChoise2 = "Scissors";
    }
    if (PlayerChoise == ComputerChoise2){
        gameResultText.textContent = 'Tie'
        Score.textContent = battleScore1+' : '+battleScore2;
    }else if(PlayerChoise === "Rock" && ComputerChoise2 === "Scissors"){
        battleScore1 += 1;    
        gameResultText.textContent = 'Win'
        Score.textContent = battleScore1+' : '+battleScore2;
    }else if(PlayerChoise === "Rock" && ComputerChoise2 === "Paper"){
        battleScore2 += 1;
        gameResultText.textContent = 'Lose'
        Score.textContent = battleScore1+' : '+battleScore2;
    }else if(PlayerChoise === "Paper" && ComputerChoise2 === "Rock"){
        battleScore1 += 1; 
        gameResultText.textContent = 'Win'
        Score.textContent = battleScore1+' : '+battleScore2;
    }else if (PlayerChoise === "Paper" && ComputerChoise2 === "Scissors"){
        battleScore2 += 1; 
        gameResultText.textContent = 'Lose'
        Score.textContent = battleScore1+' : '+battleScore2;
    }else if (PlayerChoise === "Scissors" && ComputerChoise2 === "Paper"){
        battleScore1 += 1; 
        gameResultText.textContent = 'Win'
        Score.textContent = battleScore1+' : '+battleScore2;
    }else if(PlayerChoise === "Scissors" && ComputerChoise2 === "Rock"){
        battleScore2 += 1; 
        gameResultText.textContent = 'Lose'
        Score.textContent = battleScore1+' : '+battleScore2;
    } 
    if (battleScore1 == 5 ){
        gameResultText.textContent = 'Great job!'   
    } 
    if (battleScore2 == 5){
        gameResultText.textContent = 'Don`t worry, try again!'
    }
    if(battleScore1 == 5 || battleScore2 == 5){
        battleScore1 = 0;
        battleScore2 = 0;
        Score.textContent = battleScore1+' : '+battleScore2;
    }
    return battleScore1, battleScore2
} 
   
    
