/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        // remove punctuation and make lowercase
        this.phrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').toLowerCase();
    }

    /**
     * Adds phrase letter placeholders to the display game board
     */
    addPhraseToDisplay() {
        const phraseUl = document.getElementById('phrase').firstElementChild;
        
        for (let i = 0; i < this.phrase.length; i++) {
            const letter = this.phrase.charAt(i);
            const li = document.createElement('li');

            if (letter === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('hide');
                li.classList.add('letter');
                li.classList.add(`${letter}`);
            }

            li.textContent = letter;

            phraseUl.appendChild(li);
        }
    }

    /**
     * Checks to see if letter exists in the phrase
     * @return {boolean} Boolean value indicating if letter is in phrase (true) or not (false)
     */
    checkLetter(letter) {
        return this.phrase.indexOf(letter) > -1;
    }

    /**
     * Reveals letter(s) on the game board phrase that match the player's selection
     * @param {string} playerLetter - letter a player has selected
     */
    showMatchedLetter(playerLetter) {
        const matchesHTMLCol = document.getElementsByClassName(playerLetter);

        for (let match of matchesHTMLCol) {
            match.classList.remove('hide');
            match.classList.add('show');
        }
    }
}