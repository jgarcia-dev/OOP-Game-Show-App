/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let currGame = null;
const resetBtn = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');


/**
 * EVENT LISTENERS
 */

// Game start
resetBtn.addEventListener('click', ()=> {  
    currGame = new Game();
    currGame.startGame();
});

// Player interaction
keyboard,addEventListener('click', (event)=> {
    if (event.target.classList.contains('key')) {     
        currGame.handleInteraction(event);
    }
});