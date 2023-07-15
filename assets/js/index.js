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


// The following 'next' functions are used to change between the different divs, such as 'home' to 'question1' all the way through to 'results'
function next(param_div_id) {
    document.getElementById('home').innerHTML = document.getElementById('question1').innerHTML;
    formEl.style.display = 'flex';
    testTimer = setInterval(timerFunction, 1000);
}

function next1(param_div_id, wrongAnswer) {
    document.getElementById('question1').innerHTML = document.getElementById('question2').innerHTML;
    if (wrongAnswer) {
        timerFunction(true);
    } else {
        // Increment the correct answer count
        correctAnswerCount++;
    }
    formEl2.style.display = 'flex';
}

function next2(param_div_id, wrongAnswer) {
    document.getElementById('question2').innerHTML = document.getElementById('question3').innerHTML;
    if (wrongAnswer) {
        timerFunction(true);
    } else {
        // Increment the correct answer count
        correctAnswerCount++;
    }
    formEl3.style.display = 'flex';
}

function next3(param_div_id, wrongAnswer) {
    document.getElementById('question3').innerHTML = document.getElementById('question4').innerHTML;
    if (wrongAnswer) {
        timerFunction(true);
    } else {
        // Increment the correct answer count
        correctAnswerCount++;
    }
    formEl4.style.display = 'flex';
}

function next4(param_div_id, wrongAnswer) {
    document.getElementById('question4').innerHTML = document.getElementById('question5').innerHTML;
    if (wrongAnswer) {
        timerFunction(true);
    } else {
        // Increment the correct answer count
        correctAnswerCount++;
    }
    formEl5.style.display = 'flex';
}

function next5(param_div_id, wrongAnswer) {
    document.getElementById('question5').innerHTML = document.getElementById('results').innerHTML;
    if (wrongAnswer){
        timerFunction(true)
    } else {
    // Increment the correct answer count
    correctAnswerCount++;
    }
    resultsEl.style.visibility = 'visible';
    initialsEl.style.display = 'flex';
    document.getElementById('question5').style.display = 'none';
    clearInterval(testTimer);
    var score = (correctAnswerCount / 5) * 100; // Calculate the score percentage
    paragraphEl.textContent = "Your final score is " + score + "%!";
}

//This is the timer function that defines the timer going down by one second, as well as defining 'wrongAnswer' as minusing ten seconds
function timerFunction(wrongAnswer){
    if (wrongAnswer){
        timerCount = timerCount - 10;
    }
    else {
        timerCount--;
    }
    timerEl.textContent = "Time: " + timerCount;
    if (timerCount < 1){
        alert("YA FAILED YA GOOBER!")
        clearInterval(testTimer)
    }
}

//This is the function that sets the score into local storage, it is also supposed to display your scores on the 'High Scores' page, but fails to do so currently
function setHighScores(){
    var testing = localStorage.setItem(textAreaEl.value, timerCount);
    textAreaEl.value = " ";
    JSON.stringify(testing);
   
    var highScores = JSON.parse(testing);
    var finalTestEl = document.querySelector("#append")

finalTestEl.append(highScores);
}


    //This clears your local storage, defined by clicking the 'Clear High Scores' button on the 'High Scores' page
function clearLocalStorage(){
    localStorage.clear();
}