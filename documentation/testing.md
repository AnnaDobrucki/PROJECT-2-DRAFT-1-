# Testing

## Index

 * [Error resolution and Debugging](#error-resolution-and-debugging)
 * [Responsiveness Testing](#responsiveness-testing)
 * [Lighthouse testing](#lighthouse-testing)
 * [HTML, CSS & JS Validation](#html-css-js-validation)

 ## Error Resolution and Debugging 
 Through-out coding with javascript I constantly used [JS Hint](https://jshint.com/)

 ## Manual testing

| Test Description (Modal)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| 'Click' on Rules modal     | The Rules should pop out above the whole page   | Pass
| 'Click' off rules modal | Click anywhere on the window should close modal  | Pass
| 'Click' on 'X' | Click on 'X' should close modal | Pass
| 'Click' on modal | Click anywhere on modal, should not close modal itself | Pass

![test modal](../documentation/testing-pics/test-modal.png "test modal")


| Test Description (Username Input)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| Write username into input section    | Should call an alert if only spaces are entered  | Pass
| 'Click Submit with no characters present | Should ask for the user to place a name in the input section before clicking submit  | Pass
| After name entered and submit clicked| The username input should be removed from users view | Pass
| After name entered and username input has been dismissed | Username should appear vs Nemesis in display area| Pass

![test username spaces](../documentation/testing-pics/test-username-spaces.png "test username spaces")

![test username vs nemesis](../documentation/testing-pics/test-username-vs-Nemmesis.png "test username vs nemesis")



| Test Description (Replay and Start Over Btns)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| 'Click' on Replay btn starts user as first to go    | Clears all cells, with 'X' to start  | Pass
| Replay should not reset Counter | Once replay clicked counter stays at current score   | Pass
| 'Click' on Start Over | Should reset the page back to original state and clear scores and username| Pass

| Test Description (Gameboard)  | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| 'Click' on any array/box fills space with user counter | "X" should be placed on any free cell  | Pass
| "O" should place counter after "X"| An "O" is placed randomly in free space following "X" | Pass
| 'Click' on 'X' or "O" | Should not change counter once filled| Pass
| Three in Row Win| Should all "X" be in a row then Winner is announced | Pass
| Three in Row Loose| Should all "O" be in a row then Nemesis is announced | Pass
| All boxes filled | Should all boxes be filled with no clear winner, a draw is announced | Pass
| After result restart new round | Old game should be cleared, ready for next| Pass
| "O" starts after "X" wins| "O" should be placed in a box after "X" won last round | Pass

![test won game display](../documentation/testing-pics/test-won-game-display.png "test won game display")

![test lost game display](../documentation/testing-pics/test-lost-game-display.png "test lost game display")

![test draw game display](../documentation/testing-pics/test-draw-game-display.png "test draw game display")


| Test Description (Scoreboard)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| Username should be updated to scorebaord area | After username input player name chanes to username  | Pass
| Once user wins counter goes up ++ | Counter should reflect on games won next to username | Pass
| Once user looses Nemesis counter goes up ++ | Counter should reflect on games won by Nemesis | Pass




 ## Responsiveness testing 
 
 ## Lighthouse Testing 

 ## HTML, CSS & JS Validation



 
