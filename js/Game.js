/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(phrases) {
        this.missed = 0;
        this.phrases = [
            new Phrase('May the Force be with you.'),
            new Phrase('You shall not pass.'),
            new Phrase('To infinity and beyond.'),
            new Phrase('I am Iron Man.'),
            new Phrase('Hasta La Vista, Baby.')
        ];
        this.activePhrase = null;
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
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Checks to see if the button clicked by the player matches a letter in the phrase.
     * Detects the selected latter's keyboard button then directs the game based on a correct or incorrect guess.
     * @param {object} event captured by event listener
     */
    handleInteraction(event) {
        
        if (event.target.classList.contains('key')) {

            const playerLetter = event.target.textContent;
        
            if (this.activePhrase.checkLetter(playerLetter)) {
                // letter in phrase
                this.activePhrase.showMatchedLetter(playerLetter);
                event.target.classList.add('chosen');
                if (this.checkForWin()) {
                    this.gameOver();
                };
            } else {
                // letter not in phrase
                event.target.classList.add('wrong');
                this.removeLife();
            }
        }
    }

    /**
     * Removes life from scoreboard
     * Game ended once player has missed 5 times;
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

        // all letters checked and revealed
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
            document.querySelector('.title').textContent = 'You Win!';
            overlay.classList.replace('start', 'win');
        } else {
            // lose
            document.querySelector('.title').textContent = "Sorry, you lose"
            overlay.classList.replace('start', 'lose');
        }
    
        document.getElementById('btn__reset').textContent = 'Play Again';
    }
}