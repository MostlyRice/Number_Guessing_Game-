console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('jq');
    indexAppend();
}

function indexAppend(){
    console.log('Appender Function');
    var $gameUI = $('#gameUI');
    var stringToAppend = '';
    $gameUI.empty();
    stringToAppend += `<p>I can do what I want</p>`
    $gameUI.append(stringToAppend);
  }