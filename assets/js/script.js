/* Setting the picks and the game rules here of which pick beats what in the game */

let picks = [
  {"id": "Rock"},
  {"id": "Paper"},
  {"id": "Scissors"},
  {"id": "Lizard"},
  {"id": "Spock"}
];

let gameRules = {
  Rock:       ["Lizard", "Scissors"],
  Paper:      ["Rock", "Spock"],
  Scissors:   ["Paper", "Lizard"],
  Lizard:     ["Spock", "Paper"],
  Spock:      ["Scissors", "Rock"],
};

/**
 * Getting the Elements from the HTML and setting their variables.
 */

let resultMessage = document.getElementById('rsltMsg');
let btnReset = document.getElementById("reset");
let btnPlay = document.getElementById("play");
let pickPlayer = document.getElementById('playerPickChoice');
let pickCom = document.getElementById('comPickChoice');
let resultOfGame = document.getElementById('game-result');

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

let pScore = 0;
let cScore = 0;

/**---------------------------------------------------------- */

/* Game buttons are disabled by default until the Play button is pressed */

document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissor").disabled = true;
document.getElementById("lizard").disabled = true;
document.getElementById("spock").disabled = true;

/**---------------------------------------------------------- */

/** Once the Play button has been pressed the buttons are enabled and the player can Play the game 
 *  also Reset reloads the page enabling the player to start from the beginning / again
*/

btnPlay.addEventListener('click', event => {
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissor").disabled = false;
  document.getElementById("lizard").disabled = false;
  document.getElementById("spock").disabled = false;
});

btnReset.addEventListener('click', event => {
  document.location.reload(true);
});

/**---------------------------------------------------------- */

/**
 * Event listeners for Each click of a button calculate the Computer Pick on random between 0 and 4
 * which is each choice in the game of Rock being 0 , Paper being 1 and so on.
 * Then it takes in our value of pick into that button and compares with the Computer Pick at random.
 */


rock.addEventListener('click', event => {
  const compPick = Math.floor(Math.random() * 5);
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
 * Function here runs the game
 * Takes in the player pick and Computer pick as numeric variables of 0 - 4.
 * and compares the result between the Player Pick and Comp Pick with if conditions.
 * and gives out the results via innerHTML also incrementing the score with each pick.
 */

function gameResult(player1, Comp) {

  const playerPick = picks[player1].id;
  const compPick = picks[Comp].id;
  const playerRulePick = gameRules[playerPick];

  if (playerPick === compPick) {
    resultMessage.style.cssText = "background-color: #e5e5e5; color: #808080";
    resultMessage.innerHTML = ("It's a draw!");
  } else if (playerRulePick.includes(compPick)) {
    resultMessage.style.cssText = "background-color: #cefdce; color: #689f38";
    resultMessage.innerHTML = (`You win!`);
    pScore++;
  } else {
    resultMessage.style.cssText = "background-color: #ffdde0; color: #d32f2f";
    resultMessage.innerHTML = (`Computer wins!`);
    cScore++;

  }
  document.getElementById("playerScore").innerHTML = `${pScore}`;
  document.getElementById("computerScore").innerHTML = `${cScore}`;
  pickPlayer.innerHTML = (`You picked ${playerPick}`);
  pickCom.innerHTML = (`Com picked ${compPick}`);
  bestOfTen();
}

/**
 * This function toggles the Modal of Rules Active and Closes.
 */
function toggleModal() {
  document.getElementById("modal").classList.toggle("active");
}

/**
 * This is a simple function that reloads the page again 
 * after the player or computer gets the score of 10 to play again.
 */

function playAgain() {
  document.location.reload(true);
}


/**
 * This function sets the game to 10 rounds and alerting 
 * whichever player has reached a score of 10 first wins the game.
 */

function bestOfTen(player1, comp) {

  if (pScore === 10) {
    document.getElementById("gameResultPopup").classList.toggle("active");
    resultOfGame.innerHTML = ('Congratulations! <br> You have Won!'); 
  } else if (cScore === 10) {
    document.getElementById("gameResultPopup").classList.toggle("active");
    resultOfGame.innerHTML = ('You have Lost! <br> Press the button to try again');
  }

}
