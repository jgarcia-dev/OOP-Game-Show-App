/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').toLowerCase();
    }

    /**
     * Adds letter placeholders to the display when game starts
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
     * Checks to see if the letter selected by the player matches a letter in the phrase
     * @return {boolean} Boolean value indicating if letter is in phrase (true) or not (false)
     */
    checkLetter(letter) {
        return this.phrase.indexOf(letter) > -1;
    }

    /**
     * Reveals the letter(s) on the board that matches the player's selection
     */
    showMatchedLetter(letter) {
        const matches = document.getElementsByClassName(letter);

        for (let match of matches) {
            match.classList.remove('hide');
            match.classList.add('show');
        }
    }
}