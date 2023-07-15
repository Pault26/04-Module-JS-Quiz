// Establishing Global Var
var startQuizEl = document.querySelector("#startQuiz")
var paragraphEl = document.querySelector("#paragraph")
var formEl = document.querySelector("#form1")
var formEl2 = document.querySelector("#form2")
var formEl3 = document.querySelector("#form3")
var formEl4 = document.querySelector("#form4")
var formEl5 = document.querySelector("#form5")
var homeEl = document.querySelector("#home")
var timerCount = 60;
var timerEl = document.querySelector("#timer");
var resultsEl = document.querySelector("#results");
var initialsEl = document.querySelector("#initials");
var testTimer;
var wrongAnswerEl = document.querySelector(".wrongAnswer");
var textAreaEl = document.querySelector("#textArea");
var submitEl = document.querySelector("#submit");
var viewHighScoresEl = document.querySelector("#viewHighScores");
var clearButtonEl = document.querySelector("#clearButton");
var correctAnswerCount = 0;
// Quiz Functions
function next(param_div_id) {
    document.getElementById('home').innerHTML = document.getElementById('question1').innerHTML;
    formEl.style.display = 'flex';
    testTimer = setInterval(timerFunction, 1000);
}
// Question 1
function next1(param_div_id, wrongAnswer) {
    document.getElementById('question1').innerHTML = document.getElementById('question2').innerHTML;
    if (wrongAnswer) {
        timerFunction(true);
    } else {
        correctAnswerCount++;
    }
    formEl2.style.display = 'flex';
}
// Question 2
function next2(param_div_id, wrongAnswer) {
    document.getElementById('question2').innerHTML = document.getElementById('question3').innerHTML;
    if (wrongAnswer) {
        timerFunction(true);
    } else {
        correctAnswerCount++;
    }
    formEl3.style.display = 'flex';
}
// Question 3
function next3(param_div_id, wrongAnswer) {
    document.getElementById('question3').innerHTML = document.getElementById('question4').innerHTML;
    if (wrongAnswer) {
        timerFunction(true);
    } else {
        correctAnswerCount++;
    }
    formEl4.style.display = 'flex';
}
// Question 4
function next4(param_div_id, wrongAnswer) {
    document.getElementById('question4').innerHTML = document.getElementById('question5').innerHTML;
    if (wrongAnswer) {
        timerFunction(true);
    } else {
        correctAnswerCount++;
    }
    formEl5.style.display = 'flex';
}
// Question 5
function next5(param_div_id, wrongAnswer) {
    document.getElementById('question5').innerHTML = document.getElementById('results').innerHTML;
    if (wrongAnswer){
        timerFunction(true)
    } else {
    correctAnswerCount++;
    }
// Add End Results
    resultsEl.style.visibility = 'visible';
    initialsEl.style.display = 'flex';
    document.getElementById('question5').style.display = 'none';
    clearInterval(testTimer);
    var score = (correctAnswerCount / 5) * 100;
    paragraphEl.textContent = "Your final score is " + score + "%!";
}
// Timer Function
function timerFunction(wrongAnswer){
    if (wrongAnswer){
        timerCount = timerCount - 10;
    }
    else {
        timerCount--;
    }
    timerEl.textContent = "Time: " + timerCount;
    if (timerCount < 1){
        alert("You Failed!")
        clearInterval(testTimer)
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

// Clears Local Storage
function clearLocalStorage(){
    localStorage.clear();
}