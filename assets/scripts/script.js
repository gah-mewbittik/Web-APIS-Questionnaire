var timerEl = document.getElementById('timerCount');
var mainEl = document.getElementById('main');
var qContainEl = document.querySelector('.questionContainer');
var initialQ = document.getElementById('initialQuestion');

var theScores = [];
var highScoreList = document.getElementById('highScoreList');

//initials input
var yourInitials = document.getElementById('yourInitials');

//start-quiz button
var buttonEl = document.getElementById('start-quiz');

var questionOne = document.getElementById('questionOne');
//questionOne buttons
var qOneButton_1El = document.getElementById('qOneBtn_1');
var qOneButton_2El = document.getElementById('qOneBtn_2');
var qOneButton_3El = document.getElementById('qOneBtn_3');
var qOneButton_4El = document.getElementById('qOneBtn_4');

//questionTwo
var questionTwo = document.getElementById('questionTwo');

// question two buttons
var qTwoButton_1El = document.getElementById('qTwoBtn_1');
var qTwoButton_2El = document.getElementById('qTwoBtn_2');
var qTwoButton_3El = document.getElementById('qTwoBtn_3');
var qTwoButton_4El = document.getElementById('qTwoBtn_4');

//questionThree
var questionThree = document.getElementById('questionThree');

//questionFour buttons
var qThreeButton_1El = document.getElementById('qThreeBtn_1');
var qThreeButton_2El = document.getElementById('qThreeBtn_2');
var qThreeButton_3El = document.getElementById('qThreeBtn_3');
var qThreeButton_4El = document.getElementById('qThreeBtn_4');

//questionFour
var questionFour = document.getElementById('questionFour');

//question four buttons
var qFourButton_1El = document.getElementById('qFourBtn_1');
var qFourButton_2El = document.getElementById('qFourBtn_2');
var qFourButton_3El = document.getElementById('qFourBtn_3');
var qFourButton_4El = document.getElementById('qFourBtn_4');

//questionFire
var questionFive = document.getElementById('questionFive');

//questionFive buttons
var qFiveButton_1El = document.getElementById('qFiveBtn_1');
var qFiveButton_2El = document.getElementById('qFiveBtn_2');
var qFiveButton_3El = document.getElementById('qFiveBtn_3');
var qFiveButton_4El = document.getElementById('qFiveBtn_4');

//score
var score = document.getElementById('score');

// Points for correct answers
var points = 0;
var enterPoints = document.getElementById('enterPoints');

//score button
var scoreSubmit = document.getElementById('scoreSubmit');

//clearScore
var clearScore = document.getElementById('clearScore');

//clearScore buttons
var goBackBtn = document.getElementById('goBackBtn');
var clearHighScoreBtn = document.getElementById('clearHighScore');

//clearAllHighScores
var clearAllScores = document.getElementById('clearAllScores');

//clearAllHighScores btn
var goBackBtn_2 = document.getElementById('goBackBtn_2');
var clearAllHighScoresBtn = document.getElementById('clearAllHighScores');

//countdown start time
var downTick = 75;

var message = 'YOUR TIME IS UP!'
var words = message.split(' ');

//countdown Timer
function countdown() {
 
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // counting down! 
      downTick--;
      timerEl.textContent = downTick;
      if(downTick > 50){
        timerEl.style.color = 'green';
      }else if(downTick <= 50 && downTick > 25){
        timerEl.style.color = '#cccc00';
      }else{
        timerEl.style.color = 'red';
      }
      if(downTick === 0){
        clearInterval(timeInterval);
        displayMessage();
        endQuiz();
      }
      //
    }, 1000);
  }
  
  //Displays the message one word at a time
  function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
      // If there are no more words left in the message
      if (words[wordCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(msgInterval);
      } else {
        // Display one word of the message
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 1000);
  }

  //Removes all questions when timer runs out
  function endQuiz(){
      questionOne.remove();
      questionTwo.remove();
      questionThree.remove();
      questionFour.remove();
      questionFive.remove();
      score.style.display = 'flex';
      enterPoints.textContent = points;
  }
  
//initial question buttons "start quiz"
 buttonEl.addEventListener('click', function(){
  
  countdown();
  document.getElementById('initialQuestion').remove();
  questionOne.style.display = 'flex';
  yourInitials.value  = "";
 });

 //First question buttons start 
 //strings btn (wrong)
 qOneButton_1El.addEventListener('click', function(){
  
  questionOne.remove();
  questionTwo.style.display = 'flex';
  downTick -= 5;
 });
//booleans btn (wrong)
 qOneButton_2El.addEventListener('click', function(){
  
  questionOne.remove();
  questionTwo.style.display = 'flex';
  downTick -= 5;
 });
//alerts btn (correct)
 qOneButton_3El.addEventListener('click', function(){
  
  questionOne.remove();
  questionTwo.style.display = 'flex';
  points++;
 });
//numbers btn (wrong)
 qOneButton_4El.addEventListener('click', function(){
  
  questionOne.remove();
  questionTwo.style.display = 'flex';
  downTick -= 5;
 });
//First question buttons end

//Second question buttons
// quotes btn (wrong)
qTwoButton_1El.addEventListener('click', function(){
  questionTwo.remove();
  questionThree.style.display = 'flex';
  downTick -= 5;
});
//curly brackets btn (wrong)
qTwoButton_2El.addEventListener('click', function(){
  questionTwo.remove();
  questionThree.style.display = 'flex';
  downTick -= 5;
});
//parenthesis btn (correct)
qTwoButton_3El.addEventListener('click', function(){
  questionTwo.remove();
  questionThree.style.display = 'flex';
  points++;
});
//square brackets btn (wrong)
qTwoButton_4El.addEventListener('click', function(){
  questionTwo.remove();
  questionThree.style.display = 'flex';
  downTick -= 5;
});
//Second question buttons end

//Third question buttons start
//number and string btn (wrong)
qThreeButton_1El.addEventListener('click', function(){
  questionThree.remove();
  questionFour.style.display = 'flex';
  downTick -= 5;
});
//other array btn (wrong)
qThreeButton_2El.addEventListener('click', function(){
  questionThree.remove();
  questionFour.style.display = 'flex';
  downTick -= 5;
});
// boolean btn (wrong)
qThreeButton_3El.addEventListener('click', function(){
  questionThree.remove();
  questionFour.style.display = 'flex';
  downTick -= 5;
});
//all the above btn (correct)
qThreeButton_4El.addEventListener('click', function(){
  questionThree.remove();
  questionFour.style.display = 'flex';
  points++;
});
//Third question buttons end

//Fourth question buttons start
//commas btn (wrong)
qFourButton_1El.addEventListener('click', function(){
  questionFour.remove();
  questionFive.style.display = 'flex';
  downTick -= 5;
});
//curly brackets btn (wrong)
qFourButton_2El.addEventListener('click', function(){
  questionFour.remove();
  questionFive.style.display = 'flex';
  downTick -= 5;
});
//quotes btn (correct)
qFourButton_3El.addEventListener('click', function(){
  questionFour.remove();
  questionFive.style.display = 'flex';
  points++;
});
//parenthesis btn (wrong)
qFourButton_4El.addEventListener('click', function(){
  questionFour.remove();
  questionFive.style.display = 'flex';
  downTick -= 5;
});
//Fourth question end

//Fifth question start
//javaScript btn (wrong)
qFiveButton_1El.addEventListener('click', function(){
  questionFive.remove();
  score.style.display = 'flex';
  downTick -= 5;
  enterPoints.textContent = points; // points accumulated
});
//terminal/bash btn (wrong)
qFiveButton_2El.addEventListener('click', function(){
  questionFive.remove();
  score.style.display = 'flex';
  downTick -= 5;
  enterPoints.textContent = points; // points accumulated
});
// for loop btn (wrong)
qFiveButton_3El.addEventListener('click', function(){
  questionFive.remove();
  score.style.display = 'flex';
  downTick -= 5;
  enterPoints.textContent = points; // points accumulated
});
// console log btn (correct)
qFiveButton_4El.addEventListener('click', function(){
  questionFive.remove();
  score.style.display = 'flex';
  points++;
  enterPoints.textContent = points; // points accumulated
  
});
//Fifth question end

//Scores & Clear Scores Buttons start
//submit button
scoreSubmit.addEventListener('click', function(event){
  
  if(yourInitials.value === ""){
    alert("You need to enter your initials.");
  }else{
    score.remove();
    clearScore.style.display = 'flex';
    document.body.append(clearScore);
    document.querySelector("#initialsInput").textContent = yourInitials.value + " "+"-"+" "+ points; 

    theScores.push(yourInitials.value + " - " + points);
    //sort list from highest points
    theScores.sort(function(a, b) {
      // get the points from each score
      var ptsA = parseInt(a.split(" - ")[1]);
      var ptsB = parseInt(b.split(" - ")[1]);

      // Compare the points 
      return ptsB - ptsA;
    });

    storeHighScores();
    renderHighScores();
  }
});
//go back button
goBackBtn.addEventListener('click', function(){
  clearScore.remove();
  document.body.appendChild(score); 
  score.style.display = 'flex';
  yourInitials.value = "";
});
//clear high score button
clearHighScoreBtn.addEventListener('click', function(){
  clearScore.remove();
  document.body.appendChild(clearAllScores);
  clearAllScores.style.display = 'flex';
});
//go back button two
goBackBtn_2.addEventListener('click', function(){
  clearAllScores.remove();
  location.reload();
  
});
//clear all button
clearAllHighScoresBtn.addEventListener('click', function(){
  
  //Add clearing of scores and save to local storage
  clearAllScores.remove();
  highScoreList.innerHTML = "";
  localStorage.clear();
  mainEl.textContent = 'Thank you for your participation!'


});

// collapsing list for High Scores
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

//High Score list 

function storeHighScores() {
  localStorage.setItem("theScores", JSON.stringify(theScores));
  
}

function renderHighScores() {
  highScoreList.innerHTML = "";
  
  for (var i = 0; i < theScores.length; i++) {
    var addScore = theScores[i];

    var li = document.createElement("li");
    li.textContent = addScore;
    li.setAttribute("data-index", i);

    highScoreList.appendChild(li);
  }
}

function init() {
  
  var storedHighScores = JSON.parse(localStorage.getItem("theScores"));
  
  if (storedHighScores !== null) {
    theScores = storedHighScores;
  }
  renderHighScores();
}

init();
