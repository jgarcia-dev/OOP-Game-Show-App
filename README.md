# OOP Game Show App
Project 4 for Treehouse Full Stack JavaScript Techdegree
Browser-based, word guessing game. Created using the principles of Object-Oriented Programming.

## Technologies used:
- HTML
- CSS
- JavaScript

## Description:
- Players must guess all the letters in a random phrase.  At the beginning the player will only see blank boxes that represent the letters of the phrase.
- Player will use an onscreen keyboard to pick letters they believe to be in the mystery phrase.
Once a letter is clicked on the keyboard it is disabled so the player can’t select it again.
- Selected letters that appear in the phrase will be revealed on screen.  All instances of a correctly chosen letter will be revealed in the phrase.  For example, if there are 3 S’s in the phrase and the player picks S from the onscreen keyboard, then all S’s in the phrase will be revealed.
- If a letter chosen is not in the phrase then the player will lose a life.  Heart icons at the bottom of the screen will indicate how many lives (tries) a player has left.  Players have 5 tries to guess the hidden phrase.
- If a player exhausts all their lives before revealing the whole phrase they lose the game.
- If a player reveals all the letters in the phrase before they run out of lives ,they win.

## Added style Changes to original CSS
- When a correct letter is revealed in phrase it will grow and exhibit a momentary small color shift.
  - custom animations added to styles.css:
    - growMe
    - colorChange

- When a key chosen is wrong it will also shake slightly.
  - custom animation added to styles.css:
    - wiggleMe