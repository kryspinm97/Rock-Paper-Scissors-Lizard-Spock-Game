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

let gameRules = {
  Rock: ["Lizard", "Scissors"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard: ["Spock", "Paper"],
  Spock: ["Scissors", "Rock"],
};

let resultMessage = document.getElementById('rsltMsg');
let btnReset = document.getElementById("reset");
let btnPlay = document.getElementById("play");
let pickPlayer = document.getElementById('playerPickChoice')
let pickCom = document.getElementById('comPickChoice')

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

let pScore = 0;
let cScore = 0;

/* Game buttons are disabled by default until the Play button is pressed */

document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissor").disabled = true;
document.getElementById("lizard").disabled = true;
document.getElementById("spock").disabled = true;

btnPlay.addEventListener('click', event => {
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissor").disabled = false;
  document.getElementById("lizard").disabled = false;
  document.getElementById("spock").disabled = false;
})

/* Game buttons are disabled by default until the Play button is pressed */

btnReset.addEventListener('click', event => {
  document.location.reload(true);
});

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
    resultMessage.style.cssText="background-color: #e5e5e5; color: #808080";
    resultMessage.innerHTML = ("It's a draw!");
  } else if (playerRulePick.includes(compPick)) {
    resultMessage.style.cssText="background-color: #cefdce; color: #689f38";
    resultMessage.innerHTML = (`You win!`);
    pScore++;
  } else {
    resultMessage.style.cssText="background-color: #ffdde0; color: #d32f2f";
    resultMessage.innerHTML = (`Computer wins!`);
    cScore++;
  }
  document.getElementById("playerScore").innerHTML = `${pScore}`;
  document.getElementById("computerScore").innerHTML = `${cScore}`;
  pickPlayer.innerHTML = (`You picked ${playerPick}`);
  pickCom.innerHTML = (`Com picked ${compPick}`);
  bestOfTen();


};


function bestOfTen(player1, comp) {

  if (pScore === 10) {
    alert("You have won the game! Press OK to play again!");
    document.location.reload(true);
  } else if (cScore === 10) {
    alert("You have lost the game! Press OK to try again!");
    document.location.reload(true);
  }

}