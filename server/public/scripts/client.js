$(document).ready(onReady);

function onReady(){
  indexAppend();
    $('#submitGuessBtn').on('click', guessCounter);
}

var guessesMade = 0;

function guessCounter() {
    guessesMade++;
    var createCountDiv = '<div id=guessCountDiv>';
    createCountDiv += '</div>';
    $('#gameUI').append(createCountDiv);
    $('#guessCountDiv').empty();
    var totalGuesses = '<h4>';
    totalGuesses += 'Number of Guesses: ';
    totalGuesses += guessesMade;
    totalGuesses += '</h4>';
    $('#guessCountDiv').append(totalGuesses);
} // end guess counter

function indexAppend(){
   console.log('Appender Function');
   var $gameUI = $('#gameUI');
   var stringToAppend = '';
   $gameUI.empty();
   stringToAppend += `<h1>Number Guessing Game</h1>`
   stringToAppend += `<div class="playerOne">`
   stringToAppend += `<p>Player 1<p>`
   stringToAppend += `<input type="text" class='guessInput' placeholder="Player 1 Guess">`
   stringToAppend += `</div>`
   stringToAppend += `<div class="playerTwo">`
   stringToAppend += `<p>Player 2<p>`
   stringToAppend += `<input type="text" class='guessInput' placeholder="Player 2 Guess">`
   stringToAppend += `</div>`
   stringToAppend += `<div class="playerThree">`
   stringToAppend +=  `<p>Player 3<p>`
   stringToAppend += `<input type="text" class='guessInput' placeholder="Player 3 Guess">`
   stringToAppend += `</div>`
   stringToAppend += `<div class="playerFour">`
   stringToAppend += `<p>Player 4<p>`
   stringToAppend += `<input type="text" class='guessInput' placeholder="Player 4 Guess">`
   stringToAppend += `</div>`
   stringToAppend += `</br>`
   stringToAppend += `<button id="submitGuessBtn">Submit Guesses</button>`
   stringToAppend += `<button id="cancelBtn">Cancel Guesses</button>`
   $gameUI.append(stringToAppend);
} // end indexAppend
