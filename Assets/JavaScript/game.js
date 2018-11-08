// VARIABLES
var words = ["anemone", "barnacle", "barracuda", "dolphin", "flounder", "hammerhead", "jellyfish", "lobster", "manatee", "narwhal", "octopus", "oyster", "seahorse", "seaweed", "shipwreck", "shrimp", "stingray", "submarine", "swordfish", "tsunami"];

var score = 0
var currentWord = " ";
var guesses = 12;
var already = " ";
var wordsIndex = 0;



// FUNCTIONS

//updates score
function updateScore() {
    document.getElementById("scoreText").innerHTML = score;
}
//updates remaining guesses
function updateGuesses() {
    document.getElementById("guessesText").innerHTML = guesses;
}



// MAIN PROCESS

//choose random word from array

//user guesses letter
//if correct, letter replaces spot in word
//if wrong, letter shows up in guessed, and remaining guesses decreases

//letters already guessed should not be repeated

//when full word is guessed, score increases, sound plays, new word is chosen

document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase;
}