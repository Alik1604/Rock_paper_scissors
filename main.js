const max = 4;
const min = 1;
let ComputerChoise 
let ComputerChoise2 
let battleScore1 = 0;
let battleScore2 = 0;
let PlayerChoise = "Rock"; 
let Pattern = false;
while (Pattern == false) {
PlayerChoise = prompt("Enter your choise",);
ComputerChoise = Math.floor(Math.random() * (max - min) ) + min;
if (ComputerChoise === 1){
    ComputerChoise2 = "Rock";
 }else if ( ComputerChoise === 2){
     ComputerChoise2 = "Paper";
 }else if ( ComputerChoise === 3){
     ComputerChoise2 = "Scissors";
 }
console.log("CPU",ComputerChoise2);
console.log("You",PlayerChoise);
if (PlayerChoise == ComputerChoise2){
battleScore1 += 0;
battleScore2 += 0;
}else if(PlayerChoise === "Rock" && ComputerChoise2 === "Scissors"){
battleScore1 += 1;    
}else if(PlayerChoise === "Rock" && ComputerChoise2 === "Paper"){
battleScore2 += 1;
}else if(PlayerChoise === "Paper" && ComputerChoise2 === "Rock"){
battleScore1 += 1; 
}else if (PlayerChoise === "Paper" && ComputerChoise2 === "Scissors"){
battleScore2 += 1; 
}else if (PlayerChoise === "Scissors" && ComputerChoise2 === "Paper"){
battleScore1 += 1; 
}else if(PlayerChoise === "Scissors" && ComputerChoise2 === "Rock"){
battleScore2 += 1; 
} 
if(battleScore1 == 5 || battleScore2 == 5){
Pattern = true;
}
console.log("CPU", battleScore2)
console.log("You", battleScore1)
} 


