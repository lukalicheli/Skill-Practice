# Example Pseudocode

This pseudo-code is far from perfect. But it is a good way to get started. You
should practice your pseudo-coding by writing the steps for solving a problem in
plain language before attempting to write your program code.

## RPS Example Pseudo-code

```js
// create a vars named wins, losses, ties and initialize each to 0

// create a variable named userInput to hold the letter picked by the user
// prompt the user to enter "r", "p", or "s" and assign it to a variable named userInput
// convert user input to lowercase and assign it to userInput
// stop if user did not choose r, p, or s

// create a variable named opponentChoice
// randomly select "r", "p" or "s" and assign it to opponentChoice

// check for tie condition
// if userInput = opponentChoice
// add 1 to ties
// display "You tied"

// check for win condition
// if userInput = r and opponentChoice = s
// OR if userInput = p and opponentChoice = r
// OR if userInput = s and opponentChoice = p
// add 1 to wins
// display "You win!"

// it must be a loss if the user did not tie or win
// if user did not tie or win
// add 1 to losses
// display "You lost!"

// display total wins, losses, ties
// ask user to confirm playing again
// if user said yes
// repeat
```
