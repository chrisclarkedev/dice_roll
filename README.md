# DiceZ (Dice Rolling Game)

![picture alt](https://i.ibb.co/0Cqrv4m/dice-rng-banner.jpg)

Click [here](http://gainful-dice-roll.surge.sh/) to try it out!

## Description

Dice roll game for 2 players. Each player rolls one die, each roll is tallied to current. Current can be added to total score if the player decides to "Hold". When player chooses "Hold" they end their turn and the next player goes. First player to reach 100 points total wins however there is a small caviat. If the current player rolls a "1" they forfeit their turn and the next player goes. It's a race to see who can get 100 points. Are you lucky enough?!

&nbsp;
&nbsp;

**Expected Challenges**

\*Greater understanding of DOM manipulation.

\*Figuring the sequential steps used for the games logic.

\*Structuring the various methods and functions used.

\*Working with DOM manipulation in conjunction with CSS to deliver a comprehensive and stylized UX.

&nbsp;
&nbsp;
&nbsp;

### Features-List

Dice rolling game that uses a random number generator which determines how many point each player gets.

First player to reach 100 wins the game.

Player 1 and 2 have their own section which displays their current dice roll number and score.

Current player is highlighted and the other player is blackened out to differentiate which players turn it is.

3 functional buttons which control various aspect of the game.

New Game, Roll Dice, Hold

&nbsp;
&nbsp;

- New Game

  - Erases all scores resetting game completely

- Roll Dice
  -Current player rolls dice
  -Die rolled is displayed in middle of window
  -Die number is shown in respective players current window
  -If die rolled is "1" current player loses turn and next player proceeds to roll his die.

- Hold
  -Adds current number to total score and ends current players turn allowing the player to not risk rolling a "1" on their next roll

&nbsp;

Player who reached 100 total score wins the game.

Background color of player that has won game changes color to gold signifying that they have won.
