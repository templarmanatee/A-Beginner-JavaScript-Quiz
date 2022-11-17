//Grabbing HTML elements
var quizContent = document.getElementById('quiz-content'); 
var initBtn = document.getElementById('init-btn'); 
var timeEl = document.getElementById('timer');

//Class to construct quiz objects 
class quizQuestion {
    constructor(prompt, correctAnswer, choiceA, choiceB, choiceC, choiceD) {
        this.prompt = prompt; 
        this.correctAnswer = correctAnswer; 
        this.choiceA = choiceA; 
        this.choiceB = choiceB; 
        this.choiceC = choiceC; 
        this.choiceD = choiceD; 
        this.answerChoices = [choiceA, choiceB, choiceC, choiceD];
    }
}

//Objects representing the quiz questions 
var question1 = new quizQuestion("What is programming?",0,"Pain","Suffering","Torture","Pretty fun"); 
var question2 = new quizQuestion("JavaScript?", 1, "Ye.","Nah.","YEAH!","Absolutely not."); 
var question3 = new quizQuestion("What's the air speed velocity of a coconut-laden swallow?",1,"Is it an African swallow?","37km^2/h","Iunno","I fart in your general direction.");
var question4 = new quizQuestion("Is this a question.",2,"Yes","No","Sure","Why not?");
var question5 = new quizQuestion("Freebie? Pick 2.",2,"Nope","Nope","Yep","Nope");

var questionsAnswered = 0; 
var finalScore; 

//Function to randomize quiz order. 
function randomizeQuiz(fullQuiz) {
    var randQuiz = fullQuiz.sort(() => Math.random()-0.5);
    console.log("Randomized Quiz: ");
    console.log(randQuiz);
    return(randQuiz); 
} 

var fullQuiz = [question1, question2, question3, question4, question5];
var randQuiz = randomizeQuiz(fullQuiz); 

//Initialize quiz on button press
initBtn.addEventListener("click", function() {
    setTimer();
    buildQuizElements(questionsAnswered);
})

//Resets the quiz-element div and builds the quiz question in its place
function buildQuizElements(questionsAnswered) {
    quizContent.innerHTML = null;
    var promptHeader = document.createElement("h2");
    var answerChoicesUl = document.createElement("ul");
    answerChoicesUl.id = 'answer-choices';
    promptHeader.textContent = randQuiz[questionsAnswered].prompt;

    quizContent.appendChild(promptHeader); 
    quizContent.appendChild(answerChoicesUl);

    //Create answer choices
    for(i=0; i < randQuiz[questionsAnswered].answerChoices.length; i++) {
        var answerChoice = document.createElement("li");
        var answerButton = document.createElement("button");
        answerButton.textContent = randQuiz[questionsAnswered].answerChoices[i]; 
        answerButton.setAttribute('id', i);
        answerButton.setAttribute('onClick','checkAnswer(this.id)');
        answerChoice.style.listStyle = 'none';
        answerChoice.appendChild(answerButton); 
        quizContent.appendChild(answerChoice);
    }
}

var secondsLeft = 70; 
//  Begin timer countdown 
function setTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          endGame();
        }
        if(questionsAnswered === 5) {
            clearInterval(timerInterval);
        }
      }, 1000);
}

//Checks to see if the id of the pressed button is equivalent to the 
function checkAnswer(buttonId) {
    var feedbackEl = document.createElement("p"); 
    var penalty = 15; 
    
    //Checks for right answer and gives feedback
    if(buttonId == randQuiz[questionsAnswered].correctAnswer) {
        console.log("Correct!");
        feedbackEl.textContent = "Correct!";
    } else {
        console.log("Incorrect.");
        secondsLeft -= penalty; 
        feedbackEl.textContent = "Incorrect."; 
    }

    //Increments question counter and checks whether there is another question to build from. 
    questionsAnswered++;
    if(questionsAnswered < randQuiz.length){
        buildQuizElements(questionsAnswered); 
        quizContent.appendChild(feedbackEl);
    } else if (questionsAnswered == randQuiz.length){
        endGame();
    }
}

//  Retrieve quizResults from local Storage
//  Check if the current score falls on the scoreboard 
//  Add current score to scoreboard if necessary 
//  Load quizResults into 'quiz-content' div 
function endGame() {
    finalScore = secondsLeft; 
    timeEl.textContent = "Final Score: " + finalScore; 
    console.log(finalScore); 

    //Elements for score entry
    quizContent.innerHTML = null; 
    var namePromptEl = document.createElement("h2"); 
    var nameEnteredEl = document.createElement("input");
    var nameButtonEl = document.createElement("button"); 

    //Content for elements
    namePromptEl.textContent = "Please enter your name:";
    nameEnteredEl.type = "text";
    nameEnteredEl.id = "name-entered";
    nameButtonEl.id = "name-btn";
    nameButtonEl.textContent = "Submit Score";
    nameButtonEl.setAttribute("onclick","checkHighScore(finalScore, document.querySelector('#name-entered').value)");

    //Append score submission elements to page
    quizContent.appendChild(namePromptEl);
    quizContent.appendChild(nameEnteredEl);
    quizContent.appendChild(nameButtonEl);
}

function checkHighScore(timeScore, name) {
    var highScores = JSON.parse(localStorage.getItem('highScores') || '[]');

    if(name === "") {
        name = "Anonymous";
    }
    var userScore = [timeScore, name];

    highScores.push(userScore); 
    highScores.sort((a, b) => parseFloat(b[0]) - parseFloat(a[0]));
    if(highScores.length > 10){
        highScores.length = 10;
    } 
    localStorage.setItem("highScores",JSON.stringify(highScores));
    displayScoreboard();
}

function displayScoreboard() {
    quizContent.innerHTML = null;
    var scoreboardEl = document.createElement("ol");
    var returnBtnEl = document.createElement("button"); 
    returnBtnEl.textContent = 'Return to Game';
    returnBtnEl.setAttribute("onclick","location.reload()");

    var highScores = JSON.parse(localStorage.getItem('highScores'));
    for(var i=0; i < highScores.length; i++) {
        var highScoreEl = document.createElement("li");
        highScoreEl.textContent = "Score: " + highScores[i][0] + "  " + highScores[i][1];
        scoreboardEl.append(highScoreEl);
    }
    quizContent.appendChild(scoreboardEl);
    quizContent.appendChild(returnBtnEl);
}