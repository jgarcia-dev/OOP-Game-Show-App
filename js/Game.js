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
     * Hides the start screen overlay, gets random phrase and sets activePhrase
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
}