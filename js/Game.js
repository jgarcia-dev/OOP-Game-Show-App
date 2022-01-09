/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('May the Force be with you'),
            new Phrase('You shall not pass'),
            new Phrase('To infinity and beyond'),
            new Phrase('I am Iron Man'),
            new Phrase('Hasta La Vista Baby')
        ];
        this.activePhrase = null;
        this.boardReady = false;
    }

    /**
     * Randomly retrieves a phrase from phrases array
     * @return {Object} Phrase object returned
     */
    getRandomPhrase() {
        const min = 0;
        const max = this.phrases.length;
        const randNum = Math.floor(Math.random() * (max - min) + min);
        return this.phrases[randNum];
    }

    /**
     * Sets up the game
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('qwerty').style.display = 'block';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.boardReady = true;
    }

    /**
     * Handles player input interaction with onscreen and computer keyboard.
     * Checks to see if player selected letter is n phrase and styles elements accordingly
     * Checks if game is won or lost.
     * @param {object} keyButton representing onscreen keyboard key the player selected.
     */
    handleInteraction(keyButton) {
        if (this.boardReady) {    
            const playerChar = keyButton.textContent;

            if (this.activePhrase.checkLetter(playerChar)) {
                // if letter is in phrase
                this.activePhrase.showMatchedLetter(playerChar);
                keyButton.classList.add('chosen');
                if (this.checkForWin()) {
                    this.gameOver();
                }
            } else {
                // if letter is not in phrase
                if (!keyButton.classList.contains('wrong')) {
                    keyButton.classList.add('wrong');
                    this.removeLife();
                }
            }
        }
    }

    /**
     * Removes life from scoreboard
     * Game ended once player has missed 5 times.
     */
    removeLife() {
        if (this.missed < 4) {
            const tries = document.getElementsByClassName('tries');
            const currHeart = tries[this.missed].firstElementChild;
            currHeart.setAttribute('src', 'images/lostHeart.png');
            this.missed += 1;
        } else {
            this.gameOver();
        }
    }

    /**
     * Checks phrase to see if all the letters have been revealed
     * @return {boolean} Boolean value indicating if all the letters are revealed (true) if they are, (false) if not.
     */
    checkForWin() {
        const lettersHtmlCol = document.getElementsByClassName('letter');
        
        for (let element of lettersHtmlCol) {
            if (element.classList.contains('show')) {
                // letter is revealed
                continue;
            } else {
                // letter not revealed
                return false;
            }
        }

        // all letters revealed
        return true;
    }

    /**
     * Displays the original screen overlay and message based on game outcome
     */
    gameOver() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';

        if (this.checkForWin()) {
            // win
            document.getElementById('game-over-message').textContent = "You Win!";
            overlay.setAttribute('class', 'win');
        } else {
            // lose
            document.getElementById('game-over-message').textContent = "Sorry, you lose"
            overlay.setAttribute('class', 'lose');
        }
    
        this.resetGame();
    }

    /**
     * clears phrase elements and resets game
     */
    resetGame() {
        // clear game board phrase
        const parentUl = document.getElementById('phrase').firstElementChild;
        const letterLis = parentUl.querySelectorAll('li');
        letterLis.forEach(li => li.remove());

        // reset and onscreen keyboard 
        [...document.querySelectorAll('.key')].forEach(keyEl => {
            keyEl.className = '';
            keyEl.classList.add('key');
        });

        // hide onscreen keyboard
        document.getElementById('qwerty').style.display = 'none';
        
        // reset lives
        document.querySelectorAll('.tries').forEach(tryEl => {
            tryEl.firstElementChild.setAttribute('src', 'images/liveHeart.png');
        });

        this.missed = 0;
        this.boardReady = false;
    }
}