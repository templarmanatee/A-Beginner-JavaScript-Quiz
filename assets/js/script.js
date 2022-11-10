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

//Function to randomize quiz order. 
function randomizeQuiz(fullQuiz) {
    var randQuiz = fullQuiz.sort(() => Math.random()-0.5);
    console.log("Randomized Quiz: ");
    console.log(randQuiz);
    return(randQuiz); 
} 

var fullQuiz = [question1, question2, question3, question4, question5];
var randQuiz = randomizeQuiz(fullQuiz); 

//Object containing the high score: score and name 
class scoreBoard {
}

//Array of high score objects

//Initialize quiz on button press
initBtn.addEventListener("click", function() {
    buildQuizElements(1);
    setTimer();
})

//Resets the quiz-element div and builds the quiz question in its place
function buildQuizElements(questionIndex) {
    quizContent.innerHTML = null;
    var promptHeader = document.createElement("h2");
    var answerChoicesUl = document.createElement("ul");
    answerChoicesUl.id = 'answer-choices';
    promptHeader.textContent = randQuiz[questionIndex].prompt;
    quizContent.appendChild(promptHeader); 
    quizContent.appendChild(answerChoicesUl);
    //Create answer choices
    for(i=0; i < randQuiz[questionIndex].answerChoices.length; i++) {
        console.log(i);
        var answerChoice = document.createElement("li");
        var answerButton = document.createElement("button");
        answerButton.textContent = randQuiz[questionIndex].answerChoices[i]; 
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
          //buildScoreboard();
        }
      }, 1000);
}

//  Replace 'quiz-content' div with quiz question 
//      Insert question header ul 
//      Insert 4 answer choices li 
//      Make each li a clickable button

//Check for correct answer on button press 

//  If correct:
//      Display 'Correct!'
//  If incorrect:
//      Subtract 15 from the timer/score
//      Display 'Incorrect!' 
//  Remove question from available array 
//  Check to see if any questions remain 
//  Load new question into 'quiz-content' div 

//  Game End ()
//  Retrieve quizResults from localStorage
//  Check if the current score falls on the scoreboard 
//  Add current score to scoreboard if necessary 
//  Load quizResults into 'quiz-content' div 
//  