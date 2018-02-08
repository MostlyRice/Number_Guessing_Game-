$(document).ready(onReady);

function onReady(){
    indexAppend();
}

function indexAppend(){
    console.log('Appender Function');
    var $gameUI = $('#gameUI');
    var stringToAppend = '';
    $gameUI.empty();
    stringToAppend += `<p>I can do what I want</p>` // Add to DOM, copy this, paste below
    $gameUI.append(stringToAppend);
}

