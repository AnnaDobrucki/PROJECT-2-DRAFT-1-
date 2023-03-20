/**
 * Function for the use of a username within game and removal of username input once chosen
 */
const usernameForm = document.querySelector("#username-form");

usernameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = event.target.username.value;
    document.getElementById("username-chosen").innerHTML= `<h2 id="username-style">${userName} VS Nemesis</h2>`;
    document.getElementById("name-score").innerHTML = `<p>${userName}'s score <span  class="counter-color" id="win">0</span></p>`;


    if(userName.trim() == ""){
        alert("Please enter a username!");

    } else {
        let nameArea = document.querySelector("#username-form");
        nameArea.style.display = "none";
    }
})

/**
 * Functions to create a pop out modal for rules of the game
 */
var modal = document.getElementById("model-pop-out");
var btn = document.getElementById("rules-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/**
 * Function for incrementing score for user wins
 */
function scoreWin() {

    let scoreWin = parseInt(document.getElementById("win").innerText);
    document.getElementById("win").innerText = ++scoreWin;
}
/**
 * Function for incrementing score for computer (Nemisis) win
 */

function scoreLoose() {

    let scoreLoose = parseInt(document.getElementById("loose").innerText);
    document.getElementById("loose").innerText = ++scoreLoose;
}

/**
 * Functions for building the game mechanics 
 *
 * Make the global variables for the Functions below.
 */
let titleCard = document.getElementById("titleCard")
let replayBtn = document.getElementById("btn-replay")
let startOverBtn = document.getElementById("btn-startOver")
let boxes = Array.from(document.getElementsByClassName("box"))
let currentPlayer = 'X'
let spaces = Array(9).fill(null)
let winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * Function for User to go first and play as "X"
 */
boxes.forEach(function(box){
  box.addEventListener('click', function(){
    if(box.innerText.trim() != "") return;
    box.innerText = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkForWinner();
  })
})

/**
 * Check win function
 */
function checkForWinner(){
  winCombos.forEach(function(combo){
      let check = combo.every(idx => boxes[idx].innerText.trim() == currentPlayer)
      if(check){

        let winner = currentPlayer
        if (winner === "X") {
            alert("You win!");
            scoreWin();
        } else if (winner === "O") {
           alert("Fraid you lost and Nemesis won this time!")
           scoreLoose();
        } 
    } else if (boxFull()) {
      alert("It's a draw!")
      replay();
          } 
});
      }
      let boxFull = () => {
        return Array.from(boxes).every(box => box.textContent !== "");
   };


 /**
  * Function for Nemesis Turn
  */
function nemesisGo(){
  if(currentPlayer == 'O'){
    let randomComputerAnswer;
    do {
        randomComputerAnswer = boxes[Math.floor(Math.random() * boxes.length)]
    } while (
        randomComputerAnswer.textContent !== ""
    )
    randomComputerAnswer.innerText = currentPlayer;
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    checkForWinner();
  }
}
 /**
  * Function for Nemesis Timer
  */
function nemesisTimer(){
  let timerId = null
  timerId = setInterval(nemesisGo, 1000);
}

nemesisTimer();



 /**
  * Resets the game for new one
  */
 replayBtn.addEventListener('click', replay)

 function replay() {
     spaces.fill(null)
 
     boxes.forEach( box => {
         box.innerText = '';
         box.style.backgroundColor='';
     })
     currentPlayer = "X"
 }

  /**
  * Resets the game for completely new player
  */

 startOverBtn.addEventListener('click', startOver)

function startOver() {
  location.reload();
}