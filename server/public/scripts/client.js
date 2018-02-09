
var playerGuessArray = [];
var randNum = 11;
var winners = [];


$(document).ready(onReady);


function onReady(){  
setupAppend();
$('#gameUI').on('click', '#start', playAppend);
    $('#submitGuessBtn').on('click', function() {
        var newObject = {
            playerOne: Number($('#playerOneInput').val()),
            playerTwo: Number($('#playerTwoInput').val()),
            playerThree: Number($('#playerThreeInput').val()),
            playerFour: Number($('#playerFourInput').val())
        }; // end new object
    playerGuessArray.push(newObject);
    guessCounter();

    $('#playerOneInput').val('');
    $('#playerTwoInput').val('');
    $('#playerThreeInput').val('');
    $('#playerFourInput').val('');

    checkWinnerOne();
    checkWinnerTwo();
    checkWinnerThree();
    checkWinnerFour();
    }); // end submit

} // end onReady

function checkWinnerOne() {
    for (var i=0; i<playerGuessArray.length; i++) {
        if(playerGuessArray[i].playerOne === randNum) {
            winners.push('PLAYER 1 WINNING GUESS: ' + playerGuessArray[i].playerOne);
        } // end player 1 winner
        else if (playerGuessArray[i].playerOne > randNum) {
            console.log('PLAYER 1 TOO HIGH: ', playerGuessArray[i].playerOne);
        } // end player 1 too high
        else if (playerGuessArray[i].playerOne < randNum) {
            console.log('PLAYER 1 TOO LOW: ', playerGuessArray[i].playerOne);
        } // end player 1 too low
    } // end loop
} // end check winner player 1

function checkWinnerTwo() {
    for (var i=0; i<playerGuessArray.length; i++) {
        if(playerGuessArray[i].playerTwo === randNum) {
            winners.push('PLAYER 2 WINNING GUESS: ' + playerGuessArray[i].playerTwo);
        } // end player 2 winner
        else if (playerGuessArray[i].playerTwo > randNum) {
            console.log('PLAYER 2 TOO HIGH: ', playerGuessArray[i].playerTwo);
        } // end player 2 too high
        else if (playerGuessArray[i].playerTwo < randNum) {
            console.log('PLAYER 2 TOO LOW: ', playerGuessArray[i].playerTwo);
        } // end player 2 too low
    } // end loop
} // end check winner player 2

function checkWinnerThree() {
    for (var i=0; i<playerGuessArray.length; i++) {
        if(playerGuessArray[i].playerThree === randNum) {
            winners.push('PLAYER 3 WINNING GUESS: ' + playerGuessArray[i].playerThree);
        } // end player 3 winner
        else if (playerGuessArray[i].playerThree > randNum) {
            console.log('PLAYER 3 TOO HIGH: ', playerGuessArray[i].playerThree);
        } // end player 3 too high
        else if (playerGuessArray[i].playerThree < randNum) {
            console.log('PLAYER 3 TOO LOW: ', playerGuessArray[i].playerThree);
        } // end player 3 too low
    } // end loop
} // end check winner player 3

function checkWinnerFour() {
    for (var i=0; i<playerGuessArray.length; i++) {
        if(playerGuessArray[i].playerFour === randNum) {
            winners.push('PLAYER 4 WINNING GUESS: ' + playerGuessArray[i].playerFour);
        } // end player 4 winner
        else if (playerGuessArray[i].playerFour > randNum) {
            console.log('PLAYER 4 TOO HIGH: ', playerGuessArray[i].playerFour);
        } // end player 4 too high
        else if (playerGuessArray[i].playerFour < randNum) {
            console.log('PLAYER 4 TOO LOW: ', playerGuessArray[i].playerFour);
        } // end player 4 too low
    } // end loop
    winnerFound();
} // end check winner player 4

function winnerFound() {
    if (winners.length > 0) {
        console.log('WINNER FOUND!!!! ', winners);
        var createRestart = '<button id="restartBtn">Restart Game</button>';
        $('#gameUI').append(createRestart);
    } // end winner found if
    else {
        playerGuessArray = [];
    }
} // end winner found

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


function playAppend(){
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
 } // end playAppend

 function setupAppend(){
    console.log('Appender Function');
    var $gameUI = $('#gameUI');
    var stringToAppend = '';
    $gameUI.empty();
    stringToAppend += `<h1>Number Guessing Game</h1>`
    stringToAppend += `<h2>Setup</h2>`
    stringToAppend += `<select id="maxSetter">`
    stringToAppend += `<option value="15">Easy - 15</option>`
    stringToAppend += `<option value="100">Normal - 100</option>`
    stringToAppend += `<option value="1000000000">Impossible - 1,000,000,000</option>`
    stringToAppend += `</select>`
    stringToAppend += `<button id="start">Start</button>`
    $gameUI.append(stringToAppend);
 } // end setupAppend