$(document).ready(function () {

    //  Global Variables

    let marsPoints = 0
    let earthPoints = 0
    let saturnPoints = 0
    let jupiterPoints = 0

    let targetScore = 0
    let currentScore = 0
    let totalWins = 0
    let totalLosses = 0

    // Set random Target Score


    function randomTargetScore() {
        targetScore = Math.floor(Math.random() * 120 + 1);
        console.log("Target Score: " + targetScore);
    }

    randomTargetScore();

    // Write to document

    $("#target-score").html("Target Score: " + targetScore);
    $("#current-score").html("Current Score: " + currentScore);
    $("#total-wins").html("Total Wins: " + totalWins);
    $("#total-losses").html("Total Losses: " + totalLosses);




    // Set Planet Points to random value 1 through 12


    function randomMarsPoints() {
        marsPoints = Math.floor(Math.random() * 12 + 1);
        console.log("Mars Points: " + marsPoints);
    }

    function randomEarthPoints() {
        earthPoints = Math.floor(Math.random() * 12 + 1);
        console.log("Earth Points: " + earthPoints);

    }

    function randomSaturnPoints() {
        saturnPoints = Math.floor(Math.random() * 12 + 1);
        console.log("Saturn Points: " + saturnPoints);

    }

    function randomJupiterPoints() {
        jupiterPoints = Math.floor(Math.random() * 12 + 1);
        console.log("Jupiter Points: " + jupiterPoints);
    }


    function randomPlanetPointsForAll() {
        randomMarsPoints();
        randomEarthPoints();
        randomSaturnPoints();
        randomJupiterPoints();
    }

    randomPlanetPointsForAll();


    // Functions to change Current Score when each Planet is clicked

    $(".mars").on("click", function () {
        currentScore = currentScore + marsPoints;
        $("#current-score").html("Current Score: " + currentScore);
        winOrLose();
    });

    $(".earth").on("click", function () {
        currentScore = currentScore + earthPoints;
        $("#current-score").html("Current Score: " + currentScore);
        winOrLose();
    });

    $(".saturn").on("click", function () {
        currentScore = currentScore + saturnPoints;
        $("#current-score").html("Current Score: " + currentScore);
        winOrLose();
    });

    $(".jupiter").on("click", function () {
        currentScore = currentScore + jupiterPoints;
        $("#current-score").html("Current Score: " + currentScore);
        winOrLose();

    });


    //Define Win/Loss - Current Score cannot exceed Target Score. Only win if Target equals current.

    // Reset after win/loss

    function winOrLose() {

        if (targetScore === currentScore) {

            totalWins = totalWins + 1;
            $("#total-wins").html("Total Wins: " + totalWins);
           
            let currentScore = 0;
            $("#current-score").html("Current Score: " + currentScore);
           
            randomTargetScore();
            $("#target-score").html("Target Score: " + targetScore);
            
            let marsPoints = 0;
            let earthPoints = 0;
            let saturnPoints = 0;
            let jupiterPoints = 0;
            randomPlanetPointsForAll();

        } else if (currentScore > targetScore) {

            totalLosses = totalLosses + 1;
            $("#total-losses").html("Total Losses: " + totalLosses);
            
            let currentScore = 0;
            $("#current-score").html("Current Score: " + currentScore);
           
            randomTargetScore();
            $("#target-score").html("Target Score: " + targetScore);
            
            let marsPoints = 0;
            let earthPoints = 0;
            let saturnPoints = 0;
            let jupiterPoints = 0;
            randomPlanetPointsForAll();

        }


    }
});