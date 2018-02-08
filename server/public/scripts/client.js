$(document).ready(onReady);

function onReady(){
  // indexAppend();
    $('#submitGuessBtn').on('click', guessCounter);
}

var guessesMade = 0;

 /*function indexAppend(){
    console.log('Appender Function');
    var $gameUI = $('#gameUI');
    var stringToAppend = '';
    $gameUI.empty();
    stringToAppend += `<p>I can do what I want</p>` // Add to DOM, copy this, paste below
    $gameUI.append(stringToAppend);
}*/

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

