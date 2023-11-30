var timerEl = document.getElementById('timerCount');
var mainEl = document.getElementById('main');
var qContainEl = document.querySelector('.questionContainer');
var initialQ = document.getElementById('initialQuestion');

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
  
//initial question buttons "start quiz"
 buttonEl.addEventListener('click', function(){
  
  countdown();
  document.getElementById('initialQuestion').remove();
  questionOne.style.display = 'flex';

  
  
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
scoreSubmit.addEventListener('click', function(){
  score.remove();
  clearScore.style.display = 'flex';
  document.body.append(clearScore);
  document.querySelector("#initialsInput").textContent = yourInitials.value + " "+"-"+" "+ points; ///fix
  
});
//go back button
goBackBtn.addEventListener('click', function(){
  clearScore.remove();
  document.body.appendChild(score); 
  score.style.display = 'flex';
  
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

  mainEl.textContent = 'Thank you for your participation!'


});

