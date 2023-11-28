var timerEl = document.getElementById('timerCount');
var mainEl = document.getElementById('main');
var qContainEl = document.querySelector('.questionContainer');
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
  
//initial question buttons;
 buttonEl.addEventListener('click', function(){

  countdown();
  
  document.getElementById('initialQuestion').remove();

  questionOne.style.display = 'flex';
  
 });

 //First question buttons start
 qOneButton_1El.addEventListener('click', function(){
  
  questionOne.remove();
  questionTwo.style.display = 'flex';
 });

 qOneButton_2El.addEventListener('click', function(){
  
  questionOne.remove();
  questionTwo.style.display = 'flex';
 });

 qOneButton_3El.addEventListener('click', function(){
  
  questionOne.remove();
  questionTwo.style.display = 'flex';
 });

 qOneButton_4El.addEventListener('click', function(){
  
  questionOne.remove();
  questionTwo.style.display = 'flex';
 });
//First question buttons end

//Second question buttons
qTwoButton_1El.addEventListener('click', function(){
  questionTwo.remove();
  questionThree.style.display = 'flex';
});

qTwoButton_2El.addEventListener('click', function(){
  questionTwo.remove();
  questionThree.style.display = 'flex';
});

qTwoButton_3El.addEventListener('click', function(){
  questionTwo.remove();
  questionThree.style.display = 'flex';
});

qTwoButton_4El.addEventListener('click', function(){
  questionTwo.remove();
  questionThree.style.display = 'flex';
});
//Second question buttons end

//Third question buttons start
qThreeButton_1El.addEventListener('click', function(){
  questionThree.remove();
  questionFour.style.display = 'flex';
});

qThreeButton_2El.addEventListener('click', function(){
  questionThree.remove();
  questionFour.style.display = 'flex';
});

qThreeButton_3El.addEventListener('click', function(){
  questionThree.remove();
  questionFour.style.display = 'flex';
});

qThreeButton_4El.addEventListener('click', function(){
  questionThree.remove();
  questionFour.style.display = 'flex';
});
//Third question buttons end

//Fourth question buttons start
qFourButton_1El.addEventListener('click', function(){
  questionFour.remove();
  questionFive.style.display = 'flex';
});
qFourButton_2El.addEventListener('click', function(){
  questionFour.remove();
  questionFive.style.display = 'flex';
});
qFourButton_3El.addEventListener('click', function(){
  questionFour.remove();
  questionFive.style.display = 'flex';
});
qFourButton_4El.addEventListener('click', function(){
  questionFour.remove();
  questionFive.style.display = 'flex';
});
//Fourth question end

//Fifth question start
qFiveButton_1El.addEventListener('click', function(){
  questionFive.remove();
  score.style.display = 'flex';
});

qFiveButton_2El.addEventListener('click', function(){
  questionFive.remove();
  score.style.display = 'flex';
});

qFiveButton_3El.addEventListener('click', function(){
  questionFive.remove();
  score.style.display = 'flex';
});

qFiveButton_4El.addEventListener('click', function(){
  questionFive.remove();
  score.style.display = 'flex';
});
//Fifth question end

//Scores & Clear Scores Buttons start
scoreSubmit.addEventListener('click', function(){
  score.remove();
  clearScore.style.display = 'flex';
  document.body.append(clearScore);
});

goBackBtn.addEventListener('click', function(){
  clearScore.remove();
  document.body.appendChild(score); 
  score.style.display = 'flex';
  
});

clearHighScoreBtn.addEventListener('click', function(){
  clearScore.remove();
  document.body.appendChild(clearAllScores);
  clearAllScores.style.display = 'flex';
});

goBackBtn_2.addEventListener('click', function(){
  clearAllScores.remove();
  document.body.append(clearScore); 
  clearScore.style.display = 'flex';
});

clearAllHighScoresBtn.addEventListener('click', function(){
  
  //Add clearing of scores and save to local storage
  clearAllScores.remove();

  mainEl.textContent = 'Thank you for your participation!'
});





//  var container = document.querySelector(".container");

//  container.addEventListener("click", function(event) {
//    var element = event.target;
 
//    // TODO: Complete function
//   if(element.matches('.box')){
//    if(element.dataset.state === 'hidden'){
//      var value = element.getAttribute('data-number');
//      element.textContent = value;
//      element.dataset.state = 'visible';
//      }else{
//        element.textContent = ' ';
//        element.dataset.state = 'hidden';
//      }
   
//   }
 
 
//  });