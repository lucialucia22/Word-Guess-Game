// to keep track of wins/loses 
let wins = 0;
let loses = 0;

// to keep track of how many letters the user got right so far
let correctGuesses = 0;
let userGuesses = [];

let guessesLeft = 5;

let nintiesWords = ['tupac','biggie','y2k']

let guessWord = nintiesWords[Math.floor(Math.random()* 3)]
console.log(guessWord);

var blank_spaces = [];

for (let i = 0; i < guessWord.length; i++) {
    blank_spaces.push(8);
}

console.log(blank_spaces);

// This function is run whenever the user processes a key. 
document.onkeyup = function(event) {
    //determine which key was pressed
    var userGuess = event.key;
    console.log(userGuess);
}