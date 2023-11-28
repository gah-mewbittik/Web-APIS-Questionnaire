var timerEl = document.getElementById('timerCount');
var mainEl = document.getElementById('main');
var qContainEl = document.querySelector('.questionContainer');
var buttonEl = document.getElementById('start-quiz');





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
  
  

 buttonEl.addEventListener('click', function(event){
  var element = event.target;

  countdown();
  

  if(element.matches('.questionContainer')){
       if(element.dataset.state === 'hidden'){
         element.dataset.state = 'visible';
         }else{
           element.dataset.state = 'hidden';
         }
       
      }
  

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