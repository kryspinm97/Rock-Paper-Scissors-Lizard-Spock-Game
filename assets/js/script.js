let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let resultMessage = document.getElementById('rsltMsg');
/**
 * array to hold all picks in the game
 */
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

/**
 * variables to keep track of user and computer score
 */
let pScore = 0;
let cScore = 0;

/**
 * variables to keep track of user and computer score
 */
let gameRules = {
  Rock: ["Lizard", "Scissor"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard: ["Spock", "Paper"],
  Spock: ["Scissors", "Rock"],
};

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");

rock.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(0, compPick);
});

paper.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(1, compPick);
});

scissor.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(2, compPick);
});

lizard.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(3, compPick);
});

spock.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(4, compPick);
});

/**
 * Function to run game
 * takes in player pick and computer pick as numeric variables
 */
function gameResult(player1, Comp) {

  const playerPick = picks[player1].id;

  const compPick = picks[Comp].id;

  const playerRulePick = gameRules[playerPick];

  if (playerPick === compPick) {
    resultMessage.innerHTML = ("It's a draw!");
  } else if (playerRulePick.includes(compPick)) {
    resultMessage.innerHTML = ("You win !");
    pScore++;
  } else {
    resultMessage.innerHTML = ("Computer wins!");
    cScore++;
  }
  document.getElementById("playerScore").innerHTML = `${pScore}`;
  document.getElementById("computerScore").innerHTML = `${cScore}`;
};