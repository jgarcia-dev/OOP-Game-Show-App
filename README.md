# OOP Game Show App
Project 4 for Treehouse Full Stack JavaScript Techdegree
Browser-based, word guessing game. Created using the principles of Object-Oriented Programming.


## Technologies used:
- HTML
- CSS
- JavaScript
<br></br>

## Description:
- Players must guess all the letters in a random secret phrase from a movie.  
- When the player starts the game they will only see blank boxes that represent the letters of the phrase and an onscreen keyboard.

## Playing
- Player can play with mouse by clicking onscreen keyboard keys or use there own computer keyboard.
  - The onscreen keyboard will disable letters that have been selected.
  - A correct guess will reveal a letter.
  - A wrong guess will result in player loosing a life (heart). Player has 5 lives.
  - All instances of a correctly chosen letter will be revealed in the phrase.  For example, if there are 3 S’s in the phrase and the player picks S from the onscreen keyboard, then all S’s in the phrase will be revealed.
- Win
  - Player guesses all the letters in the secret phrase before lives run out.
- Lose
  - Player runs out of lives and did not reveal all letters in the secret phrase.
<br></br>

## Added style Changes to original CSS
- When a correct letter is revealed in phrase it will grow and exhibit a momentary color shift.
  - custom animations added to styles.css:
    - growMe
    - colorChange

- When a key chosen is wrong it will shake slightly.
  - custom animation added to styles.css:
    - wiggleMe
