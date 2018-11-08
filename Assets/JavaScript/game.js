//OBJECT
var game = {
    words: ["anemone", "barnacle", "barracuda", "dolphin", "flounder", "hammerhead", "jellyfish", "lobster", "manatee", "narwhal", "octopus", "oyster", "seahorse", "seaweed", "shipwreck", "shrimp", "stingray", "submarine", "swordfish", "tsunami"],
    score: 0,
    currentWord: " ",
    guesses: 12,
    already: " ",
    wordsIndex: 0,
    spreadWord: "",
    dashes: "",

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
            // document.getElementById("currentWordText").innerHTML = this.words[this.wordsIndex];
            this.currentWord = this.words[this.wordsIndex];
            console.log("current word: " + this.currentWord)
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
        console.log(this.spreadWord);
    },

    createDashes: function() {
        this.dashes = [];
        for (var i = 0; i < this.spreadWord.length; i++) {
            this.dashes.push("-  ");
        }
        document.getElementById("currentWordText").innerHTML = this.dashes.join("");
        console.log(this.dashes);
    }


};


// FUNCTIONS
//use fisher-yates shuffle to shuffle array at the start FUNCTION SHOULD NOT REPEAT
game.shuffle(game.words);
console.log(game.words);

game.renderWord();
game.updateScore();
game.updateGuesses();
game.characterize();
game.createDashes();

//begin with user input
document.onkeyup = function(event) {
    if (game.wordIndex == 20) {
        alert("There are no more words to guess!");
        return;
    }
    var userInput = event.key.toLowerCase();
}






// MAIN PROCESS

//choose random word from array

//user guesses letter
//if correct, letter replaces spot in word
//if wrong, letter shows up in guessed, and remaining guesses decreases

//letters already guessed should not be repeated

//when full word is guessed, score increases, sound plays, new word is chosen



