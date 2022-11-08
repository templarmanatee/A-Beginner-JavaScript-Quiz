var quizContent = document.getElementById('quiz-content'); 

//Objects containing questions, their answer choices, and the correct answer. 
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

    get getRandomQuestionsArray() {
        var questionsInOrder = [this.choiceA, this.choiceB, this.choiceC, this.choiceD]; 
        var questionsLeft = this.answerChoices.length;
        var quizArray = []; 
        var stashArray = [];
        var randQuestion = 0;
        var selectedQuestion = '';

        while(questionsLeft > 0){
            randQuestion = Math.floor(Math.random() * questionsInOrder.length);
            selectedQuestion = questionsInOrder[randQuestion];
            questionsLeft = quizArray.push(selectedQuestion);
            questionsInOrder.splice(randQuestion);
        }
        console.log(quizArray);
        return(quizArray); 
    }
}

var question1 = new quizQuestion("What is programming?",0,"Pain","Suffering","Torture","Pretty fun"); 
//Object containing the high score: score and name 
class scoreBoard {
}
//Array of question objects to choose from randomly

// for(i=0; i < questionsLeft; i++){
//     var randQuestion = Math.floor(Math.random * questionsLeft); 

//     stashArray = quizArray.concat(quizQuestion.questionsArray[randQuestion]);
//     quizArray = stashArray; 
//     questionsLeft--; 
// }

console.log(question1.getRandomQuestionsArray);
//Array of high score objects

//Initialize quiz on button press

//  Begin timer countdown 
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