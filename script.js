"use strict";

// Both of these do the same thing buy getElementById is a bit faster and is usually used when
// trying to do multiple items with different id's
// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

// Element for the dice
const diceEl = document.querySelector(".dice");

// Element for the different buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

// Hides the dice element
diceEl.classList.add("hidden");
// Select scores for player 1 and 2 and change them both to 0

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll (1-6)
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: if true, switch to next player
});
