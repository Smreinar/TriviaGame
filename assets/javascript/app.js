//On Load Click Function
window.onload = function(){
    $("#startbtn").on("click", stopwatch.start);
    $("#donebtn").on("click", stopwatch.stop);
    $(".choices").on("click", stopwatch.totalCorrect);
    
};

//Global Varibles
var tagVal;
var runningTime = false;
var correctSelect = 0;

// Object Containing Stopwatch Function
var stopwatch = {
    //Setting Timer
    time: 60,

    //Counts Total Correct Function
    totalCorrect: function(){
        if (runningTime){
            var answer = $(this).val().trim();
            if (answer === "correct" && correctSelect < 5){
                correctSelect++
                //console.log(correctSelect)
            }
            else if (correctSelect > 5) {
                stopwatch.stop();
            }
        }
        else if (!runningTime){
            event.preventDefault();
        }
    },

    //Start Game Function
    start: function(){
        if (!runningTime){
            tagVal = setInterval(stopwatch.count,1000);
            runningTime = true;
        }
    
    },
    //Stop Game Function
    stop: function(){
    clearInterval(tagVal);
    runningTime = false;
    $(".results").html("You Got " + correctSelect + " Out Of 5 Correct!");
    },

    //Count Down Function
    count: function(){
        if(stopwatch.time > 0){
            stopwatch.time--;
            var transfer = stopwatch.timing(stopwatch.time);

            $("#timer").text(transfer);
        }
        else {
            stopwatch.stop();
        }

    },

    //Time Convert Function
    timing: function(i){
        var minutes = Math.floor(i / 60);
        var seconds = i - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    },

}



//TO-DO LIST:

//questions with multiple choices or true false options

//can only pick one answer per question 
//player will have limited time

//game ends when time runs out

//the end of the game will reveal the number of questions thats play answered right or wrong

// inclue count down counter