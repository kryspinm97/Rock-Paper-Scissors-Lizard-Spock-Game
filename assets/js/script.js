
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

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

rock.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  console.log(compPick);
  gameResult(0, compPick);
});

paper.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  gameResult(1, compPick);
});

scissor.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  gameResult(2, compPick);
});

lizard.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
  gameResult(3, compPick);
});

spock.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
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
    resultMessage.innerHTML = (`You win! ${playerPick} beats ${compPick} !`);
    pScore++;
  } else {
    resultMessage.innerHTML = (`Computer wins by choosing ${compPick}`);
    cScore++;
  }
  document.getElementById("playerScore").innerHTML = `${pScore}`;
  document.getElementById("computerScore").innerHTML = `${cScore}`;
};
