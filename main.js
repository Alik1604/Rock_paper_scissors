const max = 4;
const min = 1;
const buttons = document.querySelectorAll('button');
buttons.forEach( button => button.addEventListener('click', () => {
    let PlayerChoise = button.id;
    let ComputerChoise 
    let ComputerChoise2
    let battleScore1 = 0;
    let battleScore2 = 0;
    let gameResultText = document.querySelector('h2');
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
    }else if(PlayerChoise === "Rock" && ComputerChoise2 === "Scissors"){
        battleScore1 += 1;    
        gameResultText.textContent = 'Win'
    }else if(PlayerChoise === "Rock" && ComputerChoise2 === "Paper"){
        battleScore2 += 1;
        gameResultText.textContent = 'Lose'
    }else if(PlayerChoise === "Paper" && ComputerChoise2 === "Rock"){
        battleScore1 += 1; 
        gameResultText.textContent = 'Win'
    }else if (PlayerChoise === "Paper" && ComputerChoise2 === "Scissors"){
        battleScore2 += 1; 
        gameResultText.textContent = 'Lose'
    }else if (PlayerChoise === "Scissors" && ComputerChoise2 === "Paper"){
        battleScore1 += 1; 
        gameResultText.textContent = 'Win'
    }else if(PlayerChoise === "Scissors" && ComputerChoise2 === "Rock"){
        battleScore2 += 1; 
        gameResultText.textContent = 'Lose'
    } 
    console.log(battleScore2)
    console.log(battleScore1)
    return battleScore1, battleScore2
}))

function playRaund (){
    
}

//if(battleScore1 == 5 || battleScore2 == 5){
//Pattern = true;
//}

