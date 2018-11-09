# Word-Guess-Game

current function names:
    shuffle
    renderWord
    updateScore
    updateGuesses



     revealLetter: function () { // HOW CAN YOU APPLY THIS TO INDEXES OF THE SAME VALUE?????????
        var userInput = event.key.toLowerCase();
        var charIndex = game.spreadWord.indexOf(userInput);
        this.dashes[charIndex] = this.spreadWord[charIndex];
        console.log(this.dashes);
        document.getElementById("currentWordText").innerHTML = this.dashes.join("");
    }