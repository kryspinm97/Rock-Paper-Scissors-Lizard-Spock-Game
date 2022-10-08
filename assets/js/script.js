let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

let picks = [
  {
    "id": "Rock"
  },
  {
    "id": "Paper"
  },
  {
    "id": "Scissors"
  },
  {
    "id": "Lizard"
  },
  {
    "id": "Spock"
  } 
];

let score = 0;

let gameRules = {

  Rock:     ["Lizard", "Scissor"],
  Paper:    ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard:   ["Spock", "Paper"],
  Spock:    ["Scissors", "Rock"],
};

let btn = document.getElementById("Rock");
btn.addEventListener('click', event => {
  gameResult(0, 3);
});

function gameResult (player1, Comp) {

  const playerPick = picks[player1].id;

  const compPick = picks[Comp].id;

  const playerRulePick = gameRules[playerPick];

  if(playerPick === compPick){
  console.log("Draw");
  }else if(playerRulePick.includes(compPick)){
    console.log("Player wins");
    playerScore.innerHTML + 1;
    console.log(score)
  }else{
    console.log("Computer wins")
  }
};