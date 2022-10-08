let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

let picks = [{
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

let pScore = 0;
let cScore = 0;

let gameRules = {
  Rock: ["Lizard", "Scissor"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard: ["Spock", "Paper"],
  Spock: ["Scissors", "Rock"],
};

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn0.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(0, compPick);
});
btn1.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(1, compPick);
});
btn2.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(2, compPick);
});
btn3.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(3, compPick);
});
btn4.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(4, compPick);
});

function gameResult(player1, Comp) {

  const playerPick = picks[player1].id;

  const compPick = picks[Comp].id;

  const playerRulePick = gameRules[playerPick];

  if (playerPick === compPick) {
    alert("Draw");
  } else if (playerRulePick.includes(compPick)) {
    alert("Player wins");
    pScore++;
  } else {
    alert("Computer wins")
    cScore++;
  }
  document.getElementById("playerScore").innerHTML = `${pScore}`;
  document.getElementById("computerScore").innerHTML = `${cScore}`;

};