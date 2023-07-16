// Establishing Global Variables
var startQuizEl = document.querySelector("#startQuiz");
var paragraphEl = document.querySelector("#paragraph");
var homeEl = document.querySelector("#home");
var timerCount = 60;
var testTimer;
var timerEl = document.querySelector("#timer");
var initialsEl = document.querySelector("#initials");
var formEl = document.querySelector("#form1");
var formEl2 = document.querySelector("#form2");
var formEl3 = document.querySelector("#form3");
var formEl4 = document.querySelector("#form4");
var formEl5 = document.querySelector("#form5");
var submitEl = document.querySelector("#submit");
var wrongAnswerEl = document.querySelector(".wrongAnswer");
var resultsEl = document.querySelector("#results");
var textAreaEl = document.querySelector("#textArea");
var viewHighScoresEl = document.querySelector("#viewHighScores");
var clearButtonEl = document.querySelector("#clearButton");
var correctAnswerCount = 0;

// Quiz Functions
function next(param_div_id) {
  homeEl.innerHTML = document.getElementById('question1').innerHTML;
  formEl.style.display = 'flex';
  testTimer = setInterval(timerFunction, 1000);
}

// Question Functions
function nextQuestion(questionElement, formElement, wrongAnswer) {
  questionElement.innerHTML = getNextQuestionHtml(questionElement);
  if (wrongAnswer) {
    timerFunction(true);
  } else {
    correctAnswerCount++;
  }
  formElement.style.display = 'flex';
}

function getNextQuestionHtml(questionElement) {
  var nextQuestionElement = questionElement.nextElementSibling;
  return nextQuestionElement ? nextQuestionElement.innerHTML : '';
}

// Question 1
function next1(param_div_id, wrongAnswer) {
  nextQuestion(document.getElementById('question1'), formEl2, wrongAnswer);
}

// Question 2
function next2(param_div_id, wrongAnswer) {
  nextQuestion(document.getElementById('question2'), formEl3, wrongAnswer);
}

// Question 3
function next3(param_div_id, wrongAnswer) {
  nextQuestion(document.getElementById('question3'), formEl4, wrongAnswer);
}

// Question 4
function next4(param_div_id, wrongAnswer) {
  nextQuestion(document.getElementById('question4'), formEl5, wrongAnswer);
}

// Question 5
function next5(param_div_id, wrongAnswer) {
  nextQuestion(document.getElementById('question5'), resultsEl, wrongAnswer);
  resultsEl.style.visibility = 'visible';
  initialsEl.style.display = 'flex';
  document.getElementById('question5').style.display = 'none';
  clearInterval(testTimer);
  var score = (correctAnswerCount / 5) * 100;
  paragraphEl.textContent = "Your final score is " + score + "%!";
}

// Timer Function
function timerFunction(wrongAnswer) {
  if (wrongAnswer) {
    timerCount = timerCount - 10;
  } else {
    timerCount--;
  }
  timerEl.textContent = "Time: " + timerCount;
  if (timerCount < 1) {
    alert("You Failed!");
    clearInterval(testTimer);
  }
}

// Highscore Local Storage and Display
submitEl.addEventListener("click", function(event) {
  event.preventDefault();
  var initials = textAreaEl.value.trim();
  if (initials !== "") {
    var scores = localStorage.getItem("scores");
    var scoresObj = scores ? JSON.parse(scores) : {};
    scoresObj[initials] = timerCount;
    localStorage.setItem("scores", JSON.stringify(scoresObj));
    textAreaEl.value = "";
    alert("Score saved successfully!");
  }
});

// Clear Local Storage
function clearLocalStorage() {
  localStorage.clear();
}
