$(document).ready(function() {

  //Create variables for yourScore, which will be blank, wins, losses - DONE
  var yourScore = 0;
  var wins = 0;
  var losses = 0;
  var crystalScore = 0;
  var crystal1 = '';
  var crystal2 = '';
  var crystal3 = '';
  var crystal4 = '';

  //function to show yourscore
  function userScore() {
    $("#yourscore").html(yourScore);
    console.log("yourscore " + yourScore)
    console.log("crystalscore " + crystalScore)
  }

  //function to compare
  function compare() {
    if (yourScore === crystalScore) {
      alert("You win! Hit Crystal Collectors to play again")
      wins++;
      $("#win").html(wins);
    }
    else if (yourScore > crystalScore) {
      alert("You lose! it Crystal Collectors to play again");
      losses++;
      $("#loss").html(losses);

}
  }

  //function to generate the random numbers assigned to crystalScore and the individual crystals
  function getcrystalScore() {
    crystalScore = Math.floor(Math.random() * 120) + 19;
    $("#crystalscore").html(crystalScore);
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    };

      //Write a function that compares crystalscore to yourscore and if it matches, then wins increase by one.  However, if yourscore > crystalscore, then it decreases by one

  //NewGame
  function newGame() {
    yourScore = 0;
    $("#win").html(wins);
    $("#loss").html(losses);
    getcrystalScore();
    userScore();
    }

  //For each of the crystal images, add a button, that on the "click", selects the crystalnumber from the array by index number and adds it to yourScore;

  $("#crystal1").on("click", function() {
    yourScore += crystal1;userScore();
    compare();
  });

  $("#crystal2").on("click", function() {
    yourScore += crystal2;
    userScore();
    compare();
  });

  $("#crystal3").on("click",
  function() {
    console.log("crystal3")
    yourScore += crystal2;
    userScore();
    compare();
  });

  $("#crystal4").on("click", function() {
    yourScore += crystal4;
    userScore();
    compare();
  });


$("#btn").click(newGame)

}); ///closing the $(document).ready function
