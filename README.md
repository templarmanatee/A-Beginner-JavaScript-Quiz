# Web APIs Coding Quiz
UNCC Bootcamp Challenge 4
Dylan Freeman

## Project Review 

This project was created to test programming students about their knowledge of JavaScript. 

Over the course of this creating this project, I learned how to traverse the DOM and manipulate elements using the browser's APIs. 

I also learned to use localStorage and how to correctly store data within the user's browser. This gave me the most trouble until I stored the high scores as arrays rather than objects. This was the primary issue I had to debug. 

## Usage

The user is first met with the landing page, given a brief explanation and the choice of 2 buttons: one displays the local highscores, the other begins the quiz. 

Once the quiz begins, the user has 70 seconds to answer all 5 questions by clicking on the answer choice buttons. A wrong answer will penalize the user by 15 seconds. 

When either the timer runs out or the user has answered all questions, the screen will prompt the user to enter their chosen name.

The scoreboard will then be displayed with the top 10 scores, along with a button to refresh the page and begin the quiz again. 

## Installation

Github Pages: https://templarmanatee.github.io/UNCC-Bootcamp-Challenge-4/ 

Github Repository: https://github.com/templarmanatee/UNCC-Bootcamp-Challenge-3

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
## Screenshots 

* ![Landing Page](.\assets\screenshots\quizSS1.png)
* ![Quiz Item](.\assets\screenshots\quizSS2.png)
* ![Scoreboard](.\assets\screenshots\quizSS3.png)
