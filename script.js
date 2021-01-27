"use strict";

// Both of these do the same thing buy getElementById is a bit faster and is usually used when
// trying to do multiple items with different id's
// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

// Element for the dice
const diceEl = document.querySelector(".dice");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

// Hides the dice element
diceEl.classList.add("hidden");
// Select scores for player 1 and 2 and change them both to 0
