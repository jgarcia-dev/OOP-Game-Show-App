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
                this.activePhrase.showMatchedLetter(playerLetter);
                event.target.classList.add('chosen');
                // this.checkForWin();
            } else {
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
        if (this.missed < 5) {
            const tries = document.getElementsByClassName('tries');
            const currHeart = tries[this.missed].firstElementChild;
            currHeart.setAttribute('src', 'images/lostHeart.png');
            this.missed += 1;
        } else {
            // this.gameOver();
        }
    }

    /**
     * Checks to see if player has revealed all letters of the active phrase
     */
    checkForWin() {

    }

    /**
     * Displays the original screen overlay and message based on game outcome
     */
    gameOver() {}
}