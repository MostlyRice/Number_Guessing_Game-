
var playerGuessArray = [];
var randNum = 11;
var winners = [];


$(document).ready(onReady);


function onReady(){  
   // indexAppend();
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
            winners.push('PLAYER 1 WINS!');
        } // end player 1 winner
        else if (playerGuessArray[i].playerOne > randNum) {
            var p1Div = '<div id="p1Div">';
            p1Div += '</div>';
            $('.playerOne').append(p1Div);
            $('#p1Div').empty();
            var p1High = '<p>';
            p1High += 'Player 1, This is too high: ';
            p1High += playerGuessArray[i].playerOne;
            p1High += '</p>';
            $('#p1Div').append(p1High);
        } // end player 1 too high
        else if (playerGuessArray[i].playerOne < randNum) {
            var p1Div = '<div id="p1Div">';
            p1Div += '</div>';
            $('.playerOne').append(p1Div);
            $('#p1Div').empty();
            var p1Low = '<p>';
            p1Low += 'Player 1, This is too low: ';
            p1Low += playerGuessArray[i].playerOne;
            p1Low += '</p>';
            $('#p1Div').append(p1Low);
        } // end player 1 too low
    } // end loop
} // end check winner player 1

function checkWinnerTwo() {
    for (var i=0; i<playerGuessArray.length; i++) {
        if(playerGuessArray[i].playerTwo === randNum) {
            winners.push('PLAYER 2 WINS!');
        } // end player 2 winner
        else if (playerGuessArray[i].playerTwo > randNum) {
            var p2Div = '<div id="p2Div">';
            p2Div += '</div>';
            $('.playerTwo').append(p2Div);
            $('#p2Div').empty();
            var p2High = '<p>';
            p2High += 'Player 2, This is too high: ';
            p2High += playerGuessArray[i].playerTwo;
            p2High += '</p>';
            $('#p2Div').append(p2High);
        } // end player 2 too high
        else if (playerGuessArray[i].playerTwo < randNum) {
            var p2Div = '<div id="p2Div">';
            p2Div += '</div>';
            $('.playerTwo').append(p2Div);
            $('#p2Div').empty();
            var p2Low = '<p>';
            p2Low += 'Player 2, This is too low: ';
            p2Low += playerGuessArray[i].playerTwo;
            p2Low += '</p>';
            $('#p2Div').append(p2Low);
        } // end player 2 too low
    } // end loop
} // end check winner player 2

function checkWinnerThree() {
    for (var i=0; i<playerGuessArray.length; i++) {
        if(playerGuessArray[i].playerThree === randNum) {
            winners.push('PLAYER 3 WINS!');
        } // end player 3 winner
        else if (playerGuessArray[i].playerThree > randNum) {
            var p3Div = '<div id="p3Div">';
            p3Div += '</div>';
            $('.playerThree').append(p3Div);
            $('#p3Div').empty();
            var p3High = '<p>';
            p3High += 'Player 3, This is too high: ';
            p3High += playerGuessArray[i].playerThree;
            p3High += '</p>';
            $('#p3Div').append(p3High);
        } // end player 3 too high
        else if (playerGuessArray[i].playerThree < randNum) {
            var p3Div = '<div id="p3Div">';
            p3Div += '</div>';
            $('.playerThree').append(p3Div);
            $('#p3Div').empty();
            var p3Low = '<p>';
            p3Low += 'Player 3, This is too low: ';
            p3Low += playerGuessArray[i].playerThree;
            p3Low += '</p>';
            $('#p3Div').append(p3Low);
        } // end player 3 too low
    } // end loop
} // end check winner player 3

function checkWinnerFour() {
    for (var i=0; i<playerGuessArray.length; i++) {
        if(playerGuessArray[i].playerFour === randNum) {
            winners.push('PLAYER 4 WINS!');
        } // end player 4 winner
        else if (playerGuessArray[i].playerFour > randNum) {
            var p4Div = '<div id="p4Div">';
            p4Div += '</div>';
            $('.playerFour').append(p4Div);
            $('#p4Div').empty();
            var p4High = '<p>';
            p4High += 'Player 4, This is too high: ';
            p4High += playerGuessArray[i].playerFour;
            p4High += '</p>';
            $('#p4Div').append(p4High);
        } // end player 4 too high
        else if (playerGuessArray[i].playerFour < randNum) {
            var p4Div = '<div id="p4Div">';
            p4Div += '</div>';
            $('.playerFour').append(p4Div);
            $('#p4Div').empty();
            var p4Low = '<p>';
            p4Low += 'Player 4, This is too high: ';
            p4Low += playerGuessArray[i].playerFour;
            p4Low += '</p>';
            $('#p4Div').append(p4Low);
        } // end player 4 too low
    } // end loop
    winnerFound();
} // end check winner player 4

function winnerFound() {
    if (winners.length > 0) {
            alert(winners += "   DO YA FEEL IT!?!?!?");
        var createRestart = '<button id="restartBtn">Restart Game</button>';
        $('#gameUI').append(createRestart);
    } // end winner found if
    else {
        playerGuessArray = [];
        winners = [];
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