// Establishing Global Var
var highScoresEl = document.querySelector("#highScores");
var clearButtonEl = document.querySelector("#clearButton");
var scores = localStorage.getItem("scores");
var scoresObj = scores ? JSON.parse(scores) : {};
// Applies Highscore
for (var initials in scoresObj) {
    var score = scoresObj[initials];
    var listItem = document.createElement("li");
    listItem.textContent = initials + ": " + score;
    highScoresEl.appendChild(listItem);
}
// Clears Local Scores
clearButtonEl.addEventListener("click", function() {
    localStorage.removeItem("scores");
    highScoresEl.innerHTML = "";
});
