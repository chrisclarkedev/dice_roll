"use strict";

// Both of these do the same thing buy getElementById is a bit faster and is usually used when
// trying to do multiple items with different id's

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// Element for the dice
const diceEl = document.querySelector(".dice");

// Element for the different buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;
// Current Score always set to 0 as beginning of game

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  // Used to disable buttons after winner is decided
  playing = true;

  // Set scores back to 0
  score0El.textContent = 0;
  score1El.textContent = 0;

  // Set current score back to 0
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Remove winner condition from either player 1 or 2
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  //Remove active player, Set first player as active player
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

// Function that can be called to switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Hides the dice element
diceEl.classList.add("hidden");
// Select scores for player 1 and 2 and change them both to 0

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll (1-6)
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice_${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // switch to next player
      // If active player is 0 then the new active player should be 1
      // else it should be 0

      // Reset score for both players once a player rolls a "1"
      document.getElementById(`current--${activePlayer}`).textContent = 0;

      // Set current score back to 0
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;

      // Toggle Method
      // Will add the class if it is not there
      // If it is there it will remove it
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to the score of active player
    scores[activePlayer] += currentScore;
    // Example : scores[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check player score if its >=100
    if (scores[activePlayer] >= 100) {
      // Finish game
      // Set playing to false
      playing = false;

      // Set dice to hidden once game ends
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      alert(`Player ${activePlayer} is the winner`);

      // Will remove the current active player after deciding current player is winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      // Call switchPlayer function
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
