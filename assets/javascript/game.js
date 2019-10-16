
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>

 on document.readyState

// Variables

let marsPoints 
let earthPoints 
let saturnPoints 
let jupiterPoints 

let targetScore = 0
let playerScore = 0
let totalWins = 0
let totalLosses = 0

// Set Planets to random value 1 through 12

function randomMarsPoints () {
    marsPoints = Math.floor(Math.random()*12 + 1);
}
function randomEarthPoints () {
    earthPoints = Math.floor(Math.random()*12 + 1);
    
}
function randomSaturnPoints () {
    saturnPoints = Math.floor(Math.random()*12 + 1);
   
}
function randomJupiterPoints() {
    jupiterPoints = Math.floor(Math.random()*12 + 1);
}


// Set random Target Score
function randomTargetScore () {
 randomTargetNum = Math.floor(Math.random()*120 + 1);
}

$("#target-score").html("Target Score: " + targetScore);

// Functions to change Current Score when each Planet is clicked

$(".mars").click() {

    playerScore = playerScore + marsPoints
}

$(".earth").click {
    playerScore = playerScore + earthPoints
}

$(".saturn").click {
    playerScore = playerScore + saturnPoints 
}

$(".jupiter").click {
    playerScore = playerScore + saturnPoints 
}



//Define Win/Loss - Current Score cannot exceed Target Score. Only  win if Target equals current.

if targetScore = currentScore

//win, reset game

else if targetScore > currentScore

//lose, reset game

else no change



// Reset after win/loss

function onWin () {

}

function onLoss () {
    
}

// Write to document

$("#target-score").html("Target Score: " + targetScore);
$("#player-score").html("Player Score: " + playerScore);
$("#total-wins").html("Player Score: " + totalWins);
$("#total-losses").html("Player Score: " + totalLosses);