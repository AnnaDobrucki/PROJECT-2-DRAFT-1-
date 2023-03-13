/**
 * function for the use of a username within game
 */
const usernameForm = document.querySelector("#username-form");

usernameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = event.target.username.value;
    document.getElementById("username-chosen").innerHTML= `<h2>${userName}</h2>`;

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
    document.getElementById("name-score").innertext = `<p>${userName}</p>`
}
/**
 * Function for incrementing score for computer (Nemisis) win
 */

function scoreWin() {

    let scoreLoose = parseInt(document.getElementById("loose").innerText);
    document.getElementById("loose").innerText = ++scoreLoose;
}