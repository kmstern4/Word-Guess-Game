//OBJECT
var game = {
    words: ["anemone", "barnacle", "barracuda", "dolphin", "flounder", "hammerhead", "jellyfish", "lobster", "manatee", "narwhal", "octopus", "oyster", "seahorse", "seaweed", "shipwreck", "shrimp", "stingray", "submarine", "swordfish", "tsunami"],
    score: 0,
    currentWord: "",
    guesses: 8,
    already: [],
    wordsIndex: 0,
    spreadWord: "",
    dashes: [],
    correct: [],

    shuffle: function(array) {
        var i = array.length, j = 0, temp;
        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            temp = array[i];
            array[i] = array[j];
            array [j] = temp;
        }
        return array;
    },

    renderWord: function() {
        if (this.wordsIndex <= (this.words.length - 1)) {
            this.currentWord = this.words[this.wordsIndex];
        }
    },

    updateScore: function() {
        document.getElementById("scoreText").innerHTML = this.score;
    },

    updateGuesses: function() {
        document.getElementById("guessesText").innerHTML = this.guesses;
    },

    characterize: function() {
        var str = this.currentWord;
        this.spreadWord = [...str];
    },

    createDashes: function() {
        for (var i = 0; i < this.spreadWord.length; i++) {
            this.dashes.push("-  ");
        }
        document.getElementById("currentWordText").innerHTML = this.dashes.join("");
    },

    addAlready: function() {
        var userInput = event.key.toLowerCase();
        this.already.push(userInput);
        document.getElementById("alreadyText").innerHTML = this.already.join(" ");
    },

    updateAlready: function() {
        document.getElementById("alreadyText").innerHTML = this.already.join("");
    },

    addCorrect: function() {
        var userInput = event.key.toLowerCase();
        this.correct.push(userInput);
    },

    revealLetter: function () { 
        var userInput = event.key.toLowerCase();
        for (i=0; i < this.spreadWord.length; i++) {
            if (this.spreadWord[i] == userInput) {
                this.dashes[i] = userInput;
            }
            document.getElementById("currentWordText").innerHTML = this.dashes.join("");
        }
        

    },

    startGame: function () {
        this.currentWord = "";
        this.guesses = 8;
        this.already = [];
        this.spreadWord = "";
        this.dashes = [];
        this.correct = [];
        this.renderWord();
        this.updateGuesses();
        this.characterize();
        this.createDashes();
        this.updateScore();
        this.updateAlready();
    },

    winCondition: function() {
        if (game.guesses == 0) {  
            alert("You have no more guesses! You lose this round. The word was " + this.currentWord + "!");
            game.wordsIndex++;
            this.startGame();
        }
    
        if (game.dashes.toString() === game.spreadWord.toString()) {
            alert("You correctly guessed " + this.currentWord + "!");
            game.wordsIndex++;
            game.score++;
            this.startGame();
        }
    },

};


// FUNCTIONS
//use fisher-yates shuffle to shuffle array at the start; do not repeat this function
game.shuffle(game.words);
console.log(game.words);

game.startGame();



//begin with user input
document.onkeyup = function(event) {
    if (game.wordsIndex == game.words.length) {
        alert("There are no more words to guess!");
        return;
    }

    

    

    var userInput = event.key.toLowerCase();

    if (game.spreadWord.indexOf(userInput) < 0 && game.already.indexOf(userInput) < 0)  {
        game.addAlready();
        game.guesses--;
        game.updateGuesses();
        game.winCondition();
    }
    else if (game.spreadWord.indexOf(userInput) > -1 && game.correct.indexOf(userInput) < 0) {
        game.addCorrect();
        game.revealLetter();
        game.winCondition();
    };
    
}






// MAIN PROCESS

//choose random word from array

//user guesses letter
//if correct, letter replaces spot in word
//if wrong, letter shows up in guessed, and remaining guesses decreases

//letters already guessed should not be repeated

//when full word is guessed, score increases, sound plays, new word is chosen



