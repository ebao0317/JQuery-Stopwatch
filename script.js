// Ethan Bao
// CPSC 332
// Dr. Olivares
// HW6
// 11/17/2022

$(document).ready(function() {
    var $seconds = 00;
    var $tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");
    var $interval;
    var $buttons = $("button");
    var $opacity = 1;

    $("#timer").addClass("timer-background");

    $buttons.addClass("button-style");
    $buttons.css({
        backgroundImage: "linear-gradient(#42A1EC, #0070C9)",
        border: "1px solid #0077CC",
        borderRadius: "4px",
        boxSizing: "border-box",
        color: "yellow", 
        cursor: "pointer",
        fontSize: "17px",
    });
    

    $buttonStart.on("click", function() {
        clearInterval($interval);
        $interval = setInterval(startTimer, 10);
        $("#timer").css({
            backgroundColor: "lightgreen"
        });
    });
    
    $buttonStop.on("click", function() {
        clearInterval($interval);
        if($tens != 0 || $seconds != 0) {
            $("#timer").css({
                backgroundColor: "#E94560"
            });
        }
        $("#timer").css({
            opacity: "1"
        });
        $opacity = 1;

    });
    
    $buttonReset.on("click", function() {
        clearInterval($interval);
        $tens = "00";
        $seconds = "00";
        $appendTens.html($tens);
        $appendSeconds.html($seconds);
        $("#timer").css({
            backgroundColor: "lightgrey"
        });
        $("#timer").css({
            opacity: "1"
        });
        $opacity = 1;
    });

    function startTimer() {
        $tens++;
        if($opacity == 1)
        {
            $("#timer").css({
                opacity: "0.8"
            });
            $opacity = 0.8;
        }
        else if($opacity == 0.8)
        {
            $("#timer").css({
                opacity: "1"
            });
            $opacity = 1;
        }
        if ($tens < 9) {
            $appendTens.html("0" + $tens);
        }

        if ($tens > 9) {
            $appendTens.html($tens);

        }

        if ($tens > 99) {
            console.log("seconds");
            $seconds++;
            $appendSeconds.html("0" + $seconds);
            $tens = 0;
            $appendTens.html("00");
        }

        if ($seconds > 9) {
            $appendSeconds.html($seconds);
        }
    }
});