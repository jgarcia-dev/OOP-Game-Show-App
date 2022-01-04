/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
const resetBtn = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');


/**
 * EVENT LISTENERS
 */

// Game start
resetBtn.addEventListener('click', ()=> {
    game.startGame();
});

// Player interaction
keyboard,addEventListener('click', (event)=> {
    game.handleInteraction(event);
});