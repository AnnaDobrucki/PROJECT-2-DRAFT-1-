/**
 * function for the use of a username within game and removal of username input once chosen
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

function checkGame(){
    /**
     * Make sure to come back and add the if - else to the score increase)
     */
    scoreWin();
    scoreLoose();
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

function scoreWin() {

    let scoreLoose = parseInt(document.getElementById("loose").innerText);
    document.getElementById("loose").innerText = ++scoreLoose;
}

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