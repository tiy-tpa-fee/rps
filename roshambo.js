const numberOfGames = 3;
const minimumGamesToWin = 2;
const winAgainst = { rock: "paper", paper: "scissors", scissors: "rock" };
const inputs = { r: "rock", p: "paper", s: "scissors" };

var gamesPlayed = 0;
var computerWins = 0;
var playerWins = 0;

function log(message) {
  document.write("<p>" + message + "</p>");
};

function randomThrow() {
  rand = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][rand];
}

function getPlayerThrow() {
  var move = prompt("[R]ock, [P]aper or [S]cissors?").toLowerCase();
  return inputs[move];
}

function playGame() {
  while (gamesPlayed < numberOfGames) {
    if ((computerWins >= minimumGamesToWin || playerWins >= minimumGamesToWin) && !(computerWins === 2 && playerWins === 2))
      break;

    var computer = randomThrow();
    var player = getPlayerThrow();

    log("The computer has played " + computer);
    log("You have played " + player);

    if (computer === player) {
      log('Tie!');
    } else if (winAgainst[player] === computer) {
      log(player + ' beats ' + computer + ', you win!');
      playerWins++;
      gamesPlayed++;
    } else if (winAgainst[computer] === player) {
      log(computer + ' beats ' + player + ', you lose!');
      computerWins++;
      gamesPlayed++;
    } else {
      log("Invalid play, try again!");
    }
    window.scrollTo(0,document.body.scrollHeight);
    log('<hr>');
  }

  if (playerWins > computerWins) {
    log("You've won " + playerWins + " out of " + numberOfGames + "!");
  } else {
    log("The computer won " + computerWins + " out of " + numberOfGames + "!");
  }
}

var playerName = prompt("What's your name?");

if (playerName.length > 0) {
  playGame();
} else {
  log("You didn't tell me your name :(");
}
