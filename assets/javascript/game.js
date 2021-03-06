$(document).ready(function() {

    // ~ ~ ~ ~ ~ ~ variables ~ ~ ~ ~ ~ ~
    var winImage = $(".thanos-happy");
    var lossImage = $(".thanos-sad");

    var target = 0; 

    var redGem = "";
    var blueGem = "";
    var yellowGem = "";
    var greenGem = "";
    
    var crystalPointArray = [];

    var wins = 0;
    var losses = 0;
    var playerPoints = 0;
    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 


    // setup functions _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
    function setTarget() {
        target = Math.floor( Math.random() * 101 ) + 19; // creates a random # between 19 and 120(inclusive)
        $("#target-score").html(target);
        console.log(target);
    };

    // ask about setting a target that MUST be attainable by adding some combination
    // of the four gem numbers
    // for-loop with modulus maybe?
    // for (var j = 0; j < crystalPointArray.length; j++) {
        //     if (target % crystalPointArray[j] != 0)

        // } 

    function setGemPoints() {
        for (var i = 0; i < 4; i++) {
            points = Math.floor( Math.random() * 12 ) + 1; // creates a random #s between 1 and 12(inclusive)
            crystalPointArray[i] = points;  //array is re-written with four new point values each time
            console.log(crystalPointArray);
        }

        redGem = crystalPointArray[0];   //sets the point-value of all four gems by pulling the four
        blueGem = crystalPointArray[1];  //random numbers in the crystalPointArray
        yellowGem = crystalPointArray[2];
        greenGem = crystalPointArray[3];

    }


    function reset() {
        setTarget(); // reset the target number (currently runs on page refresh only)
        setGemPoints(); //generate the crystalPointArray and assign the points from it to the gem variables
        playerPoints = 0;
        winImage.animate({ opacity: "0" });
        lossImage.animate({ opacity: "0" });
        updatePoints();
    }; 
    //_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


    //html-updating functions <> <> <> <> <> <> <> <> <> 
    function updatePoints() {
        
        $("#player-points").html(playerPoints);
        console.log(points);
    };

    function updateWinLose() {
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
    }
    // <> <> <> <> <> <> <> <> <> <> <> <> <> <> <> <> <>


    // alerts = = = = = = = = = 
    function winPrompt() {
        alert("Perfectly balanced - as all things should be!");
        if (confirm("Play again?")) {
            reset();
        } else {
            winImage.animate({ opacity: "1" });
        }
    }

    function lossPrompt() {
        alert("SNAP!");
        if (confirm("Play again?")) {
        reset();
        } else {
        lossImage.animate({ opacity: "1" });
    }}
    // = = = = = = = = = = = = = 


    // game logic
    function checkStatus() {
        if (playerPoints > target)
        {   
            updatePoints();
            losses++;
            updateWinLose();
            setTimeout(lossPrompt, 50);
            
        }
        else if (playerPoints === target)
        {
            updatePoints();
            wins++;
            updateWinLose();
            setTimeout(winPrompt, 50);
            
        }
        else 
        {
            updatePoints();
        }
    }  

    reset(); // reset function called at page refresh


    //click events
    $("#realityGem").on("click", function() {
        playerPoints = playerPoints + redGem;
        checkStatus();
    });

    $("#spaceGem").on("click", function() {
        playerPoints = playerPoints + blueGem;
        checkStatus();
    });

    $("#mindGem").on("click", function() {
        playerPoints = playerPoints + yellowGem;
        checkStatus();
    });

    $("#timeGem").on("click", function() {
        playerPoints = playerPoints + greenGem;
        checkStatus();
    });


});
