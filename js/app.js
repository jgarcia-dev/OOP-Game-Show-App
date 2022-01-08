/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;

/**
 * EVENT LISTENERS
 */

// Game start
document.getElementById('btn__reset').addEventListener('click', (event)=> {   
    if (event.target.tagName === 'BUTTON') {
        game = new Game();
        game.startGame();
    }
});

// onscreen keyboard
document.getElementById('qwerty').addEventListener('click', (event)=> { 
    if (game !== undefined) {
        if (event.target.classList.contains('key')) {
            game.handleInteraction(event.target);
        }
    }
});

// player computer physical keyboard
document.addEventListener('keyup', (event)=> {
    if (game !== undefined) {
        // get onscreen keyboard element corresponding to key pressed
        const onscreenKeyEl = [...document.getElementsByClassName('key')]
            .find(el => el.textContent === event.key);

        if (onscreenKeyEl !== undefined) {
            game.handleInteraction(onscreenKeyEl);
        }
    }
});