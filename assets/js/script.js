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